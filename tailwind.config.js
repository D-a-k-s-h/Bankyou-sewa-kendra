/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        michroma: ["Michroma", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight:{
        light: 300,
      },
      colors:{
        custom_pink: "#F6F4F0",
        darkBlue: "#7F8CAA",
        lightGreen: "#B8CFCE",
        lightGray: "#FFF"
      }
    },
  },
  plugins: [require('daisyui')],
};
