/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FA5A0A',
        secondary: '#FDF5F3'
      },
      backgroundImage: {
        'carousel': "url('../public/carousel.png')",
      },
      textStrokeWidth: {
        sm: '1px',
        DEFAULT: '2px',
        lg: '3px',
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',
        main: '#ff7f50',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '1px',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '3px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

