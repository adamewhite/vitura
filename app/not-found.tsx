// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center'>
      <p className='text-sm uppercase tracking-widest text-neutral-500'>404</p>
      <h1 className='mt-2 text-3xl font-semibold sm:text-4xl'>
        We can{"'"}t find that page.
      </h1>
      <p className='mt-3 text-neutral-600'>
        The link may be outdated or the address has changed.
      </p>

      <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
        <Link
          href='/'
          className='rounded-xl bg-black px-4 py-2 text-white transition hover:opacity-90'
        >
          Go to Home
        </Link>
        <Link
          href='/services'
          className='rounded-xl border px-4 py-2 text-black transition hover:bg-neutral-50'
        >
          Services
        </Link>
        {/* <Link
          href='/work'
          className='rounded-xl border px-4 py-2 text-black transition hover:bg-neutral-50'
        >
          Work
        </Link> */}
        <Link
          href='/about'
          className='rounded-xl border px-4 py-2 text-black transition hover:bg-neutral-50'
        >
          About
        </Link>
        <Link
          href='/contact'
          className='rounded-xl border px-4 py-2 text-black transition hover:bg-neutral-50'
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
