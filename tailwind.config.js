module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Now you can use the class `prose` to apply typography
    require('daisyui'),
  ],
  daisyui: {
    themes: ['winter'],
  },
};
