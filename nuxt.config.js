export default {
  target: 'static',

  head: {
    title: 'flats-studio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap' }
    ],
  },

  css: [
    '~/assets/styles/main.scss',
  ],

  styleResources: {
    scss: [
     '~/assets/styles/main.scss',
    ],
   },

  plugins: [
    '~plugins/vue-bem-cn'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxtjs/style-resources'
  ],

  build: {},
}
