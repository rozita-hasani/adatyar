/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'latte': '#FFF9EBff',
        'silver': '#6E7073ff',
        'orange' : '#F8B787ff',
        'blush': '#DE5E81ff',
        'green': '#6ec2aac4',
        'macaroni': '#FFEBD3ff',
        'buff': '#FADF98ff',
        'c1': '#cbecb6',
        'c2': '#d7c9e9',
        'c3': '#c6c6c6',
        'c4': '#bbeae9',
        'c5': '#FFB4A1ff',
        'c6': '#fff6a7',
        'c7': '#ffc7da', 
        'c8': '#bce1ff', 
        'c9': '#ddf199',
        'charcoal': '#3E4553ff',
        'gunmetal': '#313642ff',
        'gray': '#848484'
      },
      height: {
        'vh': '100vh',
        '90': '358px'
      },
      inset: {
        '66': '272px',
        '25' : '100px'
      }
    },
  },
  plugins: [],
}
