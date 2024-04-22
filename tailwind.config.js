/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B42DC',
        'secondary': '#F9F9F9',
      },
      fontFamily: {
        'heading': ['Heming'],
        'body': ['Violet Sans'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

