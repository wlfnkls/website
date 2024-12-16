module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3f3d56',
        secondary: '#f50057',
      },
    },
    fontFamily: {
      lato: ['Lato', 'serif'],
    },
  },
  variants: {
    extend: {
      transform: ['active', 'group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
