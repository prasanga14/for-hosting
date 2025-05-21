/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#010851',
        gunmetal: '#1c1b27',
        roomBG: '#1b1e29',
        editorbg: '#282a36',
        green: '#4aed88',
      },
    },
  },
  plugins: [],
};
