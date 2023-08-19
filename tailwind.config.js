/** @type {import('tailwindcss').Config} */
const { env } = require('./config/env');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  theme: {
    extend: {
      spacing: {
        header: '69px',
        ch: 'calc(100vh - 69px)',
        space: '2rem',
      },
      boxShadow: {
        frame: '1px 1px 8px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: env.app.PRIMARY_COLOR,
        dark: '#272E38',
        secondary: '#f7b21b',
        delete: '#ff5555',
        pencel: '#333333',
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '991px' },
        lg: { min: '1080px' },
      },
    },
  },
  plugins: [],
};
