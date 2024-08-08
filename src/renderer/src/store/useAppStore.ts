import { i18n } from "@renderer/locales"
import { defineStore } from "pinia"
import { ref } from "vue"

type LocaleType = 'zhHans' | 'en'
/**
 * A Pinia store that manages application-wide settings.
 *
 * This store includes:
 * - `theme`: A reactive reference to the current theme, which can be either 'light' or 'dark'.
 * - `toggleTheme`: A function to toggle between 'light' and 'dark' themes and update the DOM class accordingly.
 * - `locale`: A reactive reference to the current locale, represented as a `LocaleType`.
 * - `changeLocale`: A function to change the current locale and update the i18n global locale.
 *
 * The store is configured to persist its state.
 *
 * @returns {Object} The store's state and actions.
 * @returns {Function} toggleTheme - Toggles between 'light' and 'dark' themes.
 * @returns {Function} changeLocale - Changes the current locale and updates the i18n global locale.
 * @returns {Ref<'light' | 'dark'>} theme - The current theme.
 * @returns {Ref<LocaleType>} locale - The current locale.
 */
export const useAppStore = defineStore('app', () => {
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
    toggleTheme,
    changeLocale,
    theme,
    locale,
  }
}, {
  persist:true,
})
