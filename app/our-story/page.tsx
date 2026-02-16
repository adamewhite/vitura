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
import heroImage from '../../public/ed-clark-sotheby-3.jpeg';
import sidebarImage from '../../public/richter.jpg';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Strategy, design, and engineering for data-rich products and content experiences.',
};

export default function OurStoryPage() {
  return (
    <main className='font-primary bg-gradient-to-b from-story-alternative via-story-alternative to-story-base'>
      <section className='relative h-[100dvh] bg-story-base border-b'>
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
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.2))]' />

        {/* If your Header is fixed, keep content clear of it */}
        <div className='pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24' />

        {/* HERO COPY */}
        <div className='relative z-10 flex h-full items-center'>
          <div className='mx-auto max-w-5xl px-6 text-center'>
            <h1 className='mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-story-light-color [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] text-balance font-secondary'>
              Our Story
            </h1>

            <p className='mx-auto mt-6 max-w-3xl text-lg sm:text-2xl text-story-light-color [text-shadow:_0_1px_6px_rgb(0_0_0_/_45%)] font-primary text-balance'>
              We started Vitura after too many rooms where the software was
              clearly built for itself—not for the people who had to use it.
            </p>
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
              alt='Gerhard Richter artwork'
              fill
              className='object-cover'
              sizes='25vw'
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 lg:w-3/4 xl:w-4/5 pb-16 md:pb-24'>
          {/* ORIGIN STORY */}
          <section className='py-16 md:py-20 text-story-light-color'>
        <div className='mx-auto max-w-4xl px-6 md:px-8 lg:px-20'>
          <div className='bg-story-base shadow-xl p-8 md:p-12 lg:p-16 text-story-light-color'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-base'>
              Why we exist
            </h2>
            <div className='mt-8 space-y-6 text-lg opacity-80 font-secondary'>
            <p>
              We&apos;ve led teams inside orgs where critical work happened in a maze
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
              and &ldquo;templates&rdquo; that multiplied complexity. People did the real
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
            <ul className='mt-12 grid grid-cols-1 gap-4 text-base md:grid-cols-2'>
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
                className='border border-story-light-color/20 bg-story-base/50 backdrop-blur-sm text-story-light-color p-5 leading-relaxed font-secondary shadow-md'
              >
                • {item}
              </li>
            ))}
            </ul>
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

      {/* PRINCIPLES */}
      <section className='py-16 md:py-20 text-story-light-color'>
        <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-alt mb-6'>
            What we believe
          </h2>
          <p className='text-lg md:text-xl font-secondary opacity-80 max-w-3xl mb-16'>
            Our principles guide every decision, from research to delivery.
          </p>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {principles.map((p) => (
              <article
                key={p.title}
                className='border border-story-light-color/10 bg-gradient-to-b from-story-base to-story-base/95 text-story-light-color p-8 shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='flex items-center gap-3'>
                  <p.icon className='h-5 w-5' />
                  <h3 className='text-xl font-semibold font-primary'>
                    {p.title}
                  </h3>
                </div>
                <p className='mt-3 text-base opacity-80 font-secondary leading-relaxed'>
                  {p.desc}
                </p>
              </article>
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

      {/* APPROACH */}
      <section className='py-16 md:py-20 text-story-light-color'>
        <div className='mx-auto max-w-7xl px-6 md:px-8 lg:px-20'>
          <div className='bg-story-base shadow-xl p-8 md:p-12 lg:p-16 text-story-light-color'>
            <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2'>
              <div>
                <h2 className='text-4xl sm:text-5xl font-bold tracking-tight font-primary text-heading-base'>
                  How we turn frustration into focus
                </h2>
                <p className='mt-6 text-lg opacity-80 font-secondary leading-relaxed'>
                  We practice progressive disclosure by default: surface the next
                  best action, hide the rest until it&apos;s relevant. Then we test it
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
                  className='border border-story-light-color/20 bg-story-base/50 backdrop-blur-sm text-story-light-color p-6 shadow-md hover:shadow-lg transition-shadow'
                >
                  <div className='text-base font-semibold uppercase tracking-wide opacity-70 font-secondary'>
                    {title}
                  </div>
                  <p className='mt-2 text-base font-secondary leading-relaxed'>
                    {desc}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINI–TIMELINE */}
      <section className='py-16 md:py-20 text-story-light-color'>
        <div className='mx-auto max-w-5xl px-6 md:px-8 lg:px-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-alt'>
            Milestones
          </h2>
          <ol className='mt-12 space-y-6'>
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
                className='border border-story-light-color/10 bg-story-base/50 backdrop-blur-sm text-story-light-color p-6 shadow-md'
              >
                <div className='text-xl font-semibold font-primary'>
                  {title}
                </div>
                <p className='mt-3 text-base opacity-80 font-secondary leading-relaxed'>
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 md:py-20 text-story-light-color'>
        <div className='mx-auto max-w-4xl px-6 md:px-8 lg:px-20 text-center'>
          <h3 className='text-4xl sm:text-5xl font-bold tracking-tight font-primary text-balance text-heading-alt'>
            Let&apos;s design for people, not just for platforms.
          </h3>
          <p className='mx-auto mt-6 max-w-2xl text-lg md:text-xl opacity-80 font-secondary text-balance'>
            Have a tool that feels heavier than the work it&apos;s supposed to help?
            We&apos;ll find the smallest, clearest next step together.
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
        </div>
      </div>
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
