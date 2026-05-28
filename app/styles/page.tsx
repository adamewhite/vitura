// app/styles/page.tsx
import type { Metadata } from 'next';
import { colors, palette, typeScale, serif, sans, fontStacks } from './tokens';

export const metadata: Metadata = {
  title: 'Style Guide',
  description:
    'Editorial style guide inspired by bode.com — typography, color, spacing, and components.',
};

export default function StylesPage() {
  return (
    <main
      className={`${serif.variable} ${sans.variable} min-h-screen`}
      style={{
        fontFamily: fontStacks.serif,
        backgroundColor: colors.paper,
        color: colors.navy,
      }}
    >
      {/* MASTHEAD */}
      <header className="border-b" style={{ borderColor: colors.rule }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16">
          <div
            className="text-[11px] uppercase tracking-[0.28em]"
            style={{ fontFamily: fontStacks.sans, color: colors.blue }}
          >
            Vitura — Style Guide
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight">
            <em>An editorial</em> language
            <br />
            of restraint and craft.
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg md:text-xl italic leading-relaxed"
            style={{ color: colors.blue }}
          >
            A reference inspired by bode.com — generous whitespace, archival
            imagery, and a typography system that treats the page like a
            printed object rather than a screen.
          </p>
        </div>
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        className="border-b"
        style={{
          fontFamily: fontStacks.sans,
          borderColor: colors.rule,
          backgroundColor: colors.mist,
        }}
      >
        <div
          className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.22em]"
          style={{ color: colors.navy }}
        >
          <TocLink href="#palette">I. Palette</TocLink>
          <TocLink href="#typography">II. Typography</TocLink>
          <TocLink href="#spacing">III. Spacing</TocLink>
          <TocLink href="#rules">IV. Rules & Dividers</TocLink>
          <TocLink href="#buttons">V. Buttons</TocLink>
          <TocLink href="#forms">VI. Forms</TocLink>
          <TocLink href="#imagery">VII. Imagery</TocLink>
          <TocLink href="#layout">VIII. Layout</TocLink>
          <a
            href="/styles/sample"
            className="ml-auto"
            style={{ color: colors.teal }}
          >
            ↗ View sample landing
          </a>
        </div>
      </nav>

      {/* I. PALETTE */}
      <Section id="palette" numeral="I." title="Palette">
        <p
          className="max-w-2xl text-lg md:text-xl leading-relaxed italic mb-12"
          style={{ color: colors.blue }}
        >
          A cool, paper-stock palette. Four navy-to-teal blues sit on a near-neutral
          off-white. Color is reserved for accent moments and imagery.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {palette.map((c) => (
            <div key={c.name}>
              <div
                className="aspect-[4/5] border"
                style={{ backgroundColor: c.hex, borderColor: colors.rule }}
              />
              <div className="mt-4 text-lg">{c.name}</div>
              <div
                className="mt-1 text-[11px] uppercase tracking-[0.22em]"
                style={{ fontFamily: fontStacks.sans, color: colors.blue }}
              >
                {c.hex}
              </div>
              <div className="mt-2 text-sm italic" style={{ color: colors.blue }}>
                {c.note}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* II. TYPOGRAPHY */}
      <Section id="typography" numeral="II." title="Typography">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          <aside className="space-y-6" style={{ fontFamily: fontStacks.sans }}>
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: colors.blue }}
              >
                Slab Serif — Display & Body
              </div>
              <div className="mt-2 text-2xl" style={{ fontFamily: fontStacks.serif }}>
                Zilla Slab
              </div>
              <div className="mt-1 text-sm" style={{ color: colors.blue }}>
                Used for everything narrative: headlines, captions, body, lede.
              </div>
            </div>
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: colors.blue }}
              >
                Sans — UI & Labels
              </div>
              <div className="mt-2 text-2xl">Inter</div>
              <div className="mt-1 text-sm" style={{ color: colors.blue }}>
                Reserved for navigation, eyebrows, metadata, and form labels.
                Always uppercase with wide tracking at small sizes.
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            {typeScale.map((t) => (
              <div
                key={t.label}
                className="border-t pt-6"
                style={{ borderColor: colors.rule }}
              >
                <div
                  className="text-[11px] uppercase tracking-[0.22em] mb-4"
                  style={{ fontFamily: fontStacks.sans, color: colors.blue }}
                >
                  {t.label}
                </div>
                <div className={t.cls}>{t.sample}</div>
              </div>
            ))}

            <div className="border-t pt-6" style={{ borderColor: colors.rule }}>
              <div
                className="text-[11px] uppercase tracking-[0.22em] mb-4"
                style={{ fontFamily: fontStacks.sans, color: colors.blue }}
              >
                Eyebrow / Nav
              </div>
              <div
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ fontFamily: fontStacks.sans }}
              >
                Strategy · Design · Data · Engineering
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* III. SPACING */}
      <Section id="spacing" numeral="III." title="Spacing & Rhythm">
        <p
          className="max-w-2xl text-lg italic leading-relaxed mb-12"
          style={{ color: colors.blue }}
        >
          Generous, asymmetric whitespace. Sections breathe; columns are narrow
          enough that the reader’s eye stays in the measure.
        </p>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ fontFamily: fontStacks.sans }}
        >
          {[
            { name: 'xs', px: '8px' },
            { name: 'sm', px: '16px' },
            { name: 'md', px: '32px' },
            { name: 'lg', px: '64px' },
            { name: 'xl', px: '96px' },
            { name: '2xl', px: '128px' },
            { name: '3xl', px: '160px' },
            { name: 'section', px: '240px' },
          ].map((s) => (
            <div key={s.name}>
              <div style={{ height: s.px, backgroundColor: colors.navy }} />
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em]">
                {s.name}
              </div>
              <div className="text-xs" style={{ color: colors.blue }}>
                {s.px}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <Tenet
            label="Measure"
            body="Body copy holds at 60–75 characters per line. Lede italic copy may run wider."
          />
          <Tenet
            label="Leading"
            body="Body 1.7. Headlines 1.05–1.15. Captions 1.5."
          />
          <Tenet
            label="Section padding"
            body="Vertical 96–160px on desktop. Horizontal aligns to a 6-column grid at max-w-6xl."
          />
        </div>
      </Section>

      <Divider />

      {/* IV. RULES & DIVIDERS */}
      <Section id="rules" numeral="IV." title="Rules & Dividers">
        <div className="space-y-12">
          <div>
            <Label>Hairline</Label>
            <div className="mt-4 border-t" style={{ borderColor: colors.rule }} />
            <Caption>1px solid {colors.rule} — the default separator between sections.</Caption>
          </div>
          <div>
            <Label>Heavy rule</Label>
            <div className="mt-4 border-t-2" style={{ borderColor: colors.navy }} />
            <Caption>2px solid Navy — used sparingly at chapter breaks.</Caption>
          </div>
          <div>
            <Label>Ornament</Label>
            <div className="mt-4 flex items-center gap-4" style={{ color: colors.blue }}>
              <span className="h-px flex-1" style={{ backgroundColor: colors.rule }} />
              <span className="text-2xl">§</span>
              <span className="h-px flex-1" style={{ backgroundColor: colors.rule }} />
            </div>
            <Caption>Section mark between long-form passages.</Caption>
          </div>
        </div>
      </Section>

      <Divider />

      {/* V. BUTTONS */}
      <Section id="buttons" numeral="V." title="Buttons">
        <p
          className="max-w-2xl text-lg italic leading-relaxed mb-12"
          style={{ color: colors.blue }}
        >
          Buttons are quiet. They sit close to body text in weight and color,
          and lean on an underline or thin border rather than a fill.
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
          <BtnText>Read more →</BtnText>
          <BtnGhost>Get in touch</BtnGhost>
          <BtnSolid>Subscribe</BtnSolid>
          <BtnQuiet>View All</BtnQuiet>
        </div>
      </Section>

      <Divider />

      {/* VI. FORMS */}
      <Section id="forms" numeral="VI." title="Forms">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Label>Newsletter</Label>
            <form
              className="mt-6 flex border-b"
              style={{ borderColor: colors.navy }}
            >
              <input
                type="email"
                placeholder="enter your email"
                aria-label="Email"
                className="flex-1 bg-transparent py-3 outline-none placeholder:italic text-base"
                style={{ fontFamily: fontStacks.serif }}
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.28em] px-4"
                style={{ fontFamily: fontStacks.sans }}
              >
                Submit
              </button>
            </form>
            <Caption>Underline-only field. No fill, no rounded corners.</Caption>
          </div>

          <div>
            <Label>Long form</Label>
            <div className="mt-6 space-y-6">
              <Field label="Name" />
              <Field label="Message" multiline />
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* VII. IMAGERY */}
      <Section id="imagery" numeral="VII." title="Imagery">
        <p
          className="max-w-2xl text-lg italic leading-relaxed mb-12"
          style={{ color: colors.blue }}
        >
          Image proportions favor the tall, archival 4:5. No rounded corners,
          no drop shadows. A thin hairline border is acceptable on light surfaces.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {[
            { caption: 'Detail of a data pipeline diagram, Spring ’26' },
            { caption: 'Dashboard study, financial services' },
            { caption: 'Workshop in progress, Lower Manhattan' },
            { caption: 'Field notes from a discovery sprint' },
          ].map((item, i) => (
            <figure key={i}>
              <div
                className="aspect-[4/5] border flex items-center justify-center"
                style={{
                  backgroundColor: colors.mist,
                  borderColor: colors.rule,
                  color: colors.rule,
                }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.22em]"
                  style={{ fontFamily: fontStacks.sans }}
                >
                  4 : 5
                </span>
              </div>
              <figcaption
                className="mt-3 text-sm italic leading-snug"
                style={{ color: colors.blue }}
              >
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Divider />

      {/* VIII. LAYOUT */}
      <Section id="layout" numeral="VIII." title="Layout">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Label>Editorial block</Label>
            <p className="mt-6 text-base leading-[1.7]">
              The page is a single column at narrow widths and a 12-column grid
              at desktop. Body copy occupies four to six columns; imagery may
              break the grid to bleed full width.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div
              className="aspect-[3/2] border"
              style={{ backgroundColor: colors.mist, borderColor: colors.rule }}
            />
            <Caption>
              A figure spanning columns six through twelve, with a serif italic
              caption below.
            </Caption>
          </div>
        </div>

        <div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-12"
          style={{ borderColor: colors.rule }}
        >
          {[
            ['Pronunciation', 'Vit·u·ra — “vee-too-rah.”'],
            ['Tone', 'Plainspoken. Confident. Never decorated for its own sake.'],
            ['Posture', 'The page is a printed object. Treat the screen like paper.'],
          ].map(([t, d]) => (
            <div key={t}>
              <Label>{t}</Label>
              <p
                className="mt-4 text-base italic leading-relaxed"
                style={{ color: colors.navy }}
              >
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* COLOPHON */}
      <footer
        className="border-t mt-20"
        style={{ borderColor: colors.rule, fontFamily: fontStacks.sans }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-12 flex flex-wrap items-baseline justify-between gap-6">
          <div
            className="text-[11px] uppercase tracking-[0.28em]"
            style={{ color: colors.blue }}
          >
            Colophon
          </div>
          <div
            className="text-sm italic"
            style={{ color: colors.blue, fontFamily: fontStacks.serif }}
          >
            Set in Zilla Slab & Inter. View the{' '}
            <a href="/styles/sample" className="underline" style={{ color: colors.teal }}>
              sample landing
            </a>
            .
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  numeral,
  title,
  children,
}: {
  id: string;
  numeral: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32">
      <div className="flex items-baseline gap-6 mb-12 md:mb-16">
        <span
          className="text-[11px] uppercase tracking-[0.28em]"
          style={{ fontFamily: fontStacks.sans, color: colors.blue }}
        >
          {numeral}
        </span>
        <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="border-t" style={{ borderColor: colors.rule }} />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[11px] uppercase tracking-[0.28em]"
      style={{ fontFamily: fontStacks.sans, color: colors.blue }}
    >
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-sm italic leading-relaxed" style={{ color: colors.blue }}>
      {children}
    </p>
  );
}

function Tenet({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t pt-4" style={{ borderColor: colors.rule }}>
      <Label>{label}</Label>
      <p
        className="mt-3 text-base italic leading-relaxed"
        style={{ color: colors.navy }}
      >
        {body}
      </p>
    </div>
  );
}

function TocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="transition-colors hover:opacity-70" style={{ color: colors.navy }}>
      {children}
    </a>
  );
}

// Button atoms — exported via tokens so sample page can reuse if needed.
function BtnText({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-base border-b pb-1 transition-colors hover:opacity-70"
      style={{
        fontFamily: fontStacks.serif,
        borderColor: colors.navy,
        color: colors.navy,
      }}
    >
      {children}
    </button>
  );
}

function BtnGhost({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-[11px] uppercase tracking-[0.28em] border px-6 py-3 transition-colors hover:opacity-80"
      style={{
        fontFamily: fontStacks.sans,
        borderColor: colors.navy,
        color: colors.navy,
      }}
    >
      {children}
    </button>
  );
}

function BtnSolid({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-[11px] uppercase tracking-[0.28em] px-6 py-3 transition-colors hover:opacity-90"
      style={{
        fontFamily: fontStacks.sans,
        backgroundColor: colors.navy,
        color: colors.paper,
      }}
    >
      {children}
    </button>
  );
}

function BtnQuiet({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-[11px] uppercase tracking-[0.28em] transition-colors hover:opacity-70"
      style={{ fontFamily: fontStacks.sans, color: colors.blue }}
    >
      {children}
    </button>
  );
}

function Field({ label, multiline }: { label: string; multiline?: boolean }) {
  return (
    <div>
      <label
        className="block text-[11px] uppercase tracking-[0.22em] mb-2"
        style={{ fontFamily: fontStacks.sans, color: colors.blue }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={3}
          className="w-full bg-transparent border-b py-2 outline-none text-base resize-none"
          style={{ fontFamily: fontStacks.serif, borderColor: colors.rule }}
        />
      ) : (
        <input
          className="w-full bg-transparent border-b py-2 outline-none text-base"
          style={{ fontFamily: fontStacks.serif, borderColor: colors.rule }}
        />
      )}
    </div>
  );
}
