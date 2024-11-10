export default {
  head: {
    titleTemplate: '%s - NuxtProject',
    title: 'NuxtProject',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    baseURL: '/api',  
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL || 'https://paradigmapi.pythonanywhere.com',  
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
      secure: false,
    },
  },

  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1976d2',  // primary blue
          accent: '#424242',   // grey
          secondary: '#ffb300', // amber
          info: '#00bcd4',      // teal
          warning: '#ff9800',   // orange
          error: '#f44336',     // red
          success: '#4caf50'    // green
        }
      }
    }
  },

  target: 'server', 

  
  build: {}
};
