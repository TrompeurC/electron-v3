import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppConfig = defineStore('app', () => {
  // 暗黑模式
  const theme = ref<'light' | 'dark'>('light')
  const toggleTheme = () => {
    theme.value = theme.value === 'light'? 'dark' : 'light'
  }
  return {
    theme,
    toggleTheme
  }
}, {
  persist: true
})
