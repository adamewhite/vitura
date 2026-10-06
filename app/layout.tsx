// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Zilla_Slab, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Footer from './components/Footer';
import HeaderShell from './components/HeaderShell';
import ImagePreloader from './components/ImagePreloader';
import PageLoader from './components/PageLoader';

// Primary (serif) — Zilla Slab. Used for headings, body, lede, captions.
const primary = Zilla_Slab({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Secondary (sans) — Inter. Reserved for nav, eyebrows, labels, buttons.
const secondary = Inter({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f1f5' },
    { media: '(prefers-color-scheme: dark)', color: '#121358' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vitura.studio'),
  // Canonicals are set per page — a root canonical is inherited by every route.

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

  // OpenGraph (used by LinkedIn/FB, and helpful for Google too)
  openGraph: {
    type: 'website',
    url: 'https://vitura.studio',
    title: 'Vitura Studio — Digital Strategy, Data & Design',
    description:
      'Clean pipelines, clear decisions, and human-centered products.',
    siteName: 'Vitura',
    images: [
      { url: '/og.jpg', width: 1200, height: 630, alt: 'Vitura Studio' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitura Studio — Digital Strategy, Data & Design',
    description:
      'Clean pipelines, clear decisions, and human-centered products.',
    images: ['/og.jpg'],
  },

  // Search Console / Bing Webmaster Tools ownership tags (set in Vercel env).
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vitura Studio',
  url: 'https://vitura.studio',
  logo: 'https://vitura.studio/icon.png',
  description:
    'Digital transformation, data strategy, and human-centered design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${secondary.variable} ${primary.variable} antialiased`}
      >
        <ImagePreloader />
        <PageLoader>
          <HeaderShell />
          {children}
          <Footer />
        </PageLoader>
        <Analytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
