/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#3b5d50 ",
        secondary: "#f9bf29",
        third: "#dce5e4",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
