/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
    },
    colors: {
      c_white: "hsl(0, 0%, 98%)",
      c_gray: "hsl(0, 0%, 41%)",
      c_black: "hsl(0, 0%, 8%)"
    },
  },
    
  },
  plugins: [],
}

