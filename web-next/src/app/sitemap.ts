import type { MetadataRoute } from "next";
import { getAllCourseParams, categoryLabels } from "@/lib/courses";

const BASE_URL = "https://www.placeonix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/internships`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(
    categoryLabels,
  ).map((category) => ({
    url: `${BASE_URL}/courses/${category}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = getAllCourseParams().map(
    ({ category, slug }) => ({
      url: `${BASE_URL}/courses/${category}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticRoutes, ...categoryRoutes, ...courseRoutes];
}
