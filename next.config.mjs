/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/hot-water-systems', destination: '/hot-water-system-repairs-and-replacement/', permanent: true },
      { source: '/blocked-drains-and-toilets', destination: '/services/', permanent: true },
      { source: '/bathroom-and-kitchen-plumbing', destination: '/outdoor-showers-and-taps/', permanent: true },
      { source: '/stormwater-and-pump-services', destination: '/services/', permanent: true },
      { source: '/roof-plumbing-and-leak-inspections', destination: '/leak-detection-and-repairs/', permanent: true },
      { source: '/pre-purchase-plumbing-inspections', destination: '/services/', permanent: true },
      { source: '/hot-water-system-stopped-working', destination: '/plumbing-advice/hot-water-system-leak-or-failure/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
