import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shelving, Blinds & Picture Hanging | Somerville, Medford & Cambridge",
  description:
    "Shelf installation, blinds and shades, picture and mirror hanging in Somerville, Medford, Cambridge. Right anchors for plaster and drywall.",
};

export default function ShelvingBlindsPictureHangingPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Shelving, blinds & picture hanging
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Getting shelves level, blinds hung correctly, and pictures and
          mirrors securely on the wall makes a room feel finished. I install
          with the right anchors for plaster and drywall so nothing pulls out.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          What I do
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Floating shelves, bracket shelves, and closet shelving systems</li>
          <li>Blinds and shades (inside or outside mount), including measuring</li>
          <li>Picture and mirror hanging with proper anchors and leveling</li>
          <li>Heavy items and gallery walls—anchored so they stay put</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Older homes
        </h2>
        <p className="text-sm text-slate-600">
          In Somerville and Cambridge especially, many walls are plaster or
          lath. I use anchors and techniques that work in older construction
          so shelves and art stay secure without damaging the wall.
        </p>
      </section>

      <section className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Request a quote
        </h2>
        <p>
          Share what you’d like installed (shelves, blinds, or art) and
          whether you already have the materials. Use the{" "}
          <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote form</a> on
          the home page and I&apos;ll follow up with an estimate.
        </p>
      </section>
    </div>
  );
}
