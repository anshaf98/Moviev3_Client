/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: "2.6rem",
      },
      colors: {
        main: "#080a1a",
        // subMain: "#f20000",
        // subMain: "#4cd137",
        subMain: "#341f97",
        dry: "#0b0f29",
        star: "#ffb000",
        text: "#c0c0c0",
        border: "#4b5563",
        dryGray: "#e0d5d5",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
