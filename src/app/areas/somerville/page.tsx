import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Somerville Handyman, Painter & Carpenter",
  description:
    "Handyman, interior and exterior painting, carpentry, landscaping and gutter cleaning in Somerville, MA. Apartments, condos and multi-families. Free estimates.",
};

export default function SomervilleAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman, painter & carpenter in Somerville, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          John Henry Home Services LLC is based in Somerville and focuses on
          practical projects for local homeowners, landlords and condo owners.
          I&apos;m fully insured and handle a mix of handyman, painting,
          carpentry, landscaping and seasonal maintenance work.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Popular services in Somerville
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Interior painting for apartments, condos and multi‑families</li>
          <li>Exterior trim, porch and entry painting</li>
          <li>Trim and door carpentry in older Somerville homes</li>
          <li>Drywall repairs and patching before repainting</li>
          <li>Small remodeling and upgrade projects</li>
          <li>Landscaping, gardening and seasonal yard clean‑ups</li>
          <li>Gutter cleaning before heavy rain and winter</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Get a Somerville‑focused quote
        </h2>
        <p>
          If your property is in Somerville, use the quote request form on the
          home page and choose Somerville as your city. Share a quick
          description and photos if you can, and I&apos;ll follow up with
          questions and a written estimate.
        </p>
      </section>
    </div>
  );
}

