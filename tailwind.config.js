/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        darkBlue: "#161250",
        hoverColor: "#191280",
        violet: "#9D9DBC",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "background-light": "#ECF1F8",
        darkBlue: "#292272",
      },
    },
  },
  plugins: [require("daisyui")],
};
