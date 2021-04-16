const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        cool: colors.coolGray,
        bluegray: colors.blueGray,
        red: colors.red,
        cyan: colors.cyan,
        blue: colors.lightBlue,
        yellow: colors.amber,
        teal: colors.teal,
        green: colors.green,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
