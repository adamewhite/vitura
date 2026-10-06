import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // VERCEL_URL is always *.vercel.app (even in production), so key off VERCEL_ENV.
  const isProduction = process.env.VERCEL_ENV === 'production';

  return isProduction
    ? {
        rules: { userAgent: '*', allow: '/' },
        sitemap: 'https://vitura.studio/sitemap.xml',
        host: 'https://vitura.studio',
      }
    : { rules: [{ userAgent: '*', disallow: '/' }] }; // block previews
}
