/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow:{
        cart_sum:"0px 2px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 2px -2px rgba(0, 0, 0, 0.05)"
      }
      },
  },
  plugins: [],
}
