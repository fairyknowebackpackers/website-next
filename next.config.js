/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website-next' : '',
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Add case sensitive routing to false to handle case mismatches
  experimental: {
    caseSensitiveRoutes: false,
  },
}

module.exports = nextConfig