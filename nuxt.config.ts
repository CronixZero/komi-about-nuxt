import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",

  head: {
    title: 'Komi says Hi!',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'}]
  },

  modules: [
    '@nuxtjs/tailwindcss'
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
