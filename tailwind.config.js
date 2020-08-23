module.exports = {
  purge: [],
  theme: {
    extend: {
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      colors: {
        pink: {
          100: "#fbd2e0",
          200: "#f6a5c1",
          300: "#f278a1",
          400: "#ed4b82",
          500: "#e91e63",
          600: "#ba184f",
          700: "#8c123b",
          800: "#5d0c28",
          900: "#2f0614"
        }
      },
      // prettier-ignore
      boxShadow: {
        "top-xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "top-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "top": "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)",
        "top-md": "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        "top-lg": "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        "top-xl": "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
        "top-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  variants: {},
  plugins: []
};
