import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Drywall Repairs & Patching | Somerville, Medford & Cambridge",
  description:
    "Drywall patching, skim coating and repairs before painting in Somerville, Medford, Cambridge and nearby MA. Smooth walls and ceilings.",
};

export default function DrywallRepairsPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Drywall repairs and prep for paint
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Good painting starts with solid prep. I handle drywall repairs and
          patching so walls and ceilings are ready for a smooth, long‑lasting
          finish.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Drywall services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Repairing nail pops, small holes and dents</li>
          <li>Patching larger openings from old fixtures or repairs</li>
          <li>Skim coating small areas to blend old and new work</li>
          <li>Sanding and priming to get ready for paint</li>
        </ul>
      </section>
    </div>
  );
}

