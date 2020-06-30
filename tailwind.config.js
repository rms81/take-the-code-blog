module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Montserrat"],
      body: ["Merriweather"],
    },
    extend: {
      colors: {
        primary: {
          "100": "#E7F2F4",
          "200": "#C3DFE4",
          "300": "#9FCBD4",
          "400": "#58A4B3",
          "500": "#107D93",
          "600": "#0E7184",
          "700": "#0A4B58",
          "800": "#073842",
          "900": "#05262C",
        },
        secondary: {
          "100": "#FAFAFA",
          "200": "#CCCCCC",
          "300": "#B3B3B3",
          "400": "#999999",
          "500": "#808080",
          "600": "#666666",
          "700": "#4D4D4D",
          "800": "#333333",
          "900": "#1A1A1A",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
