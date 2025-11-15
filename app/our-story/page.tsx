// app/our-story/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Users,
  Heart,
  Wand2,
  Layers,
  Gauge,
  Beaker,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import pinkpurpleblue from '../../public/pinkpurpleblue.jpg';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Strategy, design, and engineering for data-rich products and content experiences.',
};

export default function OurStoryPage() {
  return (
    <main className='font-primary'>
      <section className='relative h-[100svh] bg-story-base'>
        {/* BG image */}
        <Image
          src={pinkpurpleblue}
          alt='Vitura gradient background'
          fill
          priority
          sizes='100vw'
          className='object-cover transition-opacity duration-500'
        />

        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.15)_30%,rgba(0,0,0,0.2))]' />

        {/* If your Header is fixed, keep content clear of it */}
        <div className='pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24' />

        {/* HERO COPY */}
        <div className='relative z-10 flex h-full items-center'>
          <div className='mx-auto max-w-5xl px-6 text-center'>
            <h1 className='mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-story-light-color [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%),_0_0_40px_rgb(0_0_0_/_80%),_0_0_80px_rgb(0_0_0_/_60%)] text-balance font-secondary'>
              Our Story
            </h1>

            <p className='mx-auto mt-6 max-w-3xl text-lg sm:text-2xl text-story-light-color [text-shadow:_0_1px_6px_rgb(0_0_0_/_45%)] font-primary'>
              We started Vitura after too many rooms where the software was
              clearly built for itself—not for the people who had to use it.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className='py-16 md:py-20 bg-story-base text-story-light-color'>
        <div className='mx-auto max-w-4xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl font-primary'>
            Why we exist
          </h2>
          <div className='mt-5 space-y-4 opacity-80 font-secondary'>
            <p>
              We've led teams inside orgs where critical work happened in a maze
              of tabs, inscrutable settings, and dashboards that tried to show
              everything at once—and told us nothing. Features shipped because
              they were possible, not because anyone needed them.
            </p>
            <p>
              Time and again we watched tools ignore fundamentals:
              <em>
                {' '}
                no progressive disclosure, no research with actual users,
                fragile workflows,
              </em>{' '}
              and "templates" that multiplied complexity. People did the real
              design work—by inventing workarounds in spreadsheets, sticky
              notes, and long email threads.
            </p>
            <p>
              Vitura is our answer: a studio that puts <strong>clarity</strong>,
              <strong> context</strong>, and <strong>care</strong> back into
              digital tools so teams can do their best work without fighting the
              interface.
            </p>
          </div>

          {/* Pain points list */}
          <ul className='mt-8 grid grid-cols-1 gap-4 text-sm md:grid-cols-2'>
            {[
              'Endless settings, unclear defaults',
              'No progressive disclosure—everything exposed at once',
              'Zero research with the people who actually use the product',
              'KPIs without meaning; dashboards without decisions',
              'Every team forced into the same rigid workflow',
              'Accessibility and performance as afterthoughts',
            ].map((item) => (
              <li
                key={item}
                className='rounded-2xl border border-story-light-color/10 bg-white text-story-dark-color p-4 leading-relaxed font-secondary'
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className='py-16 md:py-20 bg-story-alternative'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl text-story-dark-color font-primary'>
            What we believe
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {principles.map((p) => (
              <article
                key={p.title}
                className='rounded-2xl border border-story-dark-color/10 bg-white text-story-dark-color p-6 shadow-sm'
              >
                <div className='flex items-center gap-3'>
                  <p.icon className='h-5 w-5' />
                  <h3 className='text-lg font-semibold font-primary'>
                    {p.title}
                  </h3>
                </div>
                <p className='mt-2 text-sm opacity-80 font-secondary'>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className='py-16 md:py-20 bg-story-base text-story-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight sm:text-3xl font-primary'>
                How we turn frustration into focus
              </h2>
              <p className='mt-3 opacity-80 font-secondary'>
                We practice progressive disclosure by default: surface the next
                best action, hide the rest until it's relevant. Then we test it
                with the people who will actually use it.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              {[
                [
                  'Observe first',
                  'We watch workflows in the wild before we propose changes.',
                ],
                [
                  'Reduce surface area',
                  'Fewer choices up front; clearer choices later.',
                ],
                [
                  'Make data legible',
                  'Metrics modeled to decisions, not the other way around.',
                ],
                [
                  'Ship with care',
                  'Accessible, fast, documented—so teams can own it.',
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className='rounded-2xl border border-story-light-color/10 bg-white text-story-dark-color p-5'
                >
                  <div className='text-sm font-semibold uppercase tracking-wide opacity-70 font-secondary'>
                    {title}
                  </div>
                  <p className='mt-1 text-sm font-secondary'>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MINI–TIMELINE */}
      <section className='py-16 md:py-20 bg-story-alternative'>
        <div className='mx-auto max-w-5xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl text-story-dark-color font-primary'>
            Milestones
          </h2>
          <ol className='mt-6 space-y-4'>
            {[
              [
                'The insight',
                'Years of building inside complex orgs taught us that most tools fail because they were never shaped around the people doing the work.',
              ],
              [
                'The studio',
                'Vitura launches to focus on humane data products, clear content systems, and practical research.',
              ],
              [
                'The practice',
                'Short discovery sprints, measurable releases, and design systems teams can extend—without vendor lock-in.',
              ],
            ].map(([title, desc], i) => (
              <li
                key={i}
                className='rounded-2xl border border-story-dark-color/10 bg-white text-story-dark-color p-5'
              >
                <div className='text-base font-semibold font-primary'>
                  {title}
                </div>
                <p className='mt-1 text-sm opacity-80 font-secondary'>
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 md:py-24 bg-story-base text-story-light-color'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <h3 className='text-2xl font-bold tracking-tight font-primary'>
            Let's design for people, not just for platforms.
          </h3>
          <p className='mx-auto mt-2 max-w-2xl opacity-70 font-secondary'>
            Have a tool that feels heavier than the work it's supposed to help?
            We'll find the smallest, clearest next step together.
          </p>
          <div className='mt-6 flex items-center justify-center gap-3'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-button-light-bg text-button-light-text px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity'
            >
              Get in touch <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- content --- */

const principles = [
  {
    title: 'People over features',
    icon: Heart,
    desc: 'We design for real tasks and contexts, not checklists. Every control earns its place.',
  },
  {
    title: 'Progressive disclosure',
    icon: Layers,
    desc: 'Show the next best action first; reveal complexity only when it is needed.',
  },
  {
    title: 'Research, always',
    icon: Users,
    desc: 'We observe workflows, test early, and measure impact with the teams who use the product.',
  },
  {
    title: 'Performance is UX',
    icon: Gauge,
    desc: 'Fast, accessible interfaces turn intent into action. We budget for speed and a11y up front.',
  },
  {
    title: 'Pragmatic craft',
    icon: Wand2,
    desc: 'We simplify ruthlessly, model data for decisions, and ship maintainable systems.',
  },
  {
    title: 'Evidence over hype',
    icon: Beaker,
    desc: 'Hypotheses, experiments, and instrumentation—so choices are explainable and repeatable.',
  },
];
