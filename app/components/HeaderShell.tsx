'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

type Style = { textClass: string; logoColor: string };

// Map top-level routes to styles
const ROUTE_STYLES: Record<string, Style> = {
  '/our-story': {
    textClass: 'text-[#e0ff16]',
    logoColor: '#e0ff16',
  },
  '/services': { textClass: 'text-[#d81d1d]', logoColor: '#d81d1d' },
  '/contact': { textClass: 'text-[#2f46f5]', logoColor: '#2f46f5' },
  // default / fallback
  _default: { textClass: 'white', logoColor: 'white' },
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
