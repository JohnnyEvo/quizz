const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./compositions/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./composables/**/*.{js,ts}",
        "./plugins/**/*.{js,ts}",
        "./App.{js,ts,vue}",
        "./app.{js,ts,vue}",
        "./Error.{js,ts,vue}",
        "./error.{js,ts,vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8056fd',
                secondary: '#feaf82',
                alternative: '#11cccc',
            },
            backgroundImage: {
              'primary-gradient': 'linear-gradient(0deg, rgba(128,86,253,1) 0%, rgba(157,125,254,1) 100%);'
            },
            fontFamily: {
                'sans': ['Ranade', ...defaultTheme.fontFamily.sans],
                'title': ['Excon']
            },
            translate: {
                'full-': '-100%'
            }
        },
    },
    plugins: [],
}
