// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: [
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-windicss',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
    public: {
      imgBaseUrl: ''
    }
  },
  css: ['@/assets/scss/style.scss'],
  app: {
    head: {
      title: 'nuxt3 starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: '' },
        { hid: 'description', name: 'description', content: 'nuxt3 starter meta desc' },
        { name: 'format-detection', content: 'telephone-no' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family-Roboto&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
