/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const fontSize = {
  title: '2.5rem',
};

const colors = {
  // Here you can define primary colors
  'primary-blue': '#5F46F8',
  'primary-cyan': '#00D4C8',
  'secondary-blue': '#0C77F5',
  'secondary-purple': '#6764FC',
  'secondary-cyan': '#B1E3E2',
  'light-pink': '#fac4ce',
  'dark-pink': '#F38BA0',
  'purple': '#8559aa',
  'dark-purple': '#7A14C8',
  'light-purple': '#A947F4',
  'gray': {
    100: '#f7fafc',
    900: '#1a202c',
  },
  'black-gradient': `radial-gradient(65.93% 114.17% at 52.57% 100.00%, rgba(100, 196, 235, 0.08) 0%, rgba(100, 196, 235, 0.00) 77.94%), linear-gradient(225deg, rgba(248, 198, 82, 0.10) 0%, rgba(232, 163, 222, 0.10) 48.26%, rgba(90, 191, 235, 0.10) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), rgba(255, 255, 255, 0.12)`,
  'card': '#F7F5F7',
  'subscription-lite': '#A056A215',
  'subscription-basic': '#FFB34015',
  'adamo-green': '#30DB5B',
  'primary-gray': 'var(--adamo-glass-body-light, rgba(255, 255, 255, 0.23))',
};

module.exports = {
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' },
      });
    }),
  ],
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      opacity: {
        50: '0.5',
      },
      colors,
      fontSize, // Optional (Subject to change)
      backgroundImage: {
        'primary-gradient': `linear-gradient(
            90deg,
            #ae519d 0%,
            #e54389 51.04%,
            #f4a14c 97.92%
          )`,
      },
      fontFamily: {
        sans: ['Helvetica', 'ui-sans-serif', 'system-ui'],
        serif: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
};
