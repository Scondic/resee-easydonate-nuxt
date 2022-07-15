import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    shopKey: '4223c208eeec0d60b28e04f579967328',

  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})