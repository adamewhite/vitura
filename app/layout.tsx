// app/layout.tsx
import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import './globals.css';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';

const primary = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vitura.studio'),
  alternates: { canonical: '/' }, // pages can override if needed

  title: {
    default: 'Vitura Studio — Digital Strategy, Data & Design',
    template: '%s — Vitura',
  },
  description:
    'Digital transformation, data strategy, and human-centered design.',
  keywords: [
    'digital strategy',
    'data products',
    'dashboards',
    'UX',
    'Next.js',
    'design systems',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  // OpenGraph (used by LinkedIn/FB, and helpful for Google too)
  openGraph: {
    type: 'website',
    url: 'https://vitura.studio',
    title: 'Vitura Studio — Digital Strategy, Data & Design',
    description:
      'Clean pipelines, clear decisions, and human-centered products.',
    siteName: 'Vitura',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Vitura' }],
  },

  // Twitter (X) cards
  twitter: {
    card: 'summary_large_image',
    site: '@yourhandle', // optional
    creator: '@yourhandle', // optional
    title: 'Vitura Studio — Digital Strategy, Data & Design',
    description:
      'Clean pipelines, clear decisions, and human-centered products.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${primary.className} bg-rose-100 text-neutral-900 antialiased`}
      >
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
