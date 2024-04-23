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
      },
      boxShadow: {
        'text': '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants:{},
  plugins: [
    require('@tailwindcss/forms')
  ],
}

