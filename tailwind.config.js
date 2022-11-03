const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./composables/**/*.{vue,js,ts}",
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
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                alternative: 'rgb(var(--color-alternative))',
            },
            backgroundImage: {
              'primary-gradient': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xmlns:svgjs=\'http://svgjs.com/svgjs\' width=\'1440\' height=\'560\' preserveAspectRatio=\'none\' viewBox=\'0 0 1440 560\'%3e%3cg mask=\'url(%26quot%3b%23SvgjsMask1106%26quot%3b)\' fill=\'none\'%3e%3crect width=\'1440\' height=\'560\' x=\'0\' y=\'0\' fill=\'url(%23SvgjsLinearGradient1107)\'%3e%3c/rect%3e%3cuse xlink:href=\'%23SvgjsSymbol1114\' x=\'0\' y=\'0\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsSymbol1114\' x=\'720\' y=\'0\'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id=\'SvgjsMask1106\'%3e%3crect width=\'1440\' height=\'560\' fill=\'white\'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1=\'15.28%25\' y1=\'-39.29%25\' x2=\'84.72%25\' y2=\'139.29%25\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1107\'%3e%3cstop stop-color=\'rgba(128%2c 86%2c 253%2c 1)\' offset=\'0\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(157%2c 125%2c 254%2c 1)\' offset=\'1\'%3e%3c/stop%3e%3c/linearGradient%3e%3cpath d=\'M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z\' id=\'SvgjsPath1109\'%3e%3c/path%3e%3cpath d=\'M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z\' id=\'SvgjsPath1110\'%3e%3c/path%3e%3cpath d=\'M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z\' id=\'SvgjsPath1111\'%3e%3c/path%3e%3cpath d=\'M2 -2 L-2 2z\' id=\'SvgjsPath1113\'%3e%3c/path%3e%3cpath d=\'M6 -6 L-6 6z\' id=\'SvgjsPath1108\'%3e%3c/path%3e%3cpath d=\'M30 -30 L-30 30z\' id=\'SvgjsPath1112\'%3e%3c/path%3e%3c/defs%3e%3csymbol id=\'SvgjsSymbol1114\'%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'30\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'30\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'30\' y=\'150\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'30\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'30\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'30\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'30\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'30\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'30\' y=\'510\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'30\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'90\' y=\'30\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'90\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'90\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1112\' x=\'90\' y=\'210\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\' stroke-width=\'3\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'90\' y=\'270\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'90\' y=\'330\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'90\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'90\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'90\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'90\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'150\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'150\' y=\'90\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'150\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'150\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'150\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'150\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'150\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'150\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'150\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'150\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'30\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'90\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'210\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'210\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1112\' x=\'210\' y=\'270\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\' stroke-width=\'3\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'330\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'210\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'450\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'210\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'210\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'270\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'270\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'270\' y=\'150\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'270\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'270\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'270\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'270\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'270\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'270\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'270\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'330\' y=\'30\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'330\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'330\' y=\'150\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'330\' y=\'210\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1112\' x=\'330\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\' stroke-width=\'3\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'330\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'330\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'330\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'330\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'330\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'390\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'390\' y=\'90\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'390\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'390\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'390\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'390\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'390\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'390\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'390\' y=\'510\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'390\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'450\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'270\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'450\' y=\'450\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'450\' y=\'510\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'450\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'510\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'510\' y=\'90\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'510\' y=\'150\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'510\' y=\'210\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'510\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'510\' y=\'330\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'510\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'510\' y=\'450\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'510\' y=\'510\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'510\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'570\' y=\'30\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'570\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'570\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'570\' y=\'210\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'570\' y=\'270\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'570\' y=\'330\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'570\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'570\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'570\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'570\' y=\'570\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'630\' y=\'30\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'630\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'630\' y=\'150\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'630\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'630\' y=\'270\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'630\' y=\'330\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'630\' y=\'390\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'630\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'630\' y=\'510\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'630\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1113\' x=\'690\' y=\'30\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'690\' y=\'90\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1110\' x=\'690\' y=\'150\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1112\' x=\'690\' y=\'210\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\' stroke-width=\'3\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'690\' y=\'270\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'690\' y=\'330\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1109\' x=\'690\' y=\'390\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'690\' y=\'450\' stroke=\'rgba(254%2c 175%2c 130%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1111\' x=\'690\' y=\'510\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3cuse xlink:href=\'%23SvgjsPath1108\' x=\'690\' y=\'570\' stroke=\'rgba(17%2c 204%2c 204%2c 1)\'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e")'
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
