/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const {colors: defaultColors} = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                ...defaultColors,
                ...{
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
                    'done': '#2A9B63ff',
                    'notDone': '#E63946ff',
                    'gray900': '#313642ad',
                    'cream': '#ffebd3b8',
                    'alice-blue': '#E2E9F5ff',
                    'avocado': '#5B8225ff',
                    'yellow-green': '#9CC931ff',
                    'fern-green': '#2F501Eff'

                }
            },
            height: {
                'vh': '100vh',
                '90': '522px',
                '100': '592px'
            },
            width: {
                '66': '278px',
                '79': '326px'
            },
            inset: {
                '66': '272px',
                '25': '88px',
                '26': '104px',
                '38': '158px',
            },
            spacing: {
                "46": '182px'
            },
            fontSize: {
                ss: '0.6rem'
            },
            margin: {
                '50': '200px',
              }
        },
    }
}