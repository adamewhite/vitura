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
};

export default nextConfig;
