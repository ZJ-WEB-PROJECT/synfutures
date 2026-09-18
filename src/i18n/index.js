import { computed } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import ja from './locales/ja'
import en from './locales/en'

// 默认日语；英语 locale 已保留，日后切换时直接启用即可
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: { ja, en },
})

/** 读取当前语言下的数组文案 */
export function useLocaleList(path) {
  const { messages, locale } = useI18n()
  return computed(() => {
    const value = path.split('.').reduce((acc, key) => acc?.[key], messages.value[locale.value])
    return Array.isArray(value) ? value : []
  })
}

export default i18n
