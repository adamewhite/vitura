// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Optional subtle tweaks if you want exact hues available as classes
        page: 'var(--page)',
        card: 'var(--card)',
      },
      borderRadius: {
        xl: '0.85rem',
      },
      fontSize: {
        '7xl': '4.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
