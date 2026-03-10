import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Medford Handyman & Painting",
  description:
    "Painting, carpentry and handyman services for Medford, MA homes and condos. Interior, exterior, small remodels and repairs. Free estimates.",
};

export default function MedfordAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman & painting services in Medford, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I regularly work in Medford on interior and exterior painting,
          handyman projects, small remodeling jobs and seasonal maintenance for
          homeowners and landlords.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Work I often do in Medford
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Interior painting between tenants or before selling</li>
          <li>Drywall repairs from everyday wear or past work</li>
          <li>Trim and door carpentry in older houses and multi‑families</li>
          <li>Small updates to kitchens, baths and entry areas</li>
          <li>Landscaping, gardening and gutter cleaning</li>
        </ul>
      </section>
    </div>
  );
}

