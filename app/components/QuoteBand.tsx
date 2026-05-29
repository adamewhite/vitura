// app/components/QuoteBand.tsx
// Navy-on-paper editorial band with a faded image bleed behind it.
// Used between sections to break up the page rhythm.
import Image from 'next/image';
import { Reveal } from '../styles/Reveal';

export default function QuoteBand({
  quote,
  attribution,
  image,
  imageAlt = '',
}: {
  quote: string;
  attribution?: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className='relative border-b border-navy overflow-hidden bg-navy'>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes='100vw'
        aria-hidden={imageAlt === '' || undefined}
        className='object-cover opacity-25'
      />
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to bottom, rgba(18,19,88,0.85), rgba(18,19,88,0.7) 50%, rgba(18,19,88,0.85))',
        }}
      />
      <div className='relative mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center'>
        <Reveal variant='fade' duration={1.2} amount={0.4}>
          <span className='text-2xl text-teal font-primary'>❝</span>
          <blockquote className='mt-6 text-3xl md:text-5xl font-normal leading-[1.15] tracking-tight italic text-paper'>
            {quote}
          </blockquote>
          {attribution && (
            <div className='mt-10 font-secondary text-[11px] uppercase tracking-[0.28em] text-teal'>
              {attribution}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
