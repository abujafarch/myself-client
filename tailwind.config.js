/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'bai': ['Bai Jamjuree', 'sans-serif'],
      'chakra': ['Chakra Petch', 'sans-serif'],
      'rowdies': ['Rowdies', 'sans-serif'],
      'lobster': ['Lobster', 'sans-serif'],
      'pacifico': ['Pacifico', 'sans-serif'],
      'rubik': ['Rubik Glitch Pop', 'sans-serif'],
    }
  },
  plugins: [],
}

