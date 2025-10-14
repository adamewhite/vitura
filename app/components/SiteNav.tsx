'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import VituraLogo from './VituraLogo';

export default function SiteNav() {
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
    { href: '/services', label: 'Services' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='absolute inset-x-0 top-0 z-20'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white'>
        <Link
          href='/'
          aria-label='Vitura home'
          className='text-lg font-semibold tracking-tight'
        >
          <VituraLogo color='white' />
        </Link>

        {/* Desktop links */}
        <ul className='hidden items-center gap-8 md:flex'>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className='hover:opacity-80'
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
      {open && (
        <div
          className='fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden'
          role='dialog'
          aria-modal='true'
          onClick={() => setOpen(false)}
        >
          <div
            id='mobile-menu'
            ref={panelRef}
            className='absolute right-4 top-4 w-[88%] max-w-sm rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-xl'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between'>
              <span className='text-sm font-medium'>Menu</span>
              <button
                type='button'
                className='rounded-md p-2'
                aria-label='Close menu'
                onClick={() => setOpen(false)}
              >
                <X className='h-5 w-5' />
              </button>
            </div>
            <ul className='mt-2 divide-y divide-white/10'>
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
      )}
    </nav>
  );
}
