/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Ensure proper handling of static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website-next' : '',
  // Add output configuration
  output: 'standalone',
}

module.exports = nextConfig 