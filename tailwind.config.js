/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      'main': 'rgb(0, 95, 245)',
      'main-light': 'rgb(229, 239, 255)',
      'gray': 'rgb(108,108,108)',
      'gray-light': 'rgb(246, 247, 251)',
      'white' : 'rgb(255, 255, 255)',
    },
    extend: {
      fontFamily: {
        'custom': ['Rubik', 'system-ui', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif],
      },
    },
  },
  plugins: [],
}
