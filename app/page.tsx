// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/ed-clark-sotheby-5.jpeg';
import sidebarImage from '../public/robertmotherwellorange.jpg';

export default function Home() {
  return (
    <main className='bg-gradient-to-b from-landing-alternative via-landing-alternative to-landing-base'>
      {/* ==== HERO (full viewport) ==== */}
      <section className='relative h-[100dvh] bg-landing-base border-b'>
        {/* BG image */}
        <Image
          src={heroImage}
          alt='Vitura background'
          fill
          priority
          sizes='100vw'
          className='object-cover transition-opacity duration-500'
        />
        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.1))]' />

        {/* HERO COPY */}
        <div className='relative z-10 h-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6'>
            <div className='mx-auto max-w-5xl text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-landing-light-color tracking-[.001em] [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] text-balance font-secondary'>
                We are a studio for digital transformation, data strategy, and
                human-centered design based in New York.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ==== CONTENT WITH SIDEBAR ==== */}
      <div className='flex flex-col lg:flex-row'>
        {/* Left Sidebar */}
        <aside className='hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-0 h-screen border-r'>
          <div className='relative h-full w-full'>
            <Image
              src={sidebarImage}
              alt='Robert Motherwell artwork'
              fill
              className='object-cover'
              sizes='25vw'
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 lg:w-3/4 xl:w-4/5 pb-16 md:pb-24'>
          {/* ==== SERVICES ==== */}
          <section className='py-16 md:py-20 text-landing-light-color'>
            <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
              <div className='bg-landing-base shadow-xl p-8 md:p-12 lg:p-16 text-landing-light-color'>
                <div className='max-w-3xl'>
                  <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-base'>
                    What we do
                  </h2>
                  <p className='mt-6 text-lg md:text-xl font-secondary opacity-80'>
                    Strategy, design, and engineering for data-rich products and
                    content experiences.
                  </p>
                </div>
                <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
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
                      className='border border-landing-light-color/20 bg-landing-base/50 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-shadow'
                    >
                      <h3 className='text-xl font-semibold font-primary text-heading-alt'>
                        {card.title}
                      </h3>
                      <p className='mt-3 text-sm opacity-80 font-secondary leading-relaxed'>
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
            </div>
          </section>

          {/* Image Divider 1 - Top of image (mobile/tablet only) */}
          <div className='lg:hidden relative h-32 md:h-40 w-full overflow-hidden'>
            <Image
              src={sidebarImage}
              alt='Divider'
              fill
              className='object-cover object-top'
              sizes='100vw'
            />
          </div>

          {/* ==== PROCESS / APPROACH ==== */}
          <section className='py-16 md:py-20 text-landing-light-color'>
            <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
              <div className='px-8 md:px-12 lg:px-16'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-base mb-6'>
                  How we work
                </h2>
                <p className='text-lg md:text-xl font-secondary opacity-80 max-w-3xl mb-16'>
                  Our process is designed to move fast, reduce risk, and deliver
                  measurable impact.
                </p>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
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
                      className='border border-landing-light-color/10 bg-gradient-to-b from-landing-base to-landing-base/95 text-landing-light-color p-8 shadow-lg hover:shadow-xl transition-shadow'
                    >
                      <div className='text-base uppercase tracking-wide opacity-70 font-secondary font-bold'>
                        {title}
                      </div>
                      <p className='mt-3 text-base font-primary leading-relaxed'>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Image Divider 2 - Bottom of image (mobile/tablet only) */}
          <div className='lg:hidden relative h-32 md:h-40 w-full overflow-hidden'>
            <Image
              src={sidebarImage}
              alt='Divider'
              fill
              className='object-cover object-bottom'
              sizes='100vw'
            />
          </div>

          {/* ==== CONTACT PREVIEW ==== */}
          <section className='py-16 md:py-20 text-landing-light-color'>
            <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
              <div className='bg-landing-base shadow-xl p-8 md:p-12 lg:p-16 text-landing-light-color'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-base'>
                  Let&apos;s talk
                </h2>
                <p className='mt-6 max-w-2xl text-lg md:text-xl font-secondary opacity-80'>
                  Tell us about your team, timelines, and what success looks
                  like.
                </p>
                <form className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <input
                    className='border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-landing-alternative placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color shadow-sm'
                    placeholder='Name'
                    aria-label='Name'
                  />
                  <input
                    className='border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-landing-alternative placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color shadow-sm'
                    placeholder='Email'
                    type='email'
                    aria-label='Email'
                  />
                  <input
                    className='border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-landing-alternative placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color md:col-span-2 shadow-sm'
                    placeholder='Company'
                    aria-label='Company'
                  />
                  <textarea
                    className='min-h-[120px] border border-landing-light-color/20 px-4 py-3 text-landing-dark-color bg-landing-alternative placeholder:text-landing-dark-color/50 outline-none focus:ring-2 focus:ring-landing-light-color md:col-span-2 shadow-sm'
                    placeholder='Tell us about your project'
                    aria-label='Project brief'
                  />
                  <div className='md:col-span-2'>
                    <button
                      type='submit'
                      className='rounded-full bg-button-dark-bg text-button-dark-text px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg'
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
