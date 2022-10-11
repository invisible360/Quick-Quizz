/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7256d8",

          "secondary": "#6ea5d8",

          "accent": "#6bef8c",

          "neutral": "#312933",

          "base-100": "#E6E2E9",

          "info": "#96DCF8",

          "success": "#198655",

          "warning": "#F28B1C",

          "error": "#ED122B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
