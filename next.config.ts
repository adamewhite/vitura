/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:path+/', destination: '/:path+', permanent: true },
      // add any content redirects here, using path-only sources
      // { source: '/about-us', destination: '/about', permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Both rules are required: `/rumford/:path*` alone does not match the
      // bare `/rumford`.
      {
        source: '/rumford',
        destination: 'https://rumford.vercel.app',
      },
      {
        source: '/rumford/:path*',
        destination: 'https://rumford.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
