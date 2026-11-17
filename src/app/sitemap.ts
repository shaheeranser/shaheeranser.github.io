import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { profile } from "@/lib/content";

export const dynamic = "force-static";

const base = profile.site;

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
