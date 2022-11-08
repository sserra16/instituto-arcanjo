/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7D4B",
        secondary: "#157FB7",
        branco: "#C5C5C5",
        preto: "#2e2e2e",
      },
      fontFamily: {
        padrao: "'Montserrat', sans-serif;",
        title: "'Dream Orphans'",
      },
      backgroundImage: {
        bg1: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("./src/assets/bg1.jpg");',
        bg2: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("./src/assets/bg2.jpg");',
        bg3: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("./src/assets/bg3.jpg");',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
