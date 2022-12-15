/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,tsx,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
