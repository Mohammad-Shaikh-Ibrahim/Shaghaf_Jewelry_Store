/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {
      screens:{
        '2md': '960px'
      },
      fontFamily: {
        nanoSans: ['Nano Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Volkhov: ['Volkhov', 'serif'],
      },
    },
  },
  plugins: [],
}
