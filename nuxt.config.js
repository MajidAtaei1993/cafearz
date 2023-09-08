import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - cafearz',
        title: 'cafearz',
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

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/font/font.css',
        '~/assets/css/style.css',
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        '~/assets/css/carousel/style-slick.css',
        '~/assets/css/carousel/responsive.css',
        // '~/assets/css/carousel/bootstrap.min.css',
        '~/assets/css/carousel/slick.css',
        '~/assets/css/carousel/animated-slider.css',
        '~/assets/css/font-awesome.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: './plugins/vue-slick-carousel.client.js' },
        { src: './plugins/menu.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        rtl: true,
        treeShake: true,
        option: {
            customeProperties: true
        },
        theme: {
            dark: false,
            light: false,
            themes: {
                dark: {
                    primary: '#050846',
                    accent: colors.grey.darken3,
                    secondary: '#48fb6f',
                    info: colors.teal.lighten1,
                    warning: '#f84960',
                    error: '#ed465c',
                    success: '#02c076',
                    azarColor: '#ff4040'
                },
                light: {
                    primary: '#050846',
                    accent: colors.grey.darken3,
                    secondary: '#48fb6f',
                    info: colors.teal.lighten1,
                    warning: '#f84960',
                    error: '#ed465c',
                    success: '#02c076',
                    azarColor: '#ff4040'
                },
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}