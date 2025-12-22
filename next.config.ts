/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
  // Your existing config
  sentry: { hideSourceMaps: true }
});