// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='bg-paper text-navy font-primary'>
      <div className='mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 md:px-10 py-20 text-center'>
        <p className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
          404 — Not Found
        </p>
        <h1 className='mt-6 text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight'>
          We can&apos;t find <em className='text-indigo'>that page</em>.
        </h1>
        <p className='mt-8 max-w-xl text-xl italic leading-relaxed text-blue'>
          The link may be outdated, or the address has changed. The library is
          still open.
        </p>

        <div className='mt-12 flex flex-wrap items-center justify-center gap-6 font-secondary text-[11px] uppercase tracking-[0.28em]'>
          <Link
            href='/'
            className='px-8 py-4 bg-navy text-paper hover:opacity-90 transition-opacity'
          >
            Go to Home
          </Link>
          <Link
            href='/services'
            className='px-8 py-4 border border-navy text-navy hover:bg-navy hover:text-paper transition-colors'
          >
            Services
          </Link>
          <Link
            href='/our-story'
            className='px-8 py-4 border border-navy text-navy hover:bg-navy hover:text-paper transition-colors'
          >
            Our Story
          </Link>
          <Link
            href='/contact'
            className='px-8 py-4 border border-navy text-navy hover:bg-navy hover:text-paper transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
