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
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Remember what was focused so we can restore it on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;

    function focusable() {
      return Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
    }

    // Move focus into the panel.
    focusable()[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      // Trap focus within the panel.
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      // Restore focus to the trigger when the menu closes.
      (previouslyFocused ?? trigger)?.focus();
    };
  }, [open]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    // Read the settled scroll position. Reading synchronously on mount can
    // catch a transient value while the page loader is still laying out the
    // document; a scroll event with a stale offset can flip `scrolled` true
    // and then never fire again once the page settles back to the top, leaving
    // the logo stuck as the "V". Re-check on the next frames and on resize so
    // state always reflects the real position.
    onScroll();
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(onScroll);
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
          className={`group relative flex items-center justify-center transition-[height,width] duration-300 ease-out ${
            scrolled
              ? 'h-10 w-10 md:h-12 md:w-12'
              : 'h-10 md:h-12 w-[154px] md:w-[185px]'
          }`}
        >
          {scrolled ? (
            // Scrolled: reproduce the favicon — a cream serif "V" on a red disc,
            // with the V's top serifs overhanging the circle's edge. The disc and
            // the glyph are siblings (not nested), and the glyph is scaled past
            // 100% with overflow visible so the serifs can poke beyond the circle.
            <span
              aria-hidden='true'
              className='relative block h-full w-full'
            >
              {/* Red circle — same red as the wordmark (--vitura-red). */}
              <span className='absolute inset-0 rounded-full bg-vitura-red group-hover:bg-vitura-red-hover transition-colors duration-300 ease-out' />
              {/* Cream "V" masked from the favicon's V geometry. Sized so the
                  top serifs reach just to the circle's edge (matching the
                  favicon), centered within the disc. */}
              <span
                className='absolute inset-0 scale-[0.82] bg-[#FFF7E8]'
                style={{
                  WebkitMask:
                    'url(/bimi/vitura-circle-v.svg) center / contain no-repeat',
                  mask: 'url(/bimi/vitura-circle-v.svg) center / contain no-repeat',
                }}
              />
            </span>
          ) : (
            // Unscrolled: full wordmark, anchored left and sized by height.
            <span
              aria-hidden='true'
              className='block h-full w-full bg-vitura-red group-hover:bg-vitura-red-hover transition-colors duration-300 ease-out'
              style={{
                WebkitMask: 'url(/vitura.svg) left center / auto 100% no-repeat',
                mask: 'url(/vitura.svg) left center / auto 100% no-repeat',
              }}
            />
          )}
        </Link>

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
          ref={triggerRef}
          type='button'
          className='inline-flex items-center justify-center border border-rule px-3 py-2 md:hidden text-navy'
          aria-label={open ? 'Close menu' : 'Open menu'}
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
        onClick={() => setOpen(false)}
      >
        <div
          id='mobile-menu'
          ref={panelRef}
          role='dialog'
          aria-modal='true'
          aria-label='Menu'
          aria-hidden={!open}
          inert={!open}
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
