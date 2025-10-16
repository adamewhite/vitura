import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const host = process.env.VERCEL_URL?.toLowerCase() || 'vitura.studio';
  const isPreview = host.endsWith('.vercel.app');

  return isPreview
    ? { rules: [{ userAgent: '*', disallow: '/' }] } // block previews
    : {
        rules: { userAgent: '*', allow: '/' },
        sitemap: 'https://vitura.studio/sitemap.xml',
        host: 'https://vitura.studio',
      };
}
