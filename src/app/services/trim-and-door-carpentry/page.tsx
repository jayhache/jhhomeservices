import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Trim & Door Carpentry | Somerville, Medford & Cambridge MA",
  description:
    "Baseboards, casing, interior doors and trim in Somerville, Medford, Cambridge and nearby. Repairs and new work for older and newer homes.",
};

export default function TrimAndDoorCarpentryPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Trim and door carpentry
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          In older New England homes, trim and doors take a beating. I repair,
          replace and upgrade trim and doors so rooms feel finished and doors
          actually close the way they should.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Common carpentry projects
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Replacing or upgrading baseboards and casing</li>
          <li>Installing and adjusting interior doors</li>
          <li>Repairing damaged trim and thresholds</li>
          <li>Adding simple built‑ins and shelving</li>
          <li>Preparing trim for a smooth paint finish</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Serving Somerville, Medford, Cambridge & nearby
        </h2>
        <p>
          I focus on Somerville, Medford and Cambridge, and also work in nearby
          towns like Belmont, Malden, Burlington and Boston when scheduling
          allows. Share details and photos through the quote form and I&apos;ll
          follow up with options.
        </p>
      </section>
    </div>
  );
}

