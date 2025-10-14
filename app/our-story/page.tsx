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

export const metadata: Metadata = {
  title: 'Our Story | Vitura',
  description:
    'Why Vitura exists: building humane, purpose-driven digital experiences instead of bloated toolkits no one asked for.',
};

export default function OurStoryPage() {
  return (
    <main className='bg-white text-neutral-900'>
      {/* HERO */}
      <section className='border-b bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 md:py-24'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-5xl'>
              Our Story
            </h1>
            <p className='mt-4 text-neutral-600'>
              We started Vitura after too many rooms where the software was
              clearly built for itself—not for the people who had to use it.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className='py-16 md:py-20'>
        <div className='mx-auto max-w-4xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            Why we exist
          </h2>
          <div className='mt-5 space-y-4 text-neutral-700'>
            <p>
              We’ve led teams inside orgs where critical work happened in a maze
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
              and “templates” that multiplied complexity. People did the real
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
          <ul className='mt-8 grid grid-cols-1 gap-4 text-sm text-neutral-800 md:grid-cols-2'>
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
                className='rounded-2xl border bg-white p-4 leading-relaxed'
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className='border-y bg-neutral-50 py-16 md:py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            What we believe
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {principles.map((p) => (
              <article
                key={p.title}
                className='rounded-2xl border bg-white p-6 shadow-sm'
              >
                <div className='flex items-center gap-3'>
                  <p.icon className='h-5 w-5' />
                  <h3 className='text-lg font-semibold'>{p.title}</h3>
                </div>
                <p className='mt-2 text-sm text-neutral-700'>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className='py-16 md:py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                How we turn frustration into focus
              </h2>
              <p className='mt-3 text-neutral-700'>
                We practice progressive disclosure by default: surface the next
                best action, hide the rest until it’s relevant. Then we test it
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
                  className='rounded-2xl border p-5'
                >
                  <div className='text-sm font-semibold uppercase tracking-wide text-neutral-500'>
                    {title}
                  </div>
                  <p className='mt-1 text-sm text-neutral-700'>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MINI–TIMELINE */}
      <section className='border-y bg-neutral-50 py-16 md:py-20'>
        <div className='mx-auto max-w-5xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
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
                className='rounded-2xl border bg-white p-5'
              >
                <div className='text-base font-semibold'>{title}</div>
                <p className='mt-1 text-sm text-neutral-700'>{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 md:py-24'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <h3 className='text-2xl font-bold tracking-tight'>
            Let’s design for people, not just for platforms.
          </h3>
          <p className='mx-auto mt-2 max-w-2xl text-neutral-600'>
            Have a tool that feels heavier than the work it’s supposed to help?
            We’ll find the smallest, clearest next step together.
          </p>
          <div className='mt-6 flex items-center justify-center gap-3'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800'
            >
              Get in touch <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
            <Link
              href='/work'
              className='inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-100'
            >
              See our work
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
    desc: 'Show the next best action first; reveal complexity only when it’s needed.',
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
