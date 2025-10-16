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
  title: 'Vitura Studio',
  description:
    'Digital transformation, data strategy, and human-centered design.',
  metadataBase: new URL('https://vitura.studio'),
  alternates: { canonical: '/' }, // pages can override if needed
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
