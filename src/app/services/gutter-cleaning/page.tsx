import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gutter Cleaning | Somerville, Medford & Cambridge MA",
  description:
    "Seasonal gutter cleaning for homes in Somerville, Medford, Cambridge and Greater Boston. Protect roof, siding and foundation. Schedule before spring rains.",
};

export default function GutterCleaningPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Gutter cleaning and basic maintenance
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Clean gutters help protect your roof, siding and foundation from
          water. I focus on thorough, safe gutter cleaning for typical
          single‑family homes and smaller multi‑families.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Gutter cleaning services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Removing leaves and debris from gutters and downspouts</li>
          <li>Checking for basic drainage issues</li>
          <li>
            Visual notes on any obvious problems to discuss (loose sections,
            standing water, etc.)
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          For major roof work or structural gutter replacement, I can help you
          identify when it&apos;s time to bring in a roofing or gutter
          specialist.
        </p>
      </section>
    </div>
  );
}

