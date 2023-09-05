/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#000000",
        secondary: "#fcfcfc",
        accent: "#1322fc",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
};
