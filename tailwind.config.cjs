/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'latte': '#FFF9EBff',
        'silver': '#6E7073ff',
        'blush': '#DE5E81ff',
        'green': '#6ec2aac4',
        'macaroni': '#FFEBD3ff',
        'buff': '#FADF98ff',
        'darkGreen': '#cbecb6',
        'purple': '#d7c9e9',
        'gray': '#c6c6c6',
        'blue': '#bbeae9',
        'red': '#FFB4A1ff',
        'yellow': '#fff6a7',
        'pink': '#ffc7da',
        'darkBlue': '#bce1ff',
        'lightGreen': '#ddf199',
        'orange': '#F8B787ff',
        'charcoal': '#3E4553ff',
        'gunmetal': '#313642ff',
        'lightGray': '#848484',
        'per5': '#db2777',
        'per4': '#ec4899',
        'per3': '#f472b6',
        'per2': '#f9a8d4',
        'per1': '#fbcfe8',
        'per5d': '#1f2937',
        'per4d': '#374151',
        'per3d': '#4b5563',
        'per2d': '#6b7280',
        'per1d': '#9ca3af',
        'done': '#2A9B63ff',
        'notDone': '#E63946ff',
        'gray900': '#313642ad',
        'cream': '#ffebd3b8'
      },
      height: {
        'vh': '100vh',
        '90': '358px',
        '100': '560px'
      },
      width: {
        '66': '278px',
        '79': '314px'
      },
      inset: {
        '66': '272px',
        '25': '100px',
        '26': '104px',
        '38': '153px',
      },
      spacing: {
        "46": '182px'
      },
      fontSize: {
        ss: '0.6rem'
      }
    },
  }
}