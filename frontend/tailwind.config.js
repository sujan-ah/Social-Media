/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1877F2",
        highlightcolor: "#58BC34",
        bordercolor: "#D9D9D9",
      },
      maxWidth: {
        logincontainer: "986px",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
