import  { createI18n, I18n } from 'vue-i18n'
import en from './lang/en'
import zhHans from './lang/zhHans'
import { App } from 'vue'
import { useAppStore } from '@renderer/store/useAppStore'

export let i18n:I18n | null = null

export const setupI18n = (app: App) => {
  const appConfig = useAppStore()
  i18n = createI18n({
    locale: appConfig.locale,
    fallbackLocale: 'zh-cn',
    messages: {
      en: {
        ...en
      },
      'zhHans': {
        ...zhHans
      }
    }
  })
  app.use(i18n)
}

