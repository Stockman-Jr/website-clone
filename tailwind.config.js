/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon-yellow": "rgb(212, 253, 65)",
      },
      fontFamily: {
        mono: ["Inconsolata", "monospace"],
        teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
}

