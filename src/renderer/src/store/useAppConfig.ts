import { i18n } from "@renderer/locales"
import { defineStore } from "pinia"
import { ref } from "vue"


type LocaleType = 'zhHans' | 'en'

export const useAppConfig = defineStore('app', () => {

  // 暗黑模式
  const theme = ref<'light' | 'dark'>('light')
  const toggleTheme = () => {
    theme.value = theme.value === 'light'? 'dark' : 'light'
    document.documentElement.classList.toggle('dark')
  }
  const locale = ref<LocaleType>('zhHans')
  const changeLocale = (val:LocaleType ) => {
    locale.value = val
    i18n!.global.locale = val
  }
  return {
    theme,
    toggleTheme,
    locale,
    changeLocale
  }
}, {
  persist: true
})
