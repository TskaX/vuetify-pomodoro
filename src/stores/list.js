import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore({
  id: 'list',
  state() {
    return {
      items: [],
      itemFirst: '',
      finishedItems: [],
      currentItem: '',
      id: 1,
      break: false,
      timeleft: time
    }
  },
  // 這裡放所有修改 state 的 function
  actions: {
    addItem(name) {
      // 用 this. 指向 state
      this.items.push({
        id: this.id++,
        name,
        edit: false,
        model: name
      })
    },
    getItemFirst() {
      return this.itemFirst = this.items[0]
    },
    getItemIndexById(id) {
      return this.items.findIndex(item => item.id === id)
    },
    editItem(id) {
      const i = this.getItemIndexById(id)
      this.items[i].edit = true
    },
    delItem(id) {
      const i = this.getItemIndexById(id)
      this.items.splice(i, 1)
    },
    confirmEditItem(id) {
      const i = this.getItemIndexById(id)
      if (this.items[i].model.length > 3) {
        this.items[i].name = this.items[i].model
        this.items[i].edit = false
      }
    },
    undoEditItem(id) {
      const i = this.getItemIndexById(id)
      this.items[i].model = this.items[i].name
      this.items[i].edit = false
    },
    start() {
      this.currentItem = this.break ? '休息一下' : this.items.shift().name
    },
    countdown() {
      this.timeleft--
    },
    finish() {
      if (!this.break) {
        if (this.finishedItems.length > 0) {
          this.finishedItems.splice(0, 1)
        }
        this.finishedItems.push({
          name: this.currentItem,
          id: this.id++
        })
      }
      this.currentItem = ''
      if (this.items.length > 0) {
        this.break = !this.break
      }
      this.timeleft = this.break ? timeBreak : time
    },
    delFinishedItem(id) {
      const i = this.finishedItems.findIndex(item => item.id === id)
      this.finishedItems.splice(i, 1)
    }
  },
  persist: {
    key: 'pomodoro-list'
  }
})
