import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import VituraLogo from './VituraLogo';

export default function Footer() {
  return (
    <footer className='border-t bg-neutral-50'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-4'>
          <div>
            <VituraLogo color='black' />
            <p className='mt-3 max-w-xs text-sm text-neutral-600'>
              A studio for digital transformation, data strategy, and
              human-centered design.
            </p>
            <div className='mt-4 flex items-center gap-3'>
              <Link
                href='mailto:hello@vitura.studio'
                aria-label='Email'
                className='rounded-full border p-2 hover:bg-white'
              >
                <Mail className='h-4 w-4' />
              </Link>
              <Link
                href='tel:+12125550123'
                aria-label='Phone'
                className='rounded-full border p-2 hover:bg-white'
              >
                <Phone className='h-4 w-4' />
              </Link>
              <Link
                href='https://twitter.com'
                aria-label='Twitter/X'
                className='rounded-full border p-2 hover:bg-white'
              >
                <Twitter className='h-4 w-4' />
              </Link>
              <Link
                href='https://www.linkedin.com'
                aria-label='LinkedIn'
                className='rounded-full border p-2 hover:bg-white'
              >
                <Linkedin className='h-4 w-4' />
              </Link>
              <Link
                href='https://www.instagram.com'
                aria-label='Instagram'
                className='rounded-full border p-2 hover:bg-white'
              >
                <Instagram className='h-4 w-4' />
              </Link>
            </div>
          </div>

          <div>
            <div className='text-sm font-semibold'>Company</div>
            <ul className='mt-3 space-y-2 text-sm'>
              <li>
                <Link
                  href='/our-story'
                  className='hover:underline'
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href='/work'
                  className='hover:underline'
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:underline'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className='text-sm font-semibold'>Services</div>
            <ul className='mt-3 space-y-2 text-sm'>
              <li>
                <Link
                  href='/services#strategy'
                  className='hover:underline'
                >
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link
                  href='/services#design'
                  className='hover:underline'
                >
                  Experience Design
                </Link>
              </li>
              <li>
                <Link
                  href='/services#data'
                  className='hover:underline'
                >
                  Data Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className='text-sm font-semibold'>NYC</div>
            <address className='mt-3 not-italic text-sm text-neutral-600'>
              123 West Broadway
              <br />
              New York, NY 10013
              <br />
              United States
            </address>
          </div>
        </div>

        <div className='mt-10 border-t pt-6 text-xs text-neutral-500'>
          © {new Date().getFullYear()} Vitura Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
