/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      display: ['DM Sans', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
    },
    colors: {
      purple: {
        50: '#f7f4ff',
        75: '#ded2ff',
        100: '#d0bfff',
        200: '#bca4ff',
        300: '#ae91ff',
        400: '#7a66b3',
        500: '#6a589c',
      },
      blue: {
        50: '#ebf1fb',
        75: '#abc6f0',
        100: '#89afea',
        200: '#568ce1',
        300: '#3375db',
        400: '#245299',
        500: '#1f4786',
      },
      green: {
        50: '#ecfbef',
        75: '#afefbd',
        100: '#8ee8a2',
        200: '#5edf7a',
        300: '#3dd85f',
        400: '#2b9743',
        500: '#25843a',
      },
      neutral: {
        0: '#ffffff',
        10: '#fafbfb',
        20: '#f6f6f7',
        30: '#ededef',
        40: '#e1e2e4',
        50: '#c6c8cc',
        60: '#b8bbc0',
        70: '#acb0b6',
        80: '#9ea3a9',
        90: '#91959d',
        100: '#838891',
        200: '#757b85',
        300: '#676e78',
        400: '#5c636e',
        500: '#4e5562',
        600: '#424b68',
        700: '#323b49',
        800: '#252e3d',
        900: '#192333',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};