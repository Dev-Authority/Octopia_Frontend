const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '924px',
      // => @media (min-width: 924px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1640px',
      // => @media (min-width: 1640px) { ... }
    },
    extend: {
      colors: {
        'primaryDark': 'rgb(2,41,64)',
        'primaryLight': 'rgb(28,120,182)',
        'Octopia_Blue':'#001944',
        'Octopia_Button': '#0041ff',
        'Octopia_Link': '#0037de',
        'Octopia_Grey': '#5f6d84',
        'Octopia_Border': '#eaedf6',
        'slate': {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'background': '#f1f5f9',
      },
    },
  },
  plugins: [],
})