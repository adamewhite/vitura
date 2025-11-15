'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

type Style = { textClass: string };

// Map top-level routes to styles
const ROUTE_STYLES: Record<string, Style> = {
  '/our-story': {
    textClass: 'text-story-light-color',
  },
  '/services': {
    textClass: 'text-services-light-color',
  },
  '/contact': {
    textClass: 'text-contact-light-color',
  },
  // default / fallback
  _default: {
    textClass: 'text-landing-light-color',
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
    />
  );
}
