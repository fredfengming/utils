/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
