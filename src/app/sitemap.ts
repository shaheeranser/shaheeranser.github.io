import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";

export const dynamic = "force-static";

const base = "https://shaheeranser.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies.map((project) => ({
      url: `${base}/projects/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
