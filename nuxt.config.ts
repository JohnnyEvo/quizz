// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    modules: [
        "@lewebsimple/nuxt3-svg",
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    css: ["~/assets/css/tailwind.css"]
})
