import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.johnhenryhomeservices.com";

const serviceSlugs = [
  "interior-painting",
  "exterior-painting",
  "small-remodeling-projects",
  "trim-and-door-carpentry",
  "landscaping-and-gardening",
  "gutter-cleaning",
  "drywall-repairs",
  "furniture-assembly-tv-mounting",
  "door-adjustments-hardware",
  "shelving-blinds-picture-hanging",
  "storm-doors-screens-seasonal",
];

const areaSlugs = [
  "somerville",
  "medford",
  "cambridge",
  "belmont",
  "malden",
  "burlington",
  "boston",
];

const articleSlugs = [
  "spring-home-maintenance-checklist-massachusetts",
  "prepare-exterior-for-paint-after-new-england-winter",
  "gutter-cleaning-before-spring-rains-boston-area",
  "get-yard-ready-for-spring-somerville-cambridge",
  "when-to-repaint-interior-walls-vs-touch-up",
  "drywall-repair-before-painting-patch-vs-replace",
  "seasonal-home-maintenance-calendar-massachusetts",
  "furniture-assembly-tv-mounting-somerville-cambridge",
  "door-fixes-picture-hanging-somerville-cambridge",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...articlePages];
}
