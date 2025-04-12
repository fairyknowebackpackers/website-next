/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
  // Ensure proper handling of static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Add output configuration
  output: 'standalone',
}

module.exports = nextConfig 