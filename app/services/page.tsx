// app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteBand from '../components/QuoteBand';
import CTABand from '../components/CTABand';
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
import { Reveal, RevealGroup, RevealItem } from '../styles/Reveal';
import { FAQItem } from './FAQ';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strategy, design, and engineering for data-rich products — from discovery sprints to production builds and data foundations.',
};

export default function ServicesPage() {
  return (
    <main className='bg-paper text-navy font-primary'>
      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24'>
          <Reveal variant='up'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              Vol. II — Services
            </div>
          </Reveal>
          <Reveal variant='up' delay={0.1}>
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              Strategy, design, and engineering for{' '}
              <em className='text-indigo'>data-rich</em> products.
            </h1>
          </Reveal>
          <Reveal variant='up' delay={0.25}>
            <p className='mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed text-blue'>
              We combine strategy, design, and engineering to turn messy data
              and complex ideas into clear digital experiences.
            </p>
          </Reveal>

          <Reveal variant='up' delay={0.4} className='mt-16 md:mt-20'>
            <div className='relative aspect-[3/2] border border-rule overflow-hidden'>
              <Image
                src='/ed-clark-bomb.jpg'
                alt=''
                fill
                priority
                sizes='(min-width: 1024px) 1100px, 100vw'
                className='object-cover'
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id='strategy' className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                I.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Core capabilities
              </h2>
            </div>
          </Reveal>

          <Reveal variant='up' delay={0.15}>
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              Engagements are scoped as focused sprints or end-to-end delivery.
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'
          >
            {capabilities.map((c) => (
              <RevealItem key={c.title}>
                <article
                  id={c.id}
                  className='border-t border-rule pt-8 pb-12 h-full'
                >
                  <div className='flex items-center gap-3 text-blue'>
                    <c.icon className='h-4 w-4' aria-hidden='true' />
                    <h3 className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                      {c.title}
                    </h3>
                  </div>
                  <p className='mt-5 text-base leading-[1.7] text-navy'>
                    {c.desc}
                  </p>
                  <ul className='mt-5 space-y-1.5 text-sm font-secondary text-blue'>
                    {c.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section className='border-b border-rule'>
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
              Our process is designed to move fast, reduce risk, and deliver
              measurable impact.
            </p>
          </Reveal>

          <RevealGroup stagger={0.12} className='grid grid-cols-1 md:grid-cols-4 md:gap-x-8'>
            {[
              ['Discover', 'Align on outcomes, audiences, and constraints.'],
              ['Define', 'Pick the smallest valuable release; set metrics.'],
              ['Design', 'Prototype flows/content/UI; test and iterate.'],
              ['Deliver', 'Ship production code and clear handoff docs.'],
            ].map(([title, desc], i) => (
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
        image='/wyeth.jpg'
        quote='The goal is never more features — it is fewer, sharper decisions, made faster.'
      />

      {/* PACKAGES */}
      <section id='design' className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                III.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Ways to engage
              </h2>
            </div>
          </Reveal>

          <Reveal variant='up' delay={0.15}>
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              Choose the engagement model that fits your timeline and goals.
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.12}
            className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8'
          >
            {packages.map((p) => (
              <RevealItem key={p.name}>
                <div
                  id={p.id}
                  className='flex h-full flex-col border-t border-rule pt-8 pb-12'
                >
                  <div className='flex items-center gap-3 text-blue'>
                    <p.icon className='h-4 w-4' aria-hidden='true' />
                    <h3 className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                      {p.name}
                    </h3>
                  </div>
                  <p className='mt-5 text-base leading-[1.7] text-navy'>
                    {p.desc}
                  </p>
                  <ul className='mt-5 space-y-1.5 text-sm font-secondary text-blue'>
                    {p.highlights.map((h) => (
                      <li key={h}>— {h}</li>
                    ))}
                  </ul>
                  <Link
                    href='/contact'
                    className='mt-8 inline-block self-start text-base border-b border-navy pb-1 transition-opacity hover:opacity-70 text-navy'
                  >
                    Talk to us →
                  </Link>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                IV.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Questions
              </h2>
            </div>
          </Reveal>
          <div className='space-y-0'>
            {faqs.map(([q, a]) => (
              <FAQItem key={q} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title='Have a challenge in mind?'
        body="Tell us your goals and constraints — we'll map the fastest path from idea to impact."
        cta='Contact us'
        href='/contact'
      />
    </main>
  );
}

/* ---- content ---- */

const capabilities = [
  {
    id: 'strategy',
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
    id: 'design',
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
    id: 'data',
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
    desc: 'Next.js, React, Tailwind — fast, accessible, and maintainable front-ends.',
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
    id: 'discovery',
    name: 'Discovery Sprint',
    icon: Palette,
    desc: '2–3 weeks to clarify goals, audiences, and the quickest path to a meaningful v1.',
    highlights: ['Workshops & research', 'Scope & roadmap', 'Prototype & plan'],
  },
  {
    id: 'build',
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
    id: 'data-foundations',
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
    'Absolutely — we embed with product, design, and engineering, or operate as an external sprint team.',
  ],
];
