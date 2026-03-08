/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      rotate: {
        '15': '15deg',
        '75': '75deg',
      },
      transform: {
        'rotateX-15': 'rotateX(15deg)',
        'rotateX-75': 'rotateX(75deg)',
      }
    },
  },
  plugins: [],
};
