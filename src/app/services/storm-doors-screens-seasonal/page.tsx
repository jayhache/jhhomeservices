import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Storm Doors, Screens & Window AC | Somerville, Medford & Cambridge",
  description:
    "Storm and screen door install or repair, screen replacement, window AC install and removal in Somerville, Medford, Cambridge and nearby MA.",
};

export default function StormDoorsScreensSeasonalPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Storm doors, screens & seasonal installs
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Storm doors, screen repairs, and window AC units are part of life
          in Greater Boston. I install and repair storm and screen doors,
          replace screen mesh in existing frames, and safely install or
          remove window ACs.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Storm door and screen door installation or repair</li>
          <li>Screen repair—new mesh and spline in existing frames</li>
          <li>Window AC install (spring/summer) and removal (fall)</li>
          <li>Securing and sealing window units so they’re stable and weather-tight</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Why this fits Somerville & Cambridge
        </h2>
        <p className="text-sm text-slate-600">
          Triple-deckers and older single-families often have multiple
          storm and screen doors, and plenty of window ACs. I work in
          Somerville, Medford, Cambridge and nearby—schedule install or
          removal when the season changes so you’re set for summer or winter.
        </p>
      </section>

      <section className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Get on the schedule
        </h2>
        <p>
          For storm doors, screen repair, or window AC install/removal, use
          the <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a>.
          Mention how many doors or units and whether you already have the
          materials, and I&apos;ll provide an estimate and timing.
        </p>
      </section>
    </div>
  );
}
