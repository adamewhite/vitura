import type { NextConfig } from 'next';

const nextConfig = {
  // You prefer no trailing slash
  trailingSlash: false,

  async redirects() {
    return [
      // Redirect any "/index.html" to "/"
      { source: '/index.html', destination: '/', permanent: true },

      // Redirect any path that ends with a slash (except the root) to the non-slashed version
      // Note: Next.js patterns aren't regex, so handle common depths explicitly
      { source: '/:path+/', destination: '/:path+', permanent: true },
      // future: { source: '/old-slug', destination: '/new-slug', permanent: true },
    ];
  },
};

module.exports = nextConfig;
