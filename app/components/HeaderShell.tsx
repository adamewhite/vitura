'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

type Style = { textClass: string; logoColor: string };

// Map top-level routes to styles
const ROUTE_STYLES: Record<string, Style> = {
  '/our-story': {
    textClass: 'text-story-main',
    logoColor: 'var(--story-banner)',
  },
  '/services': {
    textClass: 'text-services-main',
    logoColor: 'var(--services-banner)',
  },
  '/contact': {
    textClass: 'text-contact-main',
    logoColor: 'var(--contact-banner)',
  },
  // default / fallback
  _default: {
    textClass: 'text-landing-main',
    logoColor: 'var(--landing-banner)',
  },
};

export default function HeaderShell() {
  const pathname = usePathname() || '/';

  // pick by top-level segment
  const top = '/' + pathname.split('/').filter(Boolean)[0];
  const style = ROUTE_STYLES[top] ?? ROUTE_STYLES._default;

  return (
    <Header
      // text color only; keep background transparent
      textClass={style.textClass}
      logoColor={style.logoColor}
    />
  );
}
