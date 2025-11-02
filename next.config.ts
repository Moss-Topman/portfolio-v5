/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all for now; restrict later
      },
    ],
    quality: [100], // Add this to support quality=100 in <Image />
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

module.exports = nextConfig;