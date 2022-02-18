module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#EBECF0',
          300: '#B1B3BA',
          400: '#909090',
          800: '#181817',
        },
        green: {
          400: '#8DD715',
          500: '#70AB10',
        },
        blue: {
          300: '#9CD5FF',
          400: '#88C5F1',
        },
        red: {
          300: '#EB9B8F',
        },
      },
      borderRadius: {
        large: '20px',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    }
  },
  plugins: [],
}
