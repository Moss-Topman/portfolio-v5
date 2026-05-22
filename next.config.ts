const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 100], // Added 85 to fix the browser quality warning
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self'; script-src 'none'; object-src 'none'; frame-src 'none'",
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);