/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "static/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      display: ['DM Sans', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};