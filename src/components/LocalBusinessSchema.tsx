export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.johnhenryhomeservices.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "John Henry Home Services LLC",
  description:
    "Fully insured handyman, interior and exterior painting, small remodeling, trim and door carpentry, landscaping, gutter cleaning, and drywall repairs in Somerville, Medford, Cambridge and nearby Massachusetts towns.",
  url: siteUrl,
  telephone: "+16178637629",
  email: "johnhenry@johnhenryhomeservices.com",
  areaServed: [
    { "@type": "City", name: "Somerville", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Medford", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Cambridge", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Belmont", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Malden", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Burlington", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    { "@type": "City", name: "Boston", containedInPlace: { "@type": "State", name: "Massachusetts" } },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
