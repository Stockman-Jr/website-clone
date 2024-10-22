/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon-yellow": "rgb(212, 253, 65)",
      },
    },
  },
  plugins: [],
}

