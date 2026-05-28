// app/styles/tokens.ts
// Single source of truth for the editorial style system.
// Both /styles (the guide) and /styles/sample (the landing mockup) read from here.
// Edit values here to update both pages simultaneously.

import { Zilla_Slab, Inter } from 'next/font/google';

export const serif = Zilla_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--styles-serif',
});

export const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--styles-sans',
});

export const colors = {
  paper: '#f1f1f5',
  mist: '#f5fafc',
  navy: '#121358',
  indigo: '#232F72',
  blue: '#2F578A',
  teal: '#36ADA3',
  rule: '#D3D9DE',
} as const;

export const palette = [
  {
    name: 'Paper',
    hex: colors.paper,
    note: 'Primary background — cool off-white',
  },
  { name: 'Mist', hex: colors.mist, note: 'Secondary surface — cool neutral' },
  { name: 'Navy', hex: colors.navy, note: 'Primary text, ink' },
  { name: 'Indigo', hex: colors.indigo, note: 'Headlines, deep accent' },
  { name: 'Blue', hex: colors.blue, note: 'Muted text, captions' },
  { name: 'Teal', hex: colors.teal, note: 'Editorial accent' },
] as const;

// CSS font-family strings — apply to elements via inline style.
export const fontStacks = {
  serif: 'var(--styles-serif), Georgia, serif',
  sans: 'var(--styles-sans), system-ui, sans-serif',
} as const;

// Reusable className recipes — Tailwind utility strings, no JSX.
export const recipes = {
  // Eyebrow / small caps label (uppercase, wide-tracked Inter)
  eyebrow: 'text-[11px] uppercase tracking-[0.28em]',
  eyebrowSm: 'text-[11px] uppercase tracking-[0.22em]',

  // Body copy
  body: 'text-base md:text-lg leading-[1.7]',
  caption: 'text-sm italic leading-relaxed',
  lede: 'text-xl md:text-2xl italic font-normal leading-relaxed',

  // Headings
  display: 'text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight',
  h1: 'text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight',
  h2: 'text-3xl md:text-5xl font-normal leading-[1.15]',
  h3: 'text-2xl md:text-3xl font-normal leading-snug',

  // Buttons (apply font stack inline)
  btnText: 'text-base border-b pb-1 transition-colors',
  btnGhost:
    'text-[11px] uppercase tracking-[0.28em] border px-6 py-3 transition-colors',
  btnSolid:
    'text-[11px] uppercase tracking-[0.28em] px-6 py-3 transition-colors',

  // Forms
  inputUnderline: 'w-full bg-transparent border-b py-2 outline-none text-base',

  // Page chrome
  container: 'mx-auto max-w-6xl px-6 md:px-10',
} as const;

export const typeScale = [
  {
    label: 'Display',
    sample: 'Conservation of textiles, technique, and memory.',
    cls: 'text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight',
  },
  {
    label: 'H1',
    sample: 'Each season is a personal story.',
    cls: 'text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight',
  },
  {
    label: 'H2',
    sample: 'Men’s New Arrivals',
    cls: 'text-3xl md:text-5xl font-normal leading-[1.15]',
  },
  {
    label: 'H3',
    sample: 'Embroidered Workshirt, Indigo',
    cls: 'text-2xl md:text-3xl font-normal leading-snug',
  },
  {
    label: 'Lede',
    sample:
      'A New York label grounded in American culture and identity, devoted to the conservation of textiles, technique, and memory.',
    cls: 'text-xl md:text-2xl italic font-normal leading-relaxed',
  },
  {
    label: 'Body',
    sample:
      'Bode (pronounced “boh-dee”) is a New York based menswear and womenswear label, established in 2016. Each season is grounded in a specific, personal story.',
    cls: 'text-base md:text-lg font-normal leading-[1.7]',
  },
] as const;
