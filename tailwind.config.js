/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: false,
  },
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
}