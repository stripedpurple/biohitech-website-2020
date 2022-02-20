import axios from "axios";

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'BioHiTech Global',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Smart Solutions that Drive Zero Waste'},
      // Facebook
      {hid: "og:url", property: "og:url", content: "https://biohitech.com/"},
      {hid: "og:type", property: "og:type", content: "website"},
      {hid: "og:title", property: "og:title", content: "Innovative Food Waste and Energy Solutions | BioHiTech"},
      {hid: "og:description", property: "og:description", content: "Smart Solutions that Drive Zero Waste..."},
      {hid: "og:image", property: "og:image", content: "https://biohitech.com/img/hand-leaf-banner.jpg"},
      // twitter
      {hid: "twitter:url", property: "twitter:url", content: "https://biohitech.com/"},
      {hid: "twitter:card", name: "twitter:card", content: "summary_large_image"},
      {hid: "twitter:title", name: "twitter:title", content: "Innovative Food Waste and Energy Solutions | BioHiTech"},
      {hid: "twitter:description", name: "twitter:description", content: "Smart Solutions that Drive Zero Waste..."},
      {hid: "twitter:image", name: "twitter:image", content: "https://biohitech.com/img/hand-leaf-banner.jpg"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"}
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    {src: 'assets/styles/main.sass', lang: 'sass'}
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src:'~/plugins/tracker.js', type: 'text/javascript'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-46962375-8'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sitemap'
  ],

  auth: {
    plugins: [
      '~/plugins/roles'
    ],
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post'},
          logout: {url: '/auth/logout', method: 'delete'},
          user: {url: '/auth/current-user', method: 'get'},
        },
        // tokenRequired: true,
        tokenType: '',
        tokenName: 'x-biohitech-auth-token'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:3000/api/v1',
    prefix: '/api/v1',
    proxy: true
  },
  proxy: {
    '/api/v1/**': 'http://127.0.0.1:9327'
  },
  recaptcha: {
    hideBadge: true,
    siteKey: '6Lfc280UAAAAALlR7O6OiMINHX7gFwErOx_gsvjN',
    version: 3,
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  server: {
    host: '0.0.0.0'
    // ult: localhost
  },
  sitemap: {
    hostname: 'https://biohitech.com',
    exclude: [
      '/wp-admin',
      '/login',
      '/teapot',
      '/news/edit',
      '/careers/edit',
      '/admin',
      '/admin/**',
      '/customer-service/digester-support/contact',
      '/customer-service/cloud-support/contact'
    ],
    routes: async () => {
      const {data} = await axios.get('https://biohitech.com/api/v1/news/slugs')
      return data.map((slug) => `/news/${slug.slug}`)
    }
  },
}