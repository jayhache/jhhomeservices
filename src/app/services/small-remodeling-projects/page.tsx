import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Small Remodeling Projects | Somerville, Medford & Cambridge",
  description:
    "Kitchen and bath updates, trim, built-ins and small remodels in Somerville, Medford, Cambridge and nearby MA. No full gut jobs—focused, practical improvements.",
};

export default function SmallRemodelingPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Small remodeling projects
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Not every project needs a full‑scale general contractor. I handle
          smaller remodeling projects that make a big difference in how your
          home works day‑to‑day.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Typical small remodeling work
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Updating trim, doors, and casings in older homes</li>
          <li>Improving entryways, mudrooms, and storage areas</li>
          <li>Refreshing bathrooms and kitchens without full gut renovations</li>
          <li>Adding or adjusting shelving and built‑ins</li>
          <li>Coordinating with licensed trades for electrical and plumbing</li>
        </ul>
        <p className="text-xs text-slate-600">
          For electrical work, I can help with planning and coordination, but
          any work that legally requires a licensed electrician will be handled
          by or in coordination with a licensed professional.
        </p>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Talk through your project
        </h2>
        <p>
          Use the quote form on the home page to describe what you&apos;re
          hoping to change. I&apos;ll review photos, schedule a walkthrough if
          needed, and then put together a clear, written estimate for the work.
        </p>
      </section>
    </div>
  );
}

