import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://useatlasdemand.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/trend-following-strategy`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/trend-rider`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/trend-rider-v2`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Anchor links are not standard; search engines generally ignore them,
    // but if you want to keep them:
    {
      url: `${baseUrl}/#expertise`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}