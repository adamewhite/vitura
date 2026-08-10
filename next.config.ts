/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:path+/', destination: '/:path+', permanent: true },
      // add any content redirects here, using path-only sources
      // { source: '/about-us', destination: '/about', permanent: true },

      // The Rumford app briefly lived here behind a rewrite. It now serves
      // itself at rumford.vitura.studio, which sidesteps the proxy's one real
      // limitation: next/image URLs stay relative, so they resolved against
      // this app's optimizer, which has no copy of those files. Redirecting
      // rather than dropping the route keeps any published /rumford link alive.
      {
        source: '/rumford',
        destination: 'https://rumford.vitura.studio',
        permanent: true,
      },
      {
        source: '/rumford/:path*',
        destination: 'https://rumford.vitura.studio/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
