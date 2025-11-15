// app/services/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Rocket,
  Layout,
  LineChart,
  Workflow,
  Wrench,
  Search,
  Palette,
  Database,
} from 'lucide-react';
import Image from 'next/image';
import wyeth from '../../public/yrbedit.jpg';
import PillButton from '../components/PillButton';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strategy, design, and engineering for data-rich products and content experiences.',
};

export default function ServicesPage() {
  return (
    <main className='font-primary'>
      {/* ==== HERO (full viewport) ==== */}
      <section className='relative h-[100svh] bg-services-base'>
        {/* BG image */}
        <Image
          src={wyeth}
          alt='Vitura gradient background'
          fill
          priority
          sizes='100vw'
          className='object-cover transition-opacity duration-500'
        />

        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.3)_30%,rgba(0,0,0,0.4))]' />

        {/* If your Header is fixed, keep content clear of it */}
        <div className='pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24' />

        {/* HERO COPY */}
        <div className='relative z-10 h-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6'>
            <div className='mx-auto max-w-5xl text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-services-light-color [text-shadow:_0_2px_4px_rgb(0_0_0_/_100%),_0_0_40px_rgb(0_0_0_/_80%),_0_0_80px_rgb(0_0_0_/_60%)] text-balance font-secondary'>
                Our Services
              </h1>

              <p className='mx-auto mt-6 max-w-3xl text-lg sm:text-2xl text-services-light-color [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%),_0_0_20px_rgb(0_0_0_/_60%)] font-primary text-balance'>
                We combine strategy, design, and engineering to turn messy data
                and complex ideas into clear digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className='py-16 md:py-20 bg-services-base text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            Core capabilities
          </h2>
          <p className='mt-2 max-w-2xl opacity-70 font-secondary'>
            Engagements are scoped as focused sprints or end-to-end delivery.
          </p>

          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {capabilities.map((c) => (
              <article
                key={c.title}
                className='rounded-md border border-services-light-color/10 bg-white text-services-dark-color p-6 shadow-sm'
              >
                <div className='flex items-center gap-3'>
                  <c.icon className='h-5 w-5' />
                  <h3 className='text-lg font-semibold'>
                    {c.title}
                  </h3>
                </div>
                <p className='mt-2 text-sm opacity-80 font-secondary'>
                  {c.desc}
                </p>
                <ul className='mt-4 space-y-1 text-sm opacity-70 font-secondary'>
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className='pl-4'
                    >
                      • {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className='py-16 md:py-20 bg-services-alternative text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            How we work
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-4'>
            {[
              ['Discover', 'Align on outcomes, audiences, and constraints.'],
              ['Define', 'Pick the smallest valuable release; set metrics.'],
              ['Design', 'Prototype flows/content/UI; test and iterate.'],
              ['Deliver', 'Ship production code and clear handoff docs.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className='rounded-md border border-services-light-color/10 bg-white text-services-dark-color p-6'
              >
                <div className='text-sm font-semibold uppercase tracking-wide opacity-70 font-secondary'>
                  {title}
                </div>
                <p className='mt-2 text-sm font-secondary'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES / WAYS TO ENGAGE */}
      <section className='py-16 md:py-20 bg-services-base text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            Ways to engage
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {packages.map((p) => (
              <div
                key={p.name}
                className='flex h-full flex-col rounded-md border border-services-light-color/10 bg-white text-services-dark-color p-6'
              >
                <div className='flex items-center gap-3'>
                  <p.icon className='h-5 w-5' />
                  <div className='text-lg font-semibold'>
                    {p.name}
                  </div>
                </div>
                <p className='mt-2 text-sm opacity-80 font-secondary'>
                  {p.desc}
                </p>
                <ul className='mt-4 space-y-1 text-sm opacity-70 font-secondary'>
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className='pl-4'
                    >
                      • {h}
                    </li>
                  ))}
                </ul>
                <PillButton
                  href='/contact'
                  text='Talk to us'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 md:py-20 bg-services-alternative text-services-light-color'>
        <div className='mx-auto max-w-4xl px-6'>
          <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
            FAQs
          </h2>
          <div className='mt-8 space-y-6'>
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className='group rounded-md border border-services-light-color/10 bg-white text-services-dark-color p-5 open:shadow-sm'
              >
                <summary className='cursor-pointer list-none text-base font-medium'>
                  {q}
                </summary>
                <p className='mt-2 text-sm opacity-80 font-secondary'>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 md:py-24 bg-services-base text-services-light-color'>
        <div className='mx-auto max-w-5xl px-6 text-center'>
          <h3 className='text-2xl font-bold tracking-tight text-balance'>
            Have a challenge in mind?
          </h3>
          <p className='mx-auto mt-2 max-w-2xl opacity-70 font-secondary text-balance'>
            Tell us your goals and constraints—we&apos;ll map the fastest path from
            idea to impact.
          </p>
          <div className='mt-6'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-button-light-bg text-button-light-text px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity'
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---- content data ---- */

const capabilities = [
  {
    title: 'Digital Strategy',
    icon: Rocket,
    desc: 'Roadmaps, KPIs, and experimentation frameworks that align teams and de-risk delivery.',
    items: [
      'Product & content strategy',
      'Analytics & instrumentation',
      'Experiment design',
    ],
  },
  {
    title: 'Experience Design',
    icon: Layout,
    desc: 'Human-centered UX/UI and content architecture that clarifies complex tasks and stories.',
    items: [
      'Information architecture',
      'Design systems',
      'Prototyping & testing',
    ],
  },
  {
    title: 'Data Products',
    icon: LineChart,
    desc: 'Dashboards, pipelines, and models that turn messy inputs into decisions.',
    items: ['ETL & warehousing', 'Metrics modeling', 'Reporting & dashboards'],
  },
  {
    title: 'Operations & Workflow',
    icon: Workflow,
    desc: 'Mapping processes and building tools that remove friction across teams.',
    items: ['Process audits', 'Automation', 'Documentation'],
  },
  {
    title: 'Web Engineering',
    icon: Wrench,
    desc: 'Next.js, React, Tailwind—fast, accessible, and maintainable front-ends.',
    items: ['App architecture', 'Performance & SEO', 'Accessibility (a11y)'],
  },
  {
    title: 'Research & Audits',
    icon: Search,
    desc: 'User research, heuristics, and technical reviews to find leverage before you ship.',
    items: ['User interviews', 'Heuristic evals', 'Tech audits'],
  },
];

const packages = [
  {
    name: 'Discovery Sprint',
    icon: Palette,
    desc: '2–3 weeks to clarify goals, audiences, and the quickest path to a meaningful v1.',
    highlights: ['Workshops & research', 'Scope & roadmap', 'Prototype & plan'],
  },
  {
    name: 'Build & Ship',
    icon: Wrench,
    desc: 'Design + engineering to deliver a production-ready release with analytics and docs.',
    highlights: [
      'Design system & UI',
      'Next.js implementation',
      'Instrumentation',
    ],
  },
  {
    name: 'Data Foundations',
    icon: Database,
    desc: 'Clean data pipelines and dashboards tied to the metrics that matter.',
    highlights: ['ETL & modeling', 'Warehouse setup', 'Reporting & QA'],
  },
];

const faqs: [string, string][] = [
  [
    'Do you take fixed-scope projects?',
    'Yes. Most engagements start with a short discovery to reduce risk, followed by a fixed scope or milestone-based build.',
  ],
  [
    'What stacks do you use?',
    'Next.js/React/Tailwind on the front end; Supabase/Postgres or your preferred warehouse for data; modern analytics and A/B testing tools as needed.',
  ],
  [
    'Can you work with our existing team?',
    'Absolutely—we embed with product, design, and engineering, or operate as an external sprint team.',
  ],
];
