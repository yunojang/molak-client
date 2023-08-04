/** @type {import('tailwindcss').Config} */
const { env } = require('./config/env');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  theme: {
    extend: {
      spacing: {
        header: '68px',
        ch: 'calc(100vh - 68px)',
        space: '2rem',
      },
      boxShadow: {
        frame: '1px 1px 8px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: env.app.PRIMARY_COLOR,
        secondary: '#f7b21b',
        delete: '#ff5555',
        smooth: '#6b7c99',
        middle: '#e3e9f3',
        opacity: '#dae2e6',
        warning: '#dde9f0',
        highlight: '#007dfe',
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
