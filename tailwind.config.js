/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  
}
module.exports = {
    content: {
      relative: true,
      files: [
        "./website/templates/*.html"
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
