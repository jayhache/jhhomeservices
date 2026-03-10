"use client";

import { usePathname } from "next/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.johnhenryhomeservices.com";

const segmentLabels: Record<string, string> = {
  services: "Services",
  areas: "Service areas",
  articles: "Articles",
  about: "About",
  contact: "Contact",
  "interior-painting": "Interior painting",
  "exterior-painting": "Exterior painting",
  "small-remodeling-projects": "Small remodeling",
  "trim-and-door-carpentry": "Trim & door carpentry",
  "landscaping-and-gardening": "Landscaping & gardening",
  "gutter-cleaning": "Gutter cleaning",
  "drywall-repairs": "Drywall repairs",
  "furniture-assembly-tv-mounting": "Furniture assembly & TV mounting",
  "door-adjustments-hardware": "Door repairs & hardware",
  "shelving-blinds-picture-hanging": "Shelving, blinds & picture hanging",
  "storm-doors-screens-seasonal": "Storm doors, screens & seasonal",
  somerville: "Somerville, MA",
  medford: "Medford, MA",
  cambridge: "Cambridge, MA",
  belmont: "Belmont, MA",
  malden: "Malden, MA",
  burlington: "Burlington, MA",
  boston: "Boston, MA",
  "spring-home-maintenance-checklist-massachusetts": "Spring maintenance checklist",
  "prepare-exterior-for-paint-after-new-england-winter": "Exterior paint prep",
  "gutter-cleaning-before-spring-rains-boston-area": "Gutter cleaning",
  "get-yard-ready-for-spring-somerville-cambridge": "Yard ready for spring",
  "when-to-repaint-interior-walls-vs-touch-up": "Repaint vs. touch up",
  "drywall-repair-before-painting-patch-vs-replace": "Drywall patch vs. replace",
  "seasonal-home-maintenance-calendar-massachusetts": "Seasonal calendar",
  "furniture-assembly-tv-mounting-somerville-cambridge": "Furniture & TV mounting",
  "door-fixes-picture-hanging-somerville-cambridge": "Door fixes & picture hanging",
};

function slugToLabel(slug: string): string {
  return segmentLabels[slug] || slug.replace(/-/g, " ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ label: "Home", href: "/" }];
  let href = "";
  for (let i = 0; i < segments.length; i++) {
    href += `/${segments[i]}`;
    items.push({
      label: slugToLabel(segments[i]),
      href,
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span className="font-medium text-slate-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="hover:text-slate-900 hover:underline">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
