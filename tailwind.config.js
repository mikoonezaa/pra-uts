/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        clrfigma: '#7F56DA'
      },
      backgroundImage: {
        "login" : "url('../img/bg.png')"
      }
    },
  },
  plugins: [],
}
