/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      },
      boxShadow:{
        'l-white':'-5px 0 5px white',
        'r-white':'5px 0px 5px white',
        'l-zinc': '-5px 0 5px #18181b',
        'r-zinc': '5px 0 5px #18181b',
        'around-white':'1px 1px 3px white,-1px -1px 3px white',
        
      },
      height:{
        'header':'72px'
      }
    },
  },
  plugins: [],
}
