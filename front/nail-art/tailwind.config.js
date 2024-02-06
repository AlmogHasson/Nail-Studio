/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'mobile':[{'min':'340px', 'max':'500px'}],
      'md': '768px',
      'lg': '1024px',
    },
    fontFamily:{
      'myFont' : 'Rouge Script'
    },
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '1200': '1200ms',
        '2': '2000ms'
      },
      spacing: {
        '2em':'2em',
      },
      colors :{
        'd-gray' : '#18181A'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mobile': {
          height: '20vh',
          top: '-25%',
          width: '70%',
          left: '15%'
        },
        '.crsl':{
          height: '200vh'
        },
        '.nav-button' :{
          'top':'2em',
          'right':'0',
          'position':'fixed',
          'border-radius':' 8px',
          'padding':' 0em 0.5em',
          'font-size': '1em',
          'font-weight': '500',
          'font-family': 'inherit',
          'cursor': 'pointer',
          'transition': 'right 0.5s ease-in-out',
          'border': '0',
          'z-index': '30'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

