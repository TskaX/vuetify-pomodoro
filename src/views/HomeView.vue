<template lang="pug">
v-row#home
  v-col(cols="12")
    h1.current-text {{ currentText }}
    h1.current-time {{ currentTime }}
  v-col(cols="12")
    div.button-box
      v-btn(v-if="status !== 1" @click="startTimer") START
      v-btn(v-if="status === 1" @click="pauseTimer") STOP
    br
    v-btn(v-if="currentItem.length > 0" @click="finishTimer") NEXT
v-row#add
  v-col(cols="12")
    v-text-field(ref="input" v-model="newItem" label="新增事項" style="width:500px;" :rules="[rules.required, rules.length]" @keydown.enter="onInputSubmit")
      template(#append)
        v-btn(icon="mdi-plus" variant="text" @click="onInputSubmit")
v-row#next
  v-col(cols="12")
    h1.text-center(style="color:white") {{ itemOne }}
</template>

<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const list = useListStore()
const { currentItem, items, timeleft, itemFirst } = storeToRefs(list)
const { start, countdown, finish, addItem, getItemFirst } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

const newItem = ref('')
const input = ref(null)

// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

let timer = 0
const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (currentItem.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer()
      }
    }, 1000)
  }
}
const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = 0
  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()
  if (notify.value) {
    // eslint-disable-next-line
    const notification = new Notification('事項完成', {
      body: currentText.value,
      icon: 'https://github.com/wdaweb.png'
    })
  }
  finish()
  if (items.value.length > 0) {
    startTimer()
  }
}

const itemOne = computed(() => {
  getItemFirst()
  return items.value.length > 0 ? '下一個待辦事項 : ' + itemFirst.value.name : '好棒棒！待辦事項都完成了'
})

const currentText = computed(() => {
  return currentItem.value.length > 0 ? currentItem.value : items.value.length > 0 ? '點擊開始' : '目前沒有事項'
})
const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return (currentItem.value.length > 0 || items.value.length > 0) ? m + ':' + s : '別再廢了'
})

const rules = {
  required(v) {
    return !!v || '欄位必填'
  },
  length(v) {
    return v.length > 3 || '必須超過三個字元'
  }
}

const onInputSubmit = async () => {
  const valid = await input.value.validate()
  if (valid.length > 0) return
  addItem(newItem.value)
  // 取消新增完的 focus
  input.value.$el.querySelector('input').blur()
  input.value.reset()
}
</script>
