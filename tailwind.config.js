/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
      relative: true,
      files: [
        "./website/templates/*.html"
      ]
    },
    theme: {
      extend: {},
    },
    plugins: [],
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
     },
  }
