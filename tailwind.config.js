module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#363740',
      },
      spacing: {
        '240px': '240px',
      },
      width: {
        '450px': '450px',
      },
    },
  },
  plugins: [],
};
