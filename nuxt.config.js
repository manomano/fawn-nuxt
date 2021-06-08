export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fawn-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxtjs/dotenv'],
  styleResources: {
    scss: [
      './assets/css/_mixins.scss', // use underscore "_" & also file extension ".scss"
      './assets/css/_variables.scss',
      './assets/css/_fonts.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
