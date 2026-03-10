import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Furniture Assembly & TV Mounting | Somerville, Medford & Cambridge",
  description:
    "IKEA and flat-pack assembly, TV and monitor wall mounting in Somerville, Medford, Cambridge and nearby. Level, secure, cables tidy.",
};

export default function FurnitureAssemblyTvMountingPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Furniture assembly & TV mounting
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Moving into a new place or finally tackling that flat-pack? I assemble
          furniture, mount TVs and monitors securely, and keep cables tidy so
          everything looks right.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          What I can help with
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Furniture assembly (IKEA, Wayfair, Amazon, and similar)</li>
          <li>TV and monitor wall mounting with proper anchors</li>
          <li>Basic cable management and cord concealment</li>
          <li>Leveling and securing so nothing wobbles or sags</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Serving Somerville, Medford, Cambridge & nearby
        </h2>
        <p className="text-sm text-slate-600">
          Common after a move or when upgrading the living room. I work in
          Somerville, Medford, Cambridge and nearby towns—share what you need
          assembled or mounted and I&apos;ll give you a clear estimate.
        </p>
      </section>

      <section className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Get a quote
        </h2>
        <p>
          Use the <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a> on
          the home page. Tell me what you have (e.g. “IKEA bookshelf,” “55”
          TV mount”) and whether the item is already on-site, and I&apos;ll
          follow up with timing and price.
        </p>
      </section>
    </div>
  );
}
