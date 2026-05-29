import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-rule bg-paper text-navy'>
      <div className='mx-auto max-w-6xl px-6 md:px-10 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12'>
          {/* Wordmark + tagline */}
          <div className='md:col-span-5'>
            <div
              role='img'
              aria-label='Vitura'
              className='h-10 md:h-12 w-[154px] md:w-[185px] bg-teal'
              style={{
                WebkitMask: 'url(/vitura.svg) center / contain no-repeat',
                mask: 'url(/vitura.svg) center / contain no-repeat',
              }}
            />
            <p className='mt-6 max-w-sm text-base font-primary leading-[1.7] text-navy/90'>
              A studio for digital transformation, data strategy, and
              human-centered design.
            </p>
            <div className='mt-6 flex items-center gap-3'>
              <a
                href='mailto:hello@vitura.studio'
                aria-label='Email'
                className='border border-rule p-2 hover:border-navy transition-colors'
              >
                <Mail className='h-4 w-4' aria-hidden='true' />
              </a>
              <a
                href='tel:+13476888230'
                aria-label='Phone'
                className='border border-rule p-2 hover:border-navy transition-colors'
              >
                <Phone className='h-4 w-4' aria-hidden='true' />
              </a>
              <a
                href='https://www.linkedin.com'
                aria-label='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-rule p-2 hover:border-navy transition-colors'
              >
                <Linkedin className='h-4 w-4' aria-hidden='true' />
              </a>
              <a
                href='https://www.instagram.com'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-rule p-2 hover:border-navy transition-colors'
              >
                <Instagram className='h-4 w-4' aria-hidden='true' />
              </a>
            </div>
          </div>

          <div className='md:col-span-3 md:col-start-7'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
              Company
            </div>
            <ul className='mt-4 space-y-3 text-base font-primary'>
              <li>
                <Link href='/our-story' className='hover:text-teal transition-colors'>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-teal transition-colors'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-teal transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:col-span-3'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
              Services
            </div>
            <ul className='mt-4 space-y-3 text-base font-primary'>
              <li>
                <Link href='/services#strategy' className='hover:text-teal transition-colors'>
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href='/services#design' className='hover:text-teal transition-colors'>
                  Experience Design
                </Link>
              </li>
              <li>
                <Link href='/services#data' className='hover:text-teal transition-colors'>
                  Data Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-16 pt-6 border-t border-rule flex flex-wrap items-baseline justify-between gap-4 font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
          <div>© {new Date().getFullYear()} Vitura Studio</div>
        </div>
      </div>
    </footer>
  );
}
