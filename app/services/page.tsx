// app/services/page.tsx
'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { useState } from 'react';
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
import heroImage from '../../public/ed-clark-sotheby-2.jpeg';
import sidebarImage from '../../public/yayoi.jpg';
import PillButton from '../components/PillButton';

// Note: metadata export removed due to 'use client' directive
// Metadata should be handled in layout or parent server component

export default function ServicesPage() {
  return (
    <main className='font-primary bg-gradient-to-b from-services-alternative via-services-alternative to-services-base'>
      {/* ==== HERO (full viewport) ==== */}
      <section className='relative h-[100dvh] bg-services-base border-b'>
        {/* BG image */}
        <Image
          src={heroImage}
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
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-services-light-color [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] text-balance font-secondary'>
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

      {/* ==== CONTENT WITH SIDEBAR ==== */}
      <div className='flex flex-col lg:flex-row'>
        {/* Left Sidebar */}
        <aside className='hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-0 h-screen border-r'>
          <div className='relative h-full w-full'>
            <Image
              src={sidebarImage}
              alt='Yayoi Kusama artwork'
              fill
              className='object-cover'
              sizes='25vw'
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 lg:w-3/4 xl:w-4/5 pb-16 md:pb-24'>
          {/* CAPABILITIES GRID */}
          <section className='py-16 md:py-20 text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
          <div className='bg-services-base shadow-xl p-8 md:p-12 lg:p-16 text-services-light-color'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-heading-base'>
              Core capabilities
            </h2>
            <p className='mt-6 text-lg md:text-xl max-w-2xl opacity-80 font-secondary'>
              Engagements are scoped as focused sprints or end-to-end delivery.
            </p>

            <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {capabilities.map((c) => (
              <article
                key={c.title}
                className='border border-services-light-color/20 bg-services-base/50 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start gap-3'>
                  <c.icon className='h-5 w-5 mt-1.5' />
                  <h3 className='text-xl font-semibold'>
                    {c.title}
                  </h3>
                </div>
                <p className='mt-3 text-sm opacity-80 font-secondary leading-relaxed'>
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

      {/* PROCESS */}
      <section className='py-16 md:py-20 text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-heading-alt mb-6'>
            How we work
          </h2>
          <p className='text-lg md:text-xl font-secondary opacity-80 max-w-3xl mb-16'>
            Our process is designed to move fast, reduce risk, and deliver measurable impact.
          </p>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
            {[
              ['Discover', 'Align on outcomes, audiences, and constraints.'],
              ['Define', 'Pick the smallest valuable release; set metrics.'],
              ['Design', 'Prototype flows/content/UI; test and iterate.'],
              ['Deliver', 'Ship production code and clear handoff docs.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className='border border-services-light-color/10 bg-gradient-to-b from-services-base to-services-base/95 text-services-light-color p-8 shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-base uppercase tracking-wide opacity-70 font-secondary font-bold'>
                  {title}
                </div>
                <p className='mt-3 text-base font-secondary leading-relaxed'>
                  {desc}
                </p>
              </div>
            ))}
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

      {/* PACKAGES / WAYS TO ENGAGE */}
      <section className='py-16 md:py-20 text-services-light-color'>
        <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
          <div className='bg-services-base shadow-xl p-8 md:p-12 lg:p-16 text-services-light-color'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-heading-base'>
              Ways to engage
            </h2>
            <p className='mt-6 text-lg md:text-xl opacity-80 font-secondary max-w-3xl'>
              Choose the engagement model that fits your timeline and goals.
            </p>
            <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {packages.map((p) => (
              <div
                key={p.name}
                className='flex h-full flex-col border border-services-light-color/20 bg-services-base/50 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-center gap-3'>
                  <p.icon className='h-5 w-5' />
                  <div className='text-xl font-semibold'>
                    {p.name}
                  </div>
                </div>
                <p className='mt-3 text-sm opacity-80 font-secondary leading-relaxed'>
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
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 md:py-20 text-services-light-color'>
        <div className='mx-auto max-w-4xl px-6 md:px-8 lg:px-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-heading-alt'>
            FAQs
          </h2>
          <div className='mt-12 space-y-6'>
            {faqs.map(([q, a], index) => (
              <FAQItem key={q} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 md:py-20 text-services-light-color'>
        <div className='mx-auto max-w-5xl px-6 md:px-8 lg:px-20 text-center'>
          <h3 className='text-4xl sm:text-5xl font-bold tracking-tight text-balance text-heading-alt'>
            Have a challenge in mind?
          </h3>
          <p className='mx-auto mt-6 max-w-2xl text-lg md:text-xl opacity-80 font-secondary text-balance'>
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
        </div>
      </div>
    </main>
  );
}

/* ---- FAQ Accordion Component ---- */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border border-services-light-color/10 bg-services-base/50 backdrop-blur-sm text-services-light-color p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left cursor-pointer flex items-start justify-between gap-4'
      >
        <span className='text-lg font-medium'>{question}</span>
        <span className='text-lg flex-shrink-0 transition-transform duration-300' style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
      </button>
      <div
        className='overflow-hidden transition-all duration-300 ease-in-out'
        style={{
          maxHeight: isOpen ? '500px' : '0px',
        }}
      >
        <p
          className='mt-6 text-base opacity-80 font-secondary leading-relaxed transition-opacity duration-300 ease-in-out'
          style={{
            opacity: isOpen ? 1 : 0,
            transitionDelay: isOpen ? '150ms' : '0ms',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
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
