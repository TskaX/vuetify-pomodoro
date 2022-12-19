import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  // 設定這個 store 的 id
  id: 'settings',
  // 這個 store 存了哪些資料
  state () {
    return {
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
        { id: 3, name: 'Pokemon', file: new URL('@/assets/寶可夢中心手機鈴聲.mp4', import.meta.url).href }
      ],
      selectedAlarms: 3,
      notify: false
    }
  },
  actions: {
    async toggleNotify () {
      // 檢查瀏覽器有沒有通知功能
      if (!this.notify && 'Notification' in window) {
        // 請求權限才可以發通知
        const permission = await Notification.requestPermission()
        if (permission === 'granted') this.notify = true
      } else {
        this.notify = false
      }
    }
  },
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarms)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarms', 'notify']
  }
})
