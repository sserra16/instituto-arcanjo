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
        darkAlpha: "rgba(0,0,0,0.8)"
      },
      fontFamily: {
        padrao: "'Montserrat', sans-serif;",
        title: "'Dream Orphans'",
      },
      backgroundImage: {
        pessoa: "url(./src/assets/user.png)",
        bgMentoria:
          "linear-gradient(rgba(255, 125, 75, .5),  rgba(255, 125, 75, .7)), url(./src/assets/bg2.jpg)",
        bgMentoria:
          "linear-gradient(rgba(255, 125, 75, .5),  rgba(255, 125, 75, .7)), url(./src/assets/user.jpg)",
        bgMentoria:
          "linear-gradient(rgba(255, 125, 75, .5),  rgba(255, 125, 75, .7)), url(./src/assets/bg2.jpg)",
        bgMentoria:
          "linear-gradient(rgba(255, 125, 75, .5),  rgba(255, 125, 75, .7)), url(./src/assets/bg2.jpg)",
      },
    },
  },
  plugins: [],
};
