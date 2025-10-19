// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { League_Spartan, Libre_Baskerville, Gantari } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';
import HeaderShell from './components/HeaderShell';
import ImagePreloader from './components/ImagePreloader';
import PageLoader from './components/PageLoader';

const secondary = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-secondary', // Add this
});

// const primary = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   style: ['italic', 'normal'],
//   variable: '--font-primary', // Add this
// });

// const primary = Gantari({
//   subsets: ['latin'],
//   variable: '--font-primary', // Add this
// });

const primary = localFont({
  src: [
    {
      path: './fonts/Folio-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FolioLightItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Folio-Medium.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
});

export const viewport: Viewport = {
  // single color…
  // themeColor: '#111827',

  // or adaptive by color scheme:
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${secondary.variable} ${primary.variable}  antialiased`}
      >
        <ImagePreloader />
        <PageLoader>
          <HeaderShell />
          {children}
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}
