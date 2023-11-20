/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      "h1" : ["2.08rem", {
        fontWeight: "600",
      }],
      "h2" : ["1.84rem", {
        fontWeight: "600",
      }],
      "h3" : ["1.63rem", {
        fontWeight: "600",
      }],
      "h4" : ["1.44rem", {
        fontWeight: "600",
      }],
      "h5" : ["1.27rem", {
        fontWeight: "600",
      }],
      "h6" : ["1.13rem", {
        fontWeight: "600",
      }],
      "label" : [".88rem", {
        fontWeight: "400",
      }],
    },
  },
  plugins: [],
}

