import type { Config } from 'tailwindcss';

const tailwindConfig = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      colors: {
        dark: '#2A2A2B',
        brunswick: '004039',
        pink: '#FB00FF',
        solo: '#303435',
        teal: '#00C7AC',
      },
      fontFamily: {
        title: "'Smooch Sans', sans-serif",
        body: "'Open Sans', sans-serif",
        mono: "'Fira Mono', monospace",
      },
    },
  },
} satisfies Config;

export default tailwindConfig;
