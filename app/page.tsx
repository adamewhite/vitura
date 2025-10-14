// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import VituraLogo from './components/VituraLogo';
import SiteNav from './components/SiteNav';

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-neutral-900'>
      {/* ==== HERO (full viewport) ==== */}
      <section className='relative h-screen'>
        {/* BG image */}
        <Image
          src='/purples.jpg'
          alt='Vitura background'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.55))]' />

        {/* NAV */}
        <SiteNav />

        {/* HERO COPY */}
        <div className='relative z-10 flex h-full items-center'>
          <div className='mx-auto max-w-5xl px-6 text-center text-white'>
            <h1 className='mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight'>
              Vitura is a studio for digital transformation,
              <br className='hidden sm:block' />
              {' '}data strategy, and human-centered design
              <br className='hidden sm:block' /> based in New York.
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-base sm:text-lg text-white/90'>
              A mix of tech, creative, and strategy—think{' '}
              <span className='italic'>Digital Experience Architect</span> meets
              <span className='italic'> Data Experience Studio</span>.
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
              <Link
                href='/contact'
                className='rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90'
              >
                Start a Project
              </Link>
              <Link
                href='/our-story'
                className='rounded-full border border-white/70 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10'
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==== SERVICES ==== */}
      <section className='relative py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              What we do
            </h2>
            <p className='mt-4 text-neutral-600'>
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
                className='rounded-2xl border bg-white p-6 shadow-sm'
              >
                <h3 className='text-lg font-semibold'>{card.title}</h3>
                <p className='mt-2 text-sm text-neutral-600'>{card.desc}</p>
                <Link
                  href='/services'
                  className='mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4'
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== FEATURED WORK ==== */}
      <section className='border-t bg-neutral-50 py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='flex items-end justify-between gap-6'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Selected work
            </h2>
            <Link
              href='/work'
              className='text-sm font-medium text-neutral-900 underline underline-offset-4'
            >
              View all
            </Link>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href='/work'
                className='group overflow-hidden rounded-2xl border bg-white'
              >
                <div className='relative h-56 w-full'>
                  <Image
                    src='/purples.jpg'
                    alt={`Case study ${i}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='p-5'>
                  <h3 className='text-base font-semibold'>Case Study {i}</h3>
                  <p className='mt-1 text-sm text-neutral-600'>
                    A short one-liner about the outcome and why it matters.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==== PROCESS / APPROACH ==== */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
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
                className='rounded-2xl border p-6'
              >
                <div className='text-sm font-semibold uppercase tracking-wide text-neutral-500'>
                  {title}
                </div>
                <p className='mt-2 text-sm text-neutral-700'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== CTA STRIP ==== */}
      <section className='border-y bg-neutral-900 py-16 text-white'>
        <div className='mx-auto max-w-7xl px-6 text-center'>
          <h3 className='text-2xl font-bold'>Have a challenge in mind?</h3>
          <p className='mx-auto mt-2 max-w-2xl text-white/80'>
            Let’s map the fastest path from idea to impact—then build it.
          </p>
          <div className='mt-6'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ==== CONTACT PREVIEW ==== */}
      <section className='py-20'>
        <div className='mx-auto max-w-5xl px-6'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Let’s talk
          </h2>
          <p className='mt-3 max-w-2xl text-neutral-600'>
            Tell us about your team, timelines, and what success looks like.
          </p>
          <form className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <input
              className='rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
              placeholder='Name'
              aria-label='Name'
            />
            <input
              className='rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
              placeholder='Email'
              type='email'
              aria-label='Email'
            />
            <input
              className='rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900 md:col-span-2'
              placeholder='Company / Org'
              aria-label='Company'
            />
            <textarea
              className='min-h-[120px] rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900 md:col-span-2'
              placeholder='Project brief'
              aria-label='Project brief'
            />
            <div className='md:col-span-2'>
              <button
                type='submit'
                className='rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className='border-t bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-6 py-12'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-4'>
            <div>
              <div className='text-lg font-semibold'>Vitura</div>
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
    </main>
  );
}
