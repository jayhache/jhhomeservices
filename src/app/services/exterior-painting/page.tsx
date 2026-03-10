import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Exterior Painting & Trim | Somerville, Medford & Cambridge MA",
  description:
    "Exterior painting, trim and porch work for houses in Somerville, Medford, Cambridge and Greater Boston. Prep, paint and lasting finish. Free estimates.",
};

export default function ExteriorPaintingPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Exterior painting and trim work
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          New England weather is tough on exterior paint. I focus on smart prep,
          realistic expectations, and clean finishes so your trim, porches and
          entryways look sharp and stay protected.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Exterior painting services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Exterior trim, doors, railings and porches</li>
          <li>Small‑scale siding repainting and touch‑ups</li>
          <li>Scraping, sanding and spot‑priming failing paint</li>
          <li>Caulking gaps around trim and windows where appropriate</li>
          <li>Color updates for front doors and entry areas</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Where I work outside
        </h2>
        <p className="text-sm text-slate-600">
          Exterior painting work is usually scheduled in Somerville, Medford,
          Cambridge and nearby towns like Belmont, Malden, Burlington and
          Boston, depending on weather and project size.
        </p>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Plan ahead for exterior work
        </h2>
        <p>
          Exterior painting is very weather‑dependent in Massachusetts. If
          you&apos;re hoping to paint in the spring or summer, it&apos;s best to
          reach out a few months in advance so we can line up site visits and
          estimate your project.
        </p>
      </section>
    </div>
  );
}

