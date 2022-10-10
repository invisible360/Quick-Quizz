/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ed283f",

          "secondary": "#4fe035",

          "accent": "#261770",

          "neutral": "#151523",

          "base-100": "#FCFCFD",

          "info": "#3487CB",

          "success": "#4ADE94",

          "warning": "#B96C13",

          "error": "#ED4048",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
