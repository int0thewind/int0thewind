/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
  /* next-theme append the 'data-theme' attribute to the html element.
   * Both 'class' and '[data-theme="dark"]' should be passed in
   * to allow tailwindcss dark mode to work.
   */
  darkMode: ['class', '[data-theme="dark"]'],
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
