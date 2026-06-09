// app/styles/sample/page.tsx
// A mockup of the Vitura landing page rendered with the /styles design tokens.
// All colors and fonts read from ./tokens — edit those to update this page.
import type { Metadata } from 'next';
import Image from 'next/image';
import { colors, fontStacks, serif, sans } from '../tokens';
import { Reveal, RevealGroup, RevealItem } from '../Reveal';

export const metadata: Metadata = {
  title: 'Style Guide — Sample Landing',
  description:
    'A mockup of the Vitura landing page using the /styles design system.',
};

const services = [
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
    desc: 'Next.js, React, Tailwind, and modern stacks — fast, maintainable, and SEO-ready.',
  },
  {
    title: 'Content Systems',
    desc: 'Design systems, CMS builds, and component libraries for scalable storytelling.',
  },
  {
    title: 'Research & Audits',
    desc: 'User research, heuristics, and technical audits to find leverage before you ship.',
  },
];

const process: Array<[string, string]> = [
  ['Discover', 'Align on goals, audiences, and constraints with lightweight research.'],
  ['Define', 'Plan the smallest valuable release and the metrics that prove it.'],
  ['Design', 'Prototype flows, content, and UI; test quickly and iterate.'],
  ['Deliver', 'Ship production-ready code and handoff docs your team can own.'],
];

export default function SampleLandingPage() {
  return (
    <main
      className={`${serif.variable} ${sans.variable} min-h-screen`}
      style={{
        fontFamily: fontStacks.serif,
        backgroundColor: colors.paper,
        color: colors.navy,
      }}
    >
      {/* SAMPLE BANNER */}
      <div
        className="border-b"
        style={{
          fontFamily: fontStacks.sans,
          backgroundColor: colors.mist,
          borderColor: colors.rule,
          color: colors.blue,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-3 flex flex-wrap items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.28em]">
          <span>Sample — Landing page mockup</span>
          <a href="/styles" className="hover:opacity-70" style={{ color: colors.teal }}>
            ← Back to Style Guide
          </a>
        </div>
      </div>

      {/* SITE HEADER */}
      <header className="border-b" style={{ borderColor: colors.rule }}>
        <div
          className="mx-auto max-w-6xl px-6 md:px-10 py-6 flex items-center justify-between gap-8"
          style={{ fontFamily: fontStacks.sans }}
        >
          <a href="/styles/sample" aria-label="Vitura — home" className="block">
            <Image
              src="/vitura.svg"
              alt="Vitura"
              width={350}
              height={91}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.28em]">
            <a href="#services" style={{ color: colors.navy }}>Services</a>
            <a href="#process" style={{ color: colors.navy }}>Process</a>
            <a href="#story" style={{ color: colors.navy }}>Our Story</a>
            <a href="#contact" style={{ color: colors.navy }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b" style={{ borderColor: colors.rule }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-32">
          <Reveal variant="up" duration={0.7}>
            <div
              className="text-[11px] uppercase tracking-[0.28em] mb-10"
              style={{ fontFamily: fontStacks.sans, color: colors.blue }}
            >
              Vol. I — A studio based in New York
            </div>
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl">
              We are a studio for{' '}
              <em style={{ color: colors.indigo }}>digital transformation</em>,{' '}
              <em style={{ color: colors.indigo }}>data strategy</em>, and{' '}
              <em style={{ color: colors.indigo }}>human-centered design</em>.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={0.25}>
            <p
              className="mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed"
              style={{ color: colors.blue }}
            >
              Clean pipelines, clear decisions, and human-centered products for
              teams that take their craft seriously.
            </p>
          </Reveal>

          {/* HERO MEDIA + META */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <Reveal variant="up" delay={0.1} className="lg:col-span-8">
              <figure>
                <div
                  className="relative aspect-[3/2] border overflow-hidden"
                  style={{ borderColor: colors.rule }}
                >
                  <Image
                    src="/ed-clark-hauser.jpg"
                    alt="Ed Clark, abstract sweep — hero composition"
                    fill
                    priority
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>

            <RevealGroup
              stagger={0.12}
              delay={0.2}
              className="lg:col-span-4 space-y-8"
            >
              {[
                ['Established', '2018, New York'],
                ['Practice', 'Strategy · Design · Data · Engineering'],
                ['Clients', 'Media, finance, civic, education'],
              ].map(([k, v]) => (
                <RevealItem key={k}>
                  <div
                    className="border-t pt-4"
                    style={{ borderColor: colors.rule, fontFamily: fontStacks.sans }}
                  >
                    <div
                      className="text-[11px] uppercase tracking-[0.22em]"
                      style={{ color: colors.blue }}
                    >
                      {k}
                    </div>
                    <div
                      className="mt-2 text-lg"
                      style={{ fontFamily: fontStacks.serif, color: colors.navy }}
                    >
                      {v}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b" style={{ borderColor: colors.rule }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32">
          <Reveal variant="up">
            <div className="flex items-baseline gap-6 mb-16">
              <span
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ fontFamily: fontStacks.sans, color: colors.blue }}
              >
                I.
              </span>
              <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight">
                What we do
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.15}>
            <p
              className="max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20"
              style={{ color: colors.blue }}
            >
              Strategy, design, and engineering for data-rich products and
              content experiences.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <figure className="md:col-span-5">
                <div
                  className="relative aspect-[4/5] border overflow-hidden"
                  style={{ borderColor: colors.rule }}
                >
                  <Image
                    src="/ed-clark-phillips.jpg"
                    alt="Ed Clark at Phillips — color field study"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="md:col-span-6 md:col-start-7">
                <div
                  className="text-[11px] uppercase tracking-[0.28em] mb-4"
                  style={{ fontFamily: fontStacks.sans, color: colors.blue }}
                >
                  On craft
                </div>
                <p
                  className="text-2xl md:text-3xl font-normal leading-snug"
                  style={{ color: colors.navy }}
                >
                  Each engagement begins with the same questions a curator
                  asks: <em style={{ color: colors.indigo }}>What is here? What
                  is missing? What should remain?</em>
                </p>
              </div>
            </div>
          </Reveal>

          <RevealGroup
            stagger={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => (
              <RevealItem key={s.title}>
                <article
                  className="border-t pt-8 pb-12 pr-8 h-full"
                  style={{
                    borderColor: colors.rule,
                    borderLeft: i % 3 === 0 ? 'none' : `1px solid ${colors.rule}`,
                    paddingLeft: i % 3 === 0 ? 0 : '2rem',
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-normal leading-snug">
                    {s.title}
                  </h3>
                  <p
                    className="mt-5 text-base leading-[1.7]"
                    style={{ color: colors.navy }}
                  >
                    {s.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-block text-base border-b pb-1 transition-colors hover:opacity-70"
                    style={{
                      fontFamily: fontStacks.serif,
                      borderColor: colors.navy,
                      color: colors.navy,
                    }}
                  >
                    Learn more →
                  </a>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ORNAMENT BREAK */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <div className="flex items-center gap-6" style={{ color: colors.blue }}>
          <span className="h-px flex-1" style={{ backgroundColor: colors.rule }} />
          <span className="text-2xl">§</span>
          <span className="h-px flex-1" style={{ backgroundColor: colors.rule }} />
        </div>
      </div>

      {/* PROCESS */}
      <section id="process" className="border-b" style={{ borderColor: colors.rule }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32">
          <Reveal variant="up">
            <div className="flex items-baseline gap-6 mb-16">
              <span
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ fontFamily: fontStacks.sans, color: colors.blue }}
              >
                II.
              </span>
              <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight">
                How we work
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.15}>
            <p
              className="max-w-2xl text-xl md:text-2xl italic leading-relaxed mb-20"
              style={{ color: colors.blue }}
            >
              A process designed to move fast, reduce risk, and deliver
              measurable impact.
            </p>
          </Reveal>

          <RevealGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {process.map(([title, desc], i) => (
              <RevealItem key={title}>
                <div
                  className="border-t pt-8 pb-2 pr-8 h-full"
                  style={{
                    borderColor: colors.rule,
                    borderLeft: i === 0 ? 'none' : `1px solid ${colors.rule}`,
                    paddingLeft: i === 0 ? 0 : '2rem',
                  }}
                >
                  <div
                    className="text-[11px] uppercase tracking-[0.28em] mb-6"
                    style={{ fontFamily: fontStacks.sans, color: colors.blue }}
                  >
                    Step {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    className="text-3xl font-normal mb-4"
                    style={{ color: colors.indigo }}
                  >
                    {title}
                  </h3>
                  <p className="text-base leading-[1.7]" style={{ color: colors.navy }}>
                    {desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section
        className="relative border-b overflow-hidden"
        style={{ borderColor: colors.navy, backgroundColor: colors.navy }}
      >
        <Image
          src="/ed-clark-sotheby-1.jpeg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${colors.navy}d9, ${colors.navy}b3 50%, ${colors.navy}d9)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center">
          <Reveal variant="fade" duration={1.2} amount={0.4}>
            <span
              className="text-2xl"
              style={{ color: colors.teal, fontFamily: fontStacks.serif }}
            >
              ❝
            </span>
            <blockquote
              className="mt-6 text-3xl md:text-5xl font-normal leading-[1.15] tracking-tight italic"
              style={{ color: colors.paper }}
            >
              We treat every data product like an editorial object —
              built with intention, restraint, and craft.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal variant="left" className="lg:col-span-5">
              <div
                className="text-[11px] uppercase tracking-[0.28em] mb-6"
                style={{ fontFamily: fontStacks.sans, color: colors.blue }}
              >
                III. Correspondence
              </div>
              <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight">
                Let’s talk.
              </h2>
              <p
                className="mt-8 max-w-md text-xl italic leading-relaxed"
                style={{ color: colors.blue }}
              >
                Tell us about your team, timelines, and what success looks like.
              </p>

              <figure className="mt-12">
                <div
                  className="relative aspect-square border overflow-hidden max-w-sm"
                  style={{ borderColor: colors.rule }}
                >
                  <Image
                    src="/robertmotherwellorange.jpg"
                    alt="Robert Motherwell — Orange"
                    fill
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-cover"
                  />
                </div>
              </figure>

              <div
                className="mt-12 space-y-6 text-base"
                style={{ fontFamily: fontStacks.sans }}
              >
                <div>
                  <div
                    className="text-[11px] uppercase tracking-[0.22em]"
                    style={{ color: colors.blue }}
                  >
                    Inquiries
                  </div>
                  <div className="mt-2" style={{ fontFamily: fontStacks.serif }}>
                    hello@vitura.studio
                  </div>
                </div>
              </div>
            </Reveal>

            <RevealGroup
              stagger={0.08}
              delay={0.15}
              className="lg:col-span-7 lg:col-start-7"
            >
              <form className="space-y-8" action="#">
                {[
                  { label: 'Name', type: 'text' },
                  { label: 'Email', type: 'email' },
                  { label: 'Company', type: 'text' },
                ].map((f) => (
                  <RevealItem key={f.label}>
                    <div>
                      <label
                        className="block text-[11px] uppercase tracking-[0.22em] mb-3"
                        style={{ fontFamily: fontStacks.sans, color: colors.blue }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        className="w-full bg-transparent border-b py-3 outline-none text-base focus:border-current"
                        style={{
                          fontFamily: fontStacks.serif,
                          borderColor: colors.rule,
                          color: colors.navy,
                        }}
                      />
                    </div>
                  </RevealItem>
                ))}
                <RevealItem>
                  <div>
                    <label
                      className="block text-[11px] uppercase tracking-[0.22em] mb-3"
                      style={{ fontFamily: fontStacks.sans, color: colors.blue }}
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b py-3 outline-none text-base resize-none"
                      style={{
                        fontFamily: fontStacks.serif,
                        borderColor: colors.rule,
                        color: colors.navy,
                      }}
                    />
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="text-[11px] uppercase tracking-[0.28em] px-8 py-4 transition-opacity hover:opacity-90"
                      style={{
                        fontFamily: fontStacks.sans,
                        backgroundColor: colors.navy,
                        color: colors.paper,
                      }}
                    >
                      Send message
                    </button>
                  </div>
                </RevealItem>
              </form>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* COLOPHON FOOTER */}
      <footer
        className="border-t"
        style={{ borderColor: colors.rule, fontFamily: fontStacks.sans }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
          <Image
            src="/vitura.svg"
            alt="Vitura"
            width={350}
            height={91}
            className="h-10 md:h-12 w-auto opacity-60"
          />
          <div
            className="mt-10 pt-6 border-t flex flex-wrap items-baseline justify-between gap-6 text-[11px] uppercase tracking-[0.28em]"
            style={{ borderColor: colors.rule }}
          >
            <div style={{ color: colors.blue }}>© 2026 Vitura Studio</div>
            <div style={{ color: colors.blue }}>Set in Zilla Slab & Inter</div>
            <a
              href="/styles"
              style={{ color: colors.teal }}
              className="hover:opacity-70"
            >
              View style guide ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
