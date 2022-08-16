/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        Feather: "#77C9D4",
        Forest_Green: "#015249",
        Sleek_Gray: "#A5A5Af",
        Marine: "#57BC90",
        Resume: "#fffeee",
      },
    },
  },
  plugins: [],
};
