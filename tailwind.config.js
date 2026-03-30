/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your source files
  ],
  theme: {
    extend: {
      colors: {
        button: {
          start: '#05ABB6',
          end: '#6BDBE2',
        },
        transparent: 'rgba(255, 255, 255, 0.3)',
        highlight: '#388087',
        login: '#6FB3B8',
        logo:'#225677',
        para:'#9095A0',
        cta: '#5CBE8F',
        leftr:'#A7CAFF',
        right:'#9AFFF7',
        action: '#00BAA9',
        yellow: '#F8CA55',
        bgblack: '#212323',
        linkedin:'#1673FF',
        bggrey:'#171A1F',
        sun: '#FF9900',
        yoi: '#FFF8E7',
        ctao: '#EE7A26',
        grey: '#656971',
        read: '#116466',
        red: '#F85454',
        purple: '#B8A7FB',
        viola: '#583EBC',
        pink: '#EE266E',
        orange: '#EE7A26',
        story: {
          start: '#EE266E',
          end: '#5CBE8F',
        },
        span: {
          start: '#3AB4BC',
          end: '#5CBE8F',
        },
      },
      fontSize: {
        'small-size': '6px',  // Custom font size
      },
      screens: {
        'xs': '350px', // Extra small screens
        'lg': '850px',
        'xl':'1080px',// Custom large screens
        '4k': '2560px', // For 4K screens
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}