// app/layout.tsx
import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
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
    images: [
      { url: '/og.jpg', width: 1200, height: 630, alt: 'Vitura Studio' },
    ],
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
  // ► Discord embed color (reads OG + this theme color)
  // Use a brand hex; Discord likes this for the left bar in embeds
  themeColor: '#111827', // e.g., Tailwind slate-900-ish

  // ► Facebook-specific (optional but useful for Insights/Debuggers)
  // Next.js doesn't have first-class fields for these, so put them in `other`.
  other: {
    // Replace with your real App ID if you have a FB app; otherwise remove it.
    // 'fb:app_id': 'YOUR_FACEBOOK_APP_ID',
    // (Optional) If you have Facebook page admins, you can add:
    // 'fb:admins': '1234567890',
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
