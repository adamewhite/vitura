// app/our-story/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Users,
  Heart,
  Wand2,
  Layers,
  Gauge,
  Beaker,
} from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '../styles/Reveal';
import QuoteBand from '../components/QuoteBand';
import CTABand from '../components/CTABand';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Strategy, design, and engineering for data-rich products and content experiences.',
};

export default function OurStoryPage() {
  return (
    <main className='bg-paper text-navy font-primary'>
      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24'>
          <Reveal variant='up'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              Vol. III — Our Story
            </div>
          </Reveal>
          <Reveal variant='up' delay={0.1}>
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              We started Vitura because the software was{' '}
              <em className='text-indigo'>built for itself</em> — not for the
              people who had to use it.
            </h1>
          </Reveal>

          <Reveal variant='up' delay={0.3} className='mt-16 md:mt-20'>
            <div className='relative aspect-[4/3] border border-rule overflow-hidden'>
              <Image
                src='/ed-clark-contemporary.webp'
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

      {/* ORIGIN */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <Reveal variant='up' className='lg:col-span-5'>
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                I. Why we exist
              </div>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Tools that fight you.
              </h2>
            </Reveal>

            <Reveal variant='up' delay={0.15} className='lg:col-span-7 lg:col-start-6'>
              <div className='space-y-6 text-lg leading-[1.7] text-navy'>
                <p>
                  We&apos;ve led teams inside orgs where critical work happened
                  in a maze of tabs, inscrutable settings, and dashboards that
                  tried to show everything at once — and told us nothing.
                  Features shipped because they were possible, not because
                  anyone needed them.
                </p>
                <p>
                  Time and again we watched tools ignore fundamentals:
                  <em className='text-indigo'>
                    {' '}
                    no progressive disclosure, no research with actual users,
                    fragile workflows
                  </em>{' '}
                  — and &ldquo;templates&rdquo; that multiplied complexity. People did the
                  real design work by inventing workarounds in spreadsheets,
                  sticky notes, and long email threads.
                </p>
                <p>
                  Vitura is our answer: a studio that puts{' '}
                  <strong>clarity</strong>, <strong>context</strong>, and{' '}
                  <strong>care</strong> back into digital tools so teams can do
                  their best work without fighting the interface.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant='up' delay={0.1} className='mt-20'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-8'>
              What we kept seeing
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8'>
              {[
                'Endless settings, unclear defaults',
                'No progressive disclosure — everything exposed at once',
                'Zero research with the people who actually use the product',
                'KPIs without meaning; dashboards without decisions',
                'Every team forced into the same rigid workflow',
                'Accessibility and performance as afterthoughts',
              ].map((item) => (
                <li
                  key={item}
                  className='border-t border-rule py-6 text-base font-primary leading-[1.7]'
                >
                  — {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL FIGURE */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-end'>
              <div className='md:col-span-5'>
                <div className='relative aspect-[4/5] border border-rule overflow-hidden'>
                  <Image
                    src='/richter.jpg'
                    alt=''
                    fill
                    sizes='(min-width: 768px) 40vw, 100vw'
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='md:col-span-6 md:col-start-7'>
                <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-4'>
                  Our posture
                </div>
                <p className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                  Design like a curator, not an inventor.{' '}
                  <em className='text-indigo'>
                    What is here? What is missing? What should remain?
                  </em>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                II.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                What we believe
              </h2>
            </div>
          </Reveal>

          <Reveal variant='up' delay={0.15}>
            <p className='max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20 text-blue'>
              Our principles guide every decision, from research to delivery.
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'
          >
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <article className='border-t border-rule pt-8 pb-12 h-full'>
                  <div className='flex items-center gap-3 text-blue'>
                    <p.icon className='h-4 w-4' />
                    <h3 className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                      {p.title}
                    </h3>
                  </div>
                  <p className='mt-5 text-base leading-[1.7] text-navy'>
                    {p.desc}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <QuoteBand
        image='/ed-clark-bomb.jpg'
        quote='We design for the people doing the work — not the software that is supposed to help them.'
      />

      {/* APPROACH */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <Reveal variant='up' className='lg:col-span-5'>
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                III. Approach
              </div>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Turning frustration into focus.
              </h2>
              <p className='mt-8 max-w-md text-xl italic leading-relaxed text-blue'>
                We practice progressive disclosure by default: surface the next
                best action, hide the rest until it&apos;s relevant. Then we
                test it with the people who will actually use it.
              </p>
            </Reveal>

            <RevealGroup
              stagger={0.1}
              delay={0.15}
              className='lg:col-span-7 lg:col-start-7'
            >
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
                  'Accessible, fast, documented — so teams can own it.',
                ],
              ].map(([title, desc]) => (
                <RevealItem key={title}>
                  <div className='border-t border-rule py-6'>
                    <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                      {title}
                    </div>
                    <p className='mt-3 text-base leading-[1.7] text-navy'>
                      {desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-32'>
          <Reveal variant='up'>
            <div className='flex items-baseline gap-6 mb-16'>
              <span className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                IV.
              </span>
              <h2 className='text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight'>
                Milestones
              </h2>
            </div>
          </Reveal>
          <RevealGroup stagger={0.12}>
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
                'Short discovery sprints, measurable releases, and design systems teams can extend — without vendor lock-in.',
              ],
            ].map(([title, desc]) => (
              <RevealItem key={title}>
                <div className='border-t border-rule py-8'>
                  <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
                    {title}
                  </div>
                  <p className='mt-4 text-xl leading-[1.6] text-navy'>
                    {desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        title="Let's design for people, not just for platforms."
        body="Have a tool that feels heavier than the work it's supposed to help? We'll find the smallest, clearest next step together."
        cta='Get in touch'
        href='/contact'
      />
    </main>
  );
}

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
    desc: 'Hypotheses, experiments, and instrumentation — so choices are explainable and repeatable.',
  },
];
