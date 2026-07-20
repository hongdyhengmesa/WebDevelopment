/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens:{
        'widescreen': {'raw' : '(min-aspect-ratio: 2/3)'},
        'tallscreen': {'raw' : '(min-aspect-ratio: 1/2)'}
      }
    },
  },
  plugins: [],
}

