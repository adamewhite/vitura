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
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'heading-base': 'var(--heading-color-base)',
        'heading-alt': 'var(--heading-color-alt)',
        button: {
          'dark-bg': 'var(--button-dark-bg)',
          'dark-text': 'var(--button-dark-text)',
          'light-bg': 'var(--button-light-bg)',
          'light-text': 'var(--button-light-text)',
        },
        landing: {
          base: 'var(--landing-base)',
          alternative: 'var(--landing-alternative)',
          'light-color': 'var(--landing-light-color)',
          'dark-color': 'var(--landing-dark-color)',
        },
        services: {
          base: 'var(--services-base)',
          alternative: 'var(--services-alternative)',
          'light-color': 'var(--services-light-color)',
          'dark-color': 'var(--services-dark-color)',
        },
        story: {
          base: 'var(--story-base)',
          alternative: 'var(--story-alternative)',
          'light-color': 'var(--story-light-color)',
          'dark-color': 'var(--story-dark-color)',
        },
        contact: {
          base: 'var(--contact-base)',
          alternative: 'var(--contact-alternative)',
          'light-color': 'var(--contact-light-color)',
          'dark-color': 'var(--contact-dark-color)',
        },

        footer: {
          banner: 'var(--footer-banner)',
          main: 'var(--footer-main)',
          base: 'var(--footer-base)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
