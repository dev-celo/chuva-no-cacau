/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      screens: {
        'xs': {'max': '350px'},
      },
    },
  },
  plugins: [],
}
