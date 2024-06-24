/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "page-purple": "#5267DF",
        "page-red": "#FA5959",
        "page-blue": "#242A45",
        "page-gray": "#9194A2",
        "page-white": "#f7f7f7",
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}

