import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: 'https://portfolio-v5-b0wuc9246-moss-topmans-projects.vercel.app/sitemap.xml',
  };
}