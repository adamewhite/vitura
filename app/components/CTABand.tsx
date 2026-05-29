// app/components/CTABand.tsx
// Navy-on-paper editorial band sized for calls to action.
// Sibling to QuoteBand — same palette and gradient treatment, different rhythm:
// no quote mark, larger title, lede, and a primary button.
import Link from 'next/link';
import { Reveal } from '../styles/Reveal';

export default function CTABand({
  title,
  body,
  cta,
  href,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <section className='relative border-b border-navy overflow-hidden bg-navy'>
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to bottom, rgba(18,19,88,1), rgba(35,47,114,0.95) 50%, rgba(18,19,88,1))',
        }}
      />
      <div className='relative mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center'>
        <Reveal variant='up' duration={0.9} amount={0.3}>
          <h3 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight text-paper'>
            {title}
          </h3>
          <p className='mx-auto mt-8 max-w-2xl text-xl italic leading-relaxed text-paper/80'>
            {body}
          </p>
          <div className='mt-12'>
            <Link
              href={href}
              className='inline-block font-secondary text-[11px] uppercase tracking-[0.28em] px-8 py-4 bg-vitura-red text-paper hover:bg-vitura-red-hover transition-colors'
            >
              {cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
