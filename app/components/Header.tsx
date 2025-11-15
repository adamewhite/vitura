'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import VituraLogo from './VituraLogo';

export default function Header({
  textClass = 'text-red-900',
  logoColor = '#111827',
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Close when clicking outside the panel (mobile)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const links = [
    { href: '/services', label: 'Our Services' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className='absolute inset-x-0 top-0 z-20'>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-6 py-6 ${textClass}`}
      >
        <Link
          href='/'
          aria-label='Vitura home'
          className='text-lg font-semibold tracking-tight'
        >
          <VituraLogo color={logoColor} />
        </Link>

        {/* Desktop links */}
        <ul className='hidden items-center gap-4 md:flex lg:gap-8 font-primary'>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className='hover:opacity-80 text-lg lg:text-2xl font-medium'
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2 md:hidden'
          aria-label='Open menu'
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role='dialog'
        aria-modal='true'
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <button
          type='button'
          className='absolute top-6 right-4 inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2 z-40 text-white'
          aria-label='Close menu'
          onClick={() => setOpen(false)}
        >
          <X className='h-5 w-5' />
        </button>
        <div
          id='mobile-menu'
          ref={panelRef}
          className={`absolute right-4 top-[4.5rem] w-64 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-white shadow-xl transition-all duration-300 ${
            open
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className='divide-y divide-white/10'>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className='block px-2 py-3 text-base hover:bg-white/10'
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
