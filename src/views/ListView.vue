<template lang="pug">
v-row#list
  v-col(cols="12")
    h1.text-center(style="color:white") 待辦事項
  v-col(cols="12")
    v-table
      thead
        tr
          th 名稱
          th 操作
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") 沒有事項
        tr(v-for="item in items" :key="item.id")
          td
            v-text-field(v-if="item.edit" v-model="item.model" autofocus :rules="[rules.required, rules.length]" @keydown.enter="confirmEditItem(item.id) ")
            span(v-else) {{ item.name }}
          td
            span(v-if="item.edit")
              v-btn(icon="mdi-check" variant="text" color="green" @click="confirmEditItem(item.id)")
              v-btn(icon="mdi-undo" variant="text" color="red" @click="undoEditItem(item.id)")
            span(v-else)
              v-btn(icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)")
              v-btn(icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)")
  v-divider
  v-col(cols="12")
    h1.text-center(style="color:white") 已完成事項
  v-col(cols="12")
    v-table
      thead
        tr
          th 名稱
          th 操作
      tbody
        tr(v-if="finishedItems.length === 0")
          td.text-center(colspan="2") 沒有事項
        tr(v-for="item in finishedItems" :key="item.id" ref="editInputs")
          td {{ item.name }}
          td
            v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const list = useListStore()
const { editItem, delItem, confirmEditItem, undoEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const editInputs = ref([])

const rules = {
  required(v) {
    return !!v || '欄位必填'
  },
  length(v) {
    return v.length > 3 || '必須超過三個字元'
  }
}

</script>
