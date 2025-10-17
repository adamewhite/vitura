// app/components/PageWithHero.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWithHeroProps {
  heroImage: StaticImageData;
  heroAlt: string;
  heroTitle: string;
  heroDescription: string;
  children: ReactNode;
  pageKey: string; // Use pathname as key
}

export default function PageWithHero({
  heroImage,
  heroAlt,
  heroTitle,
  heroDescription,
  children,
  pageKey,
}: PageWithHeroProps) {
  return (
    <main className='bg-transparent text-neutral-900'>
      {/* Hero - stays mounted, doesn't animate */}
      <section className='relative h-[100svh]'>
        <Image
          src={heroImage}
          alt={heroAlt}
          placeholder='blur'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.15)_30%,rgba(0,0,0,0.2))]' />
        <div className='pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24' />

        {/* Animate only the text content */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative z-10 flex h-full items-center'
          >
            <div className='mx-auto max-w-5xl px-6 text-center text-white'>
              <h1 className='mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-[500] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]'>
                {heroTitle}
              </h1>
              <p className='mx-auto mt-6 max-w-3xl text-base sm:text-lg text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]'>
                {heroDescription}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Page content - also animate separately */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={pageKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
