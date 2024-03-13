/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          '50': '#f4f7fb',
          '100': '#e7eff7',
          '200': '#cadded',
          '300': '#9bc1de',
          '400': '#66a1ca',
          '500': '#4285b5',
          '600': '#316b98',
          '700': '#265073',
          '800': '#254967',
          '900': '#233f57',
          '950': '#182939',
        },
        secondary: '#d8bd73',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
