import type { MetadataRoute } from 'next';

const staticRoutes = ['', '/services', '/our-story', '/contact'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // If you have dynamic content later, fetch it here and push entries.

  return staticRoutes.map((p) => ({
    url: `https://vitura.studio${p}`, // no trailing slash by choice
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.7,
  }));
}
