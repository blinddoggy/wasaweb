/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        black1: "#000",
        "light-gray": "#f2f2f2",
        gray: {
          "100": "rgba(0, 0, 0, 0.2)",
          "200": "rgba(255, 255, 255, 0.6)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        "dark-grey": "#222",
        green: "#14f195",
        white: "#fff",
        purple: "#9945ff",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        archivo: "Archivo",
        "rubik-mono-one": "'Rubik Mono One'",
      },
      borderRadius: {
        "21xl": "40px",
        "25xl": "44px",
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      "221xl": "240px",
      "77xl": "96px",
      "41xl": "60px",
      "61xl": "80px",
      "21xl": "40px",
      "5xl": "24px",
      xl: "20px",
      "101xl": "120px",
      "29xl": "48px",
      "11xl": "30px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "17xl": "36px",
      "401xl": "420px",
      "149xl": "168px",
      "86xl": "105px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
