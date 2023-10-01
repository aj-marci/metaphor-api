/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'black': '#000000',
          'background': '#F7F7F7',
        },
        fontFamily: {
        'master': ['Ubuntu', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }