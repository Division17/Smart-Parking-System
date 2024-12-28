/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: { 
    extend: {
      fontFamily:{
        oregano:['oregano', 'sans-serif'],
        coming: [ 'Coming Soon', 'sans-serif'],
        short:[ 'Short Stack', 'sans-serif'],
      },
    },
  },
  plugins: [],
}