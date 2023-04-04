/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: {
      relative: true,
      files: [
        "./templates/*.html"
      ]
    },
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [],
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
     },
  }
