import { QueryClient, VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query'
import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import enMessages from './locales/en.json'
import ruMessages from './locales/ru.json'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: enMessages,
    ru: ruMessages
  }
});


const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient: new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  }),
  queryClientConfig: {
    defaultOptions: {

      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false
      }
    }
  }
}
export default boot(({ app }) => {
  app.use(VueQueryPlugin, vueQueryPluginOptions).use(i18n)
})

