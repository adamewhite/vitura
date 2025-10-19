// tailwind.config.ts
import { b, body } from 'framer-motion/client';
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
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        landing: {
          banner: 'var(--landing-banner)',
          main: 'var(--landing-main)',
          base: 'var(--landing-base)',
        },
        services: {
          banner: 'var(--services-banner)',
          main: 'var(--services-main)',
          base: 'var(--services-base)',
        },
        story: {
          banner: 'var(--story-banner)',
          main: 'var(--story-main)',
          base: 'var(--story-base)',
        },
        contact: {
          banner: 'var(--contact-banner)',
          main: 'var(--contact-main)',
          base: 'var(--contact-base)',
        },
        footer: {
          banner: 'var(--footer-banner)',
          main: 'var(--footer-main)',
          base: 'var(--footer-base)',
        },
        card: {
          base: 'var(--card-base)',
          main: 'var(--card-main)',
          body: 'var(--card-body)',
          neutral: 'var(--card-neutral)',
          black: 'var(--card-black)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
