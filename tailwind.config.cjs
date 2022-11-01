/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-500": "#50C1C7",
        "primary-700": "#0F8E94",
        "secondary-500": "#4ACEBF",
        "secondary-400": "#4ACEBF80",

        "danger-500": "#F25169",
        "danger-400": "#F2516966",
      },
    },
  },
  variants: {
    extend: {},
  },
}
