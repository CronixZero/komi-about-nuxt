import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  build: {
    transpile: [
      '@heroicons/vue'
    ]
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        'vue',
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
      ]
    }
  }
})
