/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: {
      relative: true,
      files: [
        "./*.html"
      ]
    },
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
     },
  }
