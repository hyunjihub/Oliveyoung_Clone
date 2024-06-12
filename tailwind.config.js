/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['NotoSansKR', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(19, 21, 24, 0) 0%, rgba(19, 21, 24, .4) 100%)',
      },
    },
  },
  plugins: [],
};
