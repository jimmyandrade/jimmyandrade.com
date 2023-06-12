const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
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
        60: '#7CAFC4',
      },
      olive: {
        50: '#7F9172',
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
