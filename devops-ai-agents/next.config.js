/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  redirects: async () => [
    {
      source: '/index',
      destination: '/',
      permanent: true,
    },
  ],
  images: {
    domains: ['vercel.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
