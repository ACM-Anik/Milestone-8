/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#06497c",

          "secondary": "#83a4ef",

          "accent": "#86d136",

          "neutral": "#282A33",

          "base-100": "#F1F4F8",

          "info": "#A5BAE4",

          "success": "#139577",

          "warning": "#EFCE2A",

          "error": "#DF523A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
