module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#e60023',
        'dark' : '#111111',
        'light': '#efefef',
        'lightHover': '#d7d7d7',
        'muted': '#717171'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
