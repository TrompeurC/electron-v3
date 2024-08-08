import  { createI18n, I18n } from 'vue-i18n'
import en from './lang/en'
import zhHans from './lang/zhHans'
import { App } from 'vue'
import { useAppConfig } from '@renderer/store/useAppConfig'

export let i18n:I18n | null = null

export const setupI18n = (app: App) => {
  i18n = createI18n({
    locale: useAppConfig().locale,
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

