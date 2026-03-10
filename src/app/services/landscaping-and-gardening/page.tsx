import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landscaping & Gardening | Somerville, Medford & Cambridge MA",
  description:
    "Yard clean-ups, planting, mulching and gardening in Somerville, Medford, Cambridge and nearby Massachusetts. Practical help for urban yards.",
};

export default function LandscapingAndGardeningPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Landscaping and gardening services
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          A tidy yard and healthy planting beds make a big difference in how
          your property feels. I focus on practical, low‑drama maintenance that
          keeps things under control through New England seasons.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Typical landscaping and gardening work
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Spring and fall yard clean‑ups</li>
          <li>Weeding and edging garden beds</li>
          <li>Mulching beds and around trees</li>
          <li>Planting shrubs and perennials</li>
          <li>Light pruning and shaping of shrubs</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Focused on Somerville, Medford & Cambridge
        </h2>
        <p>
          Most landscaping and gardening work is in Somerville, Medford and
          Cambridge, with select projects in Belmont, Malden, Burlington and
          Boston depending on access and parking.
        </p>
      </section>
    </div>
  );
}

