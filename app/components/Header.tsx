'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className='sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur-sm'>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 md:px-10 transition-[padding] duration-300 ease-out ${
          scrolled ? 'py-2 md:py-3' : 'py-5'
        }`}
      >
        <Link
          href='/'
          aria-label='Vitura — home'
          className={`block bg-vitura-red hover:bg-vitura-red-hover transition-[height,width,background-color] duration-300 ease-out ${
            scrolled
              ? 'h-7 md:h-8 w-[108px] md:w-[124px]'
              : 'h-10 md:h-12 w-[154px] md:w-[185px]'
          }`}
          style={{
            WebkitMask: 'url(/vitura.svg) center / contain no-repeat',
            mask: 'url(/vitura.svg) center / contain no-repeat',
          }}
        />

        {/* Desktop nav */}
        <ul className='hidden md:flex gap-8 font-secondary text-[11px] uppercase tracking-[0.28em] text-navy'>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className='hover:text-teal transition-colors'>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          type='button'
          className='inline-flex items-center justify-center border border-rule px-3 py-2 md:hidden text-navy'
          aria-label='Open menu'
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-navy/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role='dialog'
        aria-modal='true'
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div
          id='mobile-menu'
          ref={panelRef}
          className={`absolute right-4 top-[5rem] w-64 border border-rule bg-paper px-2 py-2 text-navy shadow-lg transition-all duration-300 ${
            open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className='font-secondary text-[11px] uppercase tracking-[0.28em] divide-y divide-rule'>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className='block px-3 py-4 hover:text-teal transition-colors'
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
