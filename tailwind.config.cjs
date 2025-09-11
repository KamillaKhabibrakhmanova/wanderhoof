const typography = require('@tailwindcss/typography');

const colors = {
  sage: '#c5d3c6',
  deepgreen: '#394032',
  terracotta: '#c97d60',
  mutedpurple: '#372549',
  tealpop: '#0081a7',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
      },
      colors,
      typography: {
        DEFAULT: {
          css: {
            color: colors.deepgreen,
            h1: { color: colors.terracotta },
            h2: { color: colors.terracotta },
            a: { color: colors.tealpop },
          },
        },
      },
    },
  },
  plugins: [typography],
};