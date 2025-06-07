/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'],
  },
  // Add case sensitive routing to false to handle case mismatches
  experimental: {
    caseSensitiveRoutes: false,
  },
}

module.exports = nextConfig