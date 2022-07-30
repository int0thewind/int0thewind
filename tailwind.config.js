/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      error: colors.red,
      warning: colors.orange,
      info: colors.sky,
      success: colors.green,
      primary: colors.blue,
      secondary: colors.indigo,
      gray: colors.neutral,
    },
    fontFamily: {
      serif: ['Cormorant Garamond', 'serif'],
    },
    extend: {},
  },
  plugins: [typography],
};
