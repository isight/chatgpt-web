import type { App } from 'vue'
import type { Language } from '@/store/modules/app/helper'
import { createI18n } from 'vue-i18n'
import { useAppStoreWithOut } from '@/store/modules/app'
import enUS from './en-US'
import koKR from './ko-KR'
import zhCN from './zh-CN'
import zhTW from './zh-TW'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'zh-CN'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'ko-KR': koKR,
  },
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
