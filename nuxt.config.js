export default {
  target: 'static',

  buildDir: 'dist',

  ssr: false,

  generate: {
    fallback: true
  },

  head: {
    title: 'flats-studio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap' }
    ]
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  styleResources: {
    scss: [
     '~/assets/styles/main.scss'
    ]
   },

  plugins: [
    '~plugins/vue-bem-cn',
    { src: '~plugins/vue-awesome-swiper', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  build: {}
};
