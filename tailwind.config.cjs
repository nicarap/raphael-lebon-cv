/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0295A9',
        secondary: '#12ADC1',
        complementary: '#FDD037',
      },
      backgroundImage: {
        'french-flag': "url('/images/FrenchFlag.svg')",
        'uk-flag': "url('/images/UKFlag.svg')",
      }
    },
  },
  plugins: [],
}
