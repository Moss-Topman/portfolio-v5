module.exports = {
  // Optional: Add if needed for images/optimizations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all for now; restrict later
      },
    ],
  },
};