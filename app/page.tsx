// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from './styles/Reveal';

const services = [
  {
    title: 'Digital Strategy',
    desc: 'Roadmaps, KPIs, analytics, and experimentation frameworks that align teams and de-risk delivery.',
  },
  {
    title: 'Experience Design',
    desc: 'Human-centered UX/UI, content architecture, and accessibility for web and apps.',
  },
  {
    title: 'Data Products',
    desc: 'Dashboards, pipelines, and data models that turn messy inputs into clear decisions.',
  },
  {
    title: 'Web Engineering',
    desc: 'Next.js, React, Tailwind, and modern stacks — fast, maintainable, and SEO-ready.',
  },
  {
    title: 'Content Systems',
    desc: 'Design systems, CMS builds, and component libraries for scalable storytelling.',
  },
  {
    title: 'Research & Audits',
    desc: 'User research, heuristics, and technical audits to find leverage before you ship.',
  },
];

const process: Array<[string, string]> = [
  ['Discover', 'Align on goals, audiences, and constraints with lightweight research.'],
  ['Define', 'Plan the smallest valuable release and the metrics that prove it.'],
  ['Design', 'Prototype flows, content, and UI; test quickly and iterate.'],
  ['Deliver', 'Ship production-ready code and handoff docs your team can own.'],
];

export default function Home() {
  return (
    <main className='bg-paper text-navy font-primary'>
      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-32'>
          <Reveal variant='up' duration={0.7}>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              Vol. I — A studio based in New York
            </div>
          </Reveal>
          <Reveal variant='up' delay={0.1}>
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              We are a studio for{' '}
              <em className='text-indigo'>digital transformation</em>,{' '}
              <em className='text-indigo'>data strategy</em>, and{' '}
              <em className='text-indigo'>human-centered design</em>.
            </h1>
          </Reveal>
          <Reveal variant='up' delay={0.25}>
            <p className='mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed text-blue'>
              Clean pipelines, clear decisions, and human-centered products for
              teams that take their craft seriously.
            </p>
          </Reveal>

          <div className='mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end'>
            <Reveal variant='up' delay={0.1} className='lg:col-span-8'>
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
              {[
                ['Established', '2018, New York'],
                ['Practice', 'Strategy · Design · Data · Engineering'],
                ['Clients', 'Media, finance, civic, education'],
              ].map(([k, v]) => (
                <RevealItem key={k}>
                  <div className='border-t border-rule pt-4'>
                    <div className='text-[11px] uppercase tracking-[0.22em] text-blue'>
                      {k}
                    </div>
                    <div className='mt-2 text-lg font-primary text-navy'>
                      {v}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id='services' className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                I.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                What we do
              </h2>
            </div>
          </Reveal>

          <Reveal variant='up' delay={0.15}>
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              Strategy, design, and engineering for data-rich products and
              content experiences.
            </p>
          </Reveal>

          <Reveal variant='up' delay={0.1} className='mb-20'>
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
                  On craft
                </div>
                <p className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                  Each engagement begins with the same questions a curator
                  asks:{' '}
                  <em className='text-indigo'>
                    What is here? What is missing? What should remain?
                  </em>
                </p>
              </div>
            </div>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'
          >
            {services.map((s) => (
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

      {/* ORNAMENT */}
      <div className='mx-auto max-w-6xl px-6 md:px-10 py-16'>
        <div className='flex items-center gap-6 text-blue'>
          <span className='h-px flex-1 bg-rule' />
          <span className='text-2xl'>§</span>
          <span className='h-px flex-1 bg-rule' />
        </div>
      </div>

      {/* PROCESS */}
      <section id='process' className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                II.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                How we work
              </h2>
            </div>
          </Reveal>

          <Reveal variant='up' delay={0.15}>
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              A process designed to move fast, reduce risk, and deliver
              measurable impact.
            </p>
          </Reveal>

          <RevealGroup stagger={0.12} className='grid grid-cols-1 md:grid-cols-4 md:gap-x-8'>
            {process.map(([title, desc], i) => (
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

      {/* PULL QUOTE */}
      <section className='relative border-b border-navy overflow-hidden bg-navy'>
        <Image
          src='/ed-clark-sotheby-1.jpeg'
          alt=''
          fill
          sizes='100vw'
          aria-hidden='true'
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
              They treated our data product like an editorial object — with
              intention, restraint, and craft.
            </blockquote>
            <div className='mt-10 font-secondary text-[11px] uppercase tracking-[0.28em] text-teal'>
              — Director of Product, Financial Services
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section id='contact'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <Reveal variant='left' className='lg:col-span-5'>
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                III. Correspondence
              </div>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Let&apos;s talk.
              </h2>
              <p className='mt-8 max-w-md text-xl italic leading-relaxed text-blue'>
                Tell us about your team, timelines, and what success looks like.
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
                  Inquiries
                </div>
                <div className='mt-2 font-primary'>hello@vitura.studio</div>
              </div>
            </Reveal>

            <Reveal variant='right' delay={0.15} className='lg:col-span-7 lg:col-start-7'>
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                Send a note
              </div>
              <p className='text-2xl md:text-3xl font-normal leading-snug text-navy mb-10'>
                The fastest way to start a conversation is to{' '}
                <Link
                  href='/contact'
                  className='border-b border-navy hover:text-teal hover:border-teal transition-colors'
                >
                  open the contact form
                </Link>
                . Tell us about your team, timelines, and what success looks
                like.
              </p>

              <Link
                href='/contact'
                className='inline-block font-secondary text-[11px] uppercase tracking-[0.28em] px-8 py-4 bg-navy text-paper hover:opacity-90 transition-opacity'
              >
                Get in touch
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
