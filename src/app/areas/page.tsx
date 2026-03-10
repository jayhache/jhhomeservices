import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Service Areas | Somerville, Medford, Cambridge, Boston MA",
  description:
    "Handyman, painting, carpentry and small projects in Somerville, Medford, Cambridge, Belmont, Malden, Burlington, Boston and nearby Massachusetts towns.",
};

const areas = [
  {
    slug: "somerville",
    name: "Somerville, MA",
    href: "/areas/somerville",
    blurb:
      "Interior and exterior painting, handyman projects, small remodeling work, landscaping and gutter cleaning for Somerville homeowners and landlords."
  },
  {
    slug: "medford",
    name: "Medford, MA",
    href: "/areas/medford",
    blurb:
      "Painting, carpentry and general handyman services for Medford houses, condos and multi‑families."
  },
  {
    slug: "cambridge",
    name: "Cambridge, MA",
    href: "/areas/cambridge",
    blurb:
      "Careful work in older Cambridge homes and condos, including interior painting, trim, and small projects."
  },
  {
    slug: "belmont",
    name: "Belmont, MA",
    href: "/areas/belmont",
    blurb:
      "Selective handyman, painting and maintenance work in Belmont based on schedule and project fit."
  },
  {
    slug: "malden",
    name: "Malden, MA",
    href: "/areas/malden",
    blurb:
      "Handyman and painting services for Malden homeowners, especially smaller projects and maintenance work."
  },
  {
    slug: "burlington",
    name: "Burlington, MA",
    href: "/areas/burlington",
    blurb:
      "Interior and exterior painting, small repairs and seasonal maintenance in Burlington and nearby towns."
  },
  {
    slug: "boston",
    name: "Boston, MA",
    href: "/areas/boston",
    blurb:
      "Selective handyman and painting projects in Boston neighborhoods, typically by referral or when the schedule allows."
  }
];

export default function AreasPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Service areas in Massachusetts
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          John Henry Home Services LLC is based in Somerville and focuses on
          nearby communities in Greater Boston. Below are the primary cities and
          towns where I work.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <article
            key={area.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">
              <a href={area.href} className="hover:underline">
                {area.name}
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-600">{area.blurb}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          See our <a href="/services" className="font-medium text-brand-blue hover:underline">services</a> for
          painting, carpentry, landscaping and more. For local maintenance tips, check out our{" "}
          <a href="/articles" className="font-medium text-brand-blue hover:underline">articles</a>.
          Ready to start? <a href="/#quote" className="font-medium text-brand-blue hover:underline">Request a free quote</a>.
        </p>
      </section>
    </div>
  );
}

