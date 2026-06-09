// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from './styles/Reveal';
import QuoteBand from './components/QuoteBand';
import RichText from './components/RichText';
import { home } from './lib/content';

const { hero, services, process, quote, contact } = home;

export default function Home() {
  return (
    <main className='bg-paper text-navy font-primary'>
      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-32'>
          <Reveal
            variant='up'
            duration={0.7}
          >
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              {hero.eyebrow}
            </div>
          </Reveal>
          <Reveal
            variant='up'
            delay={0.1}
          >
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              <RichText text={hero.headline} />
            </h1>
          </Reveal>
          <Reveal
            variant='up'
            delay={0.25}
          >
            <p className='mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed text-blue'>
              {hero.intro}
            </p>
          </Reveal>

          <div className='mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end'>
            <Reveal
              variant='up'
              delay={0.1}
              className='lg:col-span-8'
            >
              <div className='relative aspect-[3/2] border border-rule overflow-hidden'>
                <Image
                  src='/ed-clark-hauser.jpg'
                  alt='Editorial hero composition'
                  fill
                  priority
                  sizes='(min-width: 1024px) 66vw, 100vw'
                  className='object-cover'
                />
              </div>
            </Reveal>

            <RevealGroup
              stagger={0.12}
              delay={0.2}
              className='lg:col-span-4 space-y-8 font-secondary'
            >
              {hero.stats.map(({ label, value }) => (
                <RevealItem key={label}>
                  <div className='border-t border-rule pt-4'>
                    <div className='text-[11px] uppercase tracking-[0.22em] text-blue'>
                      {label}
                    </div>
                    <div className='mt-2 text-lg font-primary text-navy'>
                      {value}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id='services'
        className='border-b border-rule'
      >
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                {services.sectionLabel}
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                {services.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal
            variant='up'
            delay={0.15}
          >
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              {services.intro}
            </p>
          </Reveal>

          <Reveal
            variant='up'
            delay={0.1}
            className='mb-20'
          >
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-end'>
              <div className='md:col-span-5'>
                <div className='relative aspect-[4/5] border border-rule overflow-hidden'>
                  <Image
                    src='/ed-clark-phillips.jpg'
                    alt='Color field study'
                    fill
                    sizes='(min-width: 768px) 40vw, 100vw'
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='md:col-span-6 md:col-start-7'>
                <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-4'>
                  {services.craftLabel}
                </div>
                <p className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                  <RichText text={services.craftStatement} />
                </p>
              </div>
            </div>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'
          >
            {services.items.map((s) => (
              <RevealItem key={s.title}>
                <article className='border-t border-rule pt-8 pb-12 h-full'>
                  <h3 className='text-2xl md:text-3xl font-normal leading-snug'>
                    {s.title}
                  </h3>
                  <p className='mt-5 text-base leading-[1.7] text-navy'>
                    {s.desc}
                  </p>
                  <Link
                    href='/services'
                    className='mt-6 inline-block text-base border-b border-navy pb-1 transition-opacity hover:opacity-70 font-primary text-navy'
                  >
                    Learn more →
                  </Link>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id='process'
        className='border-b border-rule'
      >
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                {process.sectionLabel}
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                {process.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal
            variant='up'
            delay={0.15}
          >
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              {process.intro}
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.12}
            className='grid grid-cols-1 md:grid-cols-4 md:gap-x-8'
          >
            {process.steps.map(({ title, desc }, i) => (
              <RevealItem key={title}>
                <div className='border-t border-rule pt-8 pb-2 h-full'>
                  <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                    Step {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className='text-3xl font-normal mb-4 text-indigo'>
                    {title}
                  </h3>
                  <p className='text-base leading-[1.7] text-navy'>{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <QuoteBand
        image='/ed-clark-sotheby-1.jpeg'
        quote={quote.text}
      />

      {/* CONTACT PREVIEW */}
      <section id='contact'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <Reveal
              variant='left'
              className='lg:col-span-5'
            >
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                {contact.sectionLabel}
              </div>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                {contact.heading}
              </h2>
              <p className='mt-8 max-w-md text-xl italic leading-relaxed text-blue'>
                {contact.intro}
              </p>

              <div className='mt-12 relative aspect-square border border-rule overflow-hidden max-w-sm'>
                <Image
                  src='/robertmotherwellorange.jpg'
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 30vw, 80vw'
                  className='object-cover'
                />
              </div>

              <div className='mt-12 text-base font-secondary'>
                <div className='text-[11px] uppercase tracking-[0.22em] text-blue'>
                  {contact.inquiriesLabel}
                </div>
                <div className='mt-2 font-primary'>{contact.email}</div>
              </div>
            </Reveal>

            <Reveal
              variant='right'
              delay={0.15}
              className='lg:col-span-7 lg:col-start-7'
            >
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                {contact.sendLabel}
              </div>
              <p className='text-2xl md:text-3xl font-normal leading-snug text-navy mb-10'>
                <RichText text={contact.sendStatement} />
              </p>

              <Link
                href='/contact'
                className='inline-block font-secondary text-[11px] uppercase tracking-[0.28em] px-8 py-4 bg-navy text-paper hover:opacity-90 transition-opacity'
              >
                {contact.ctaLabel}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
