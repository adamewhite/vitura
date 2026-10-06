// app/games/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { Reveal, RevealGroup, RevealItem } from '../styles/Reveal';

export const metadata: Metadata = {
  title: 'Games',
  description:
    'Daily puzzles and playful experiments built by the studio — word games, number games, and quieter things.',
  // Client-only page: reachable by direct link, kept out of search results.
  robots: { index: false, follow: false },
};

export default function GamesPage() {
  return (
    <main className='bg-paper text-navy font-primary'>
      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24'>
          <Reveal variant='up'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              Vol. V — Games
            </div>
          </Reveal>
          <Reveal variant='up' delay={0.1}>
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              Games, made <em className='text-indigo'>daily</em>.
            </h1>
          </Reveal>
          <Reveal variant='up' delay={0.25}>
            <p className='mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed text-blue'>
              Puzzles and playful experiments from the studio — most of them
              new every day, all of them free to play.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GAMES */}
      <section>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <RevealGroup
            stagger={0.1}
            className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20'
          >
            {games.map((g, i) => (
              <RevealItem key={g.title}>
                <article className='border-t border-rule pt-8 h-full flex flex-col'>
                  <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                    No. {String(i + 1).padStart(2, '0')}
                  </div>
                  <a
                    href={g.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group block'
                  >
                    <div className='relative aspect-[1200/630] border border-rule overflow-hidden'>
                      <Image
                        src={g.image}
                        alt={`${g.title} — preview`}
                        fill
                        sizes='(min-width: 768px) 50vw, 100vw'
                        className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]'
                      />
                    </div>
                    <h2 className='mt-6 text-2xl md:text-3xl font-normal leading-snug group-hover:text-indigo transition-colors'>
                      {g.title}
                    </h2>
                  </a>
                  <p className='mt-4 text-base leading-[1.7] text-navy'>
                    {g.desc}
                  </p>
                  <a
                    href={g.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-block self-start text-base border-b border-navy pb-1 transition-opacity hover:opacity-70 text-navy'
                  >
                    Play →
                  </a>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </main>
  );
}

/* ---- content ---- */

const games = [
  {
    title: 'Oroboro',
    href: 'https://playoroboro.com',
    image: '/games/oroboro.png',
    desc: 'A game of circular logic. Solve overlapping word clues arranged in a circle. New puzzle every day.',
  },
  {
    title: 'Heatspell',
    href: 'https://playheatspell.com',
    image: '/games/heatspell.png',
    desc: 'A daily word game of hot and cold. Read the heat-ribbon: it thins and burns red as each letter closes in on the answer.',
  },
  {
    title: 'VWL DRP',
    href: 'https://vwldrp.com',
    image: '/games/vwldrp.png',
    desc: 'A daily word puzzle with the vowels dropped. Work out what went missing.',
  },
  {
    title: 'Zumma',
    href: 'https://playzumma.com',
    image: '/games/zumma.png',
    desc: 'A daily arithmetic puzzle. Spend your numbers, use every operator, and land exactly on the goal.',
  },
  {
    title: 'Atlasso',
    href: 'https://atlasso.vercel.app',
    image: '/games/atlasso.png',
    desc: "The daily balance puzzle. Place countries, cities, and regions on two pans until they weigh the same by the day's metric.",
  },
  {
    title: 'Chromos',
    href: 'https://chromos-iota.vercel.app',
    image: '/games/chromos.png',
    desc: 'A relaxing touch game. One color, no rush.',
  },
];
