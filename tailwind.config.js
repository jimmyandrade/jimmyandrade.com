const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      black: '#07050A',
      lavender: {
        70: '#C090D0',
      },
      grape: {
        40: '#5F4B8B',
      },
      sky: {
        90: '#E1E5F2',
        80: '#BFD3EE',
        70: '#9DC1D9',
        60: '#7CAFC4',
        50: '#5B9DB0',
        40: '#3A8B9C',
        30: '#1A7997',
        20: '#00668F',
        10: '#00557D',
      },
      olive: {
        10: '#1E1F1A',
        20: '#2B2D20',
        30: '#3E4827',
        40: '#5C6F58',
        50: '#7F9172',
        60: '#A4A88E',
        70: '#C9C9AA',
        80: '#EDEDD7',
        90: '#F8F8F2',
      },
      transparent: 'transparent',
      white: '#F3F1F8',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
};
