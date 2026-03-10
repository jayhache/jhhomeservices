import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cambridge Handyman, Painter & Carpenter",
  description:
    "Handyman, painting and carpentry for Cambridge, MA homes and condos. Careful work in older buildings. Free estimates.",
};

export default function CambridgeAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman, painting & carpentry in Cambridge, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Cambridge homes and condos often need careful work around older trim,
          plaster and unique layouts. I handle painting, small carpentry and
          handyman projects with respect for your space and neighbors.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Cambridge‑friendly services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Interior painting in occupied condos and apartments</li>
          <li>Trim and door carpentry in older Cambridge buildings</li>
          <li>Drywall repairs and patching before repainting</li>
          <li>Small remodeling projects that don&apos;t need a big crew</li>
          <li>Landscaping, gardening and basic exterior maintenance</li>
        </ul>
      </section>
    </div>
  );
}

