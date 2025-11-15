// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import purples from '../public/purples.jpg';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* ==== HERO (full viewport) ==== */}
      <section className='relative h-screen bg-landing-base'>
        {/* BG image */}
        <Image
          src={purples}
          alt='Vitura background'
          fill
          priority
          sizes='100vw'
          className='object-cover transition-opacity duration-500'
        />
        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.5))]' />

        {/* HERO COPY */}
        <div className='relative z-10 h-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6'>
            <div className='mx-auto max-w-5xl text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-landing-light-color tracking-[.001em] [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%),_0_0_40px_rgb(0_0_0_/_80%),_0_0_80px_rgb(0_0_0_/_60%)] text-balance font-secondary'>
                We are a studio for digital transformation, data strategy, and
                human-centered design based in New York.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ==== SERVICES ==== */}
      <section className='py-20 bg-landing-alternative text-landing-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight font-primary'>
              What we do
            </h2>
            <p className='mt-4 font-secondary'>
              Strategy, design, and engineering for data-rich products and
              content experiences.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {[
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
                desc: 'Next.js, React, Tailwind, and modern stacks—fast, maintainable, and SEO-ready.',
              },
              {
                title: 'Content Systems',
                desc: 'Design systems, CMS builds, and component libraries for scalable storytelling.',
              },
              {
                title: 'Research & Audits',
                desc: 'User research, heuristics, and technical audits to find leverage before you ship.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className='rounded-md border border-landing-light-color/10 bg-white text-landing-dark-color p-6 shadow-sm'
              >
                <h3 className='text-lg font-semibold font-primary'>
                  {card.title}
                </h3>
                <p className='mt-2 text-sm opacity-80 font-secondary'>
                  {card.desc}
                </p>
                <Link
                  href='/services'
                  className='mt-4 inline-block text-sm font-medium underline underline-offset-4 font-secondary hover:opacity-80'
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== PROCESS / APPROACH ==== */}
      <section className='py-20 bg-landing-base text-landing-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight font-primary'>
            How we work
          </h2>
          <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-4'>
            {[
              [
                'Discover',
                'Align on goals, audiences, and constraints with lightweight research.',
              ],
              [
                'Define',
                'Plan the smallest valuable release and the metrics that prove it.',
              ],
              [
                'Design',
                'Prototype flows, content, and UI; test quickly and iterate.',
              ],
              [
                'Deliver',
                'Ship production-ready code and handoff docs your team can own.',
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className='rounded-md border border-landing-light-color/10 bg-gradient-to-b from-white to-white/80 text-landing-dark-color p-6 shadow-sm'
              >
                <div className='text-sm uppercase tracking-wide opacity-70 font-secondary font-bold'>
                  {title}
                </div>
                <p className='mt-2 text-sm font-primary'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== CONTACT PREVIEW ==== */}
      <section className='py-20 bg-landing-alternative text-landing-light-color'>
        <div className='mx-auto max-w-5xl px-6'>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight font-primary'>
            Let&apos;s talk
          </h2>
          <p className='mt-3 max-w-2xl font-secondary'>
            Tell us about your team, timelines, and what success looks like.
          </p>
          <form className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <input
              className='rounded-md border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-white placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color'
              placeholder='Name'
              aria-label='Name'
            />
            <input
              className='rounded-md border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-white placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color'
              placeholder='Email'
              type='email'
              aria-label='Email'
            />
            <input
              className='rounded-md border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-white placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color md:col-span-2'
              placeholder='Company / Org'
              aria-label='Company'
            />
            <textarea
              className='min-h-[120px] rounded-md border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-white placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color md:col-span-2'
              placeholder='Project brief'
              aria-label='Project brief'
            />
            <div className='md:col-span-2'>
              <button
                type='submit'
                className='rounded-full bg-button-dark-bg text-button-dark-text px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
