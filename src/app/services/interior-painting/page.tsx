import type { Metadata } from "next";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title:
    "Interior Painting | Somerville, Medford & Cambridge MA",
  description:
    "Professional interior painting for apartments, condos and homes in Somerville, Medford, Cambridge and nearby MA. Walls, trim, doors. Free estimates.",
};

export default function InteriorPaintingPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Interior painting in Somerville, Medford & Cambridge
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Fresh, clean interior paint makes a huge difference in how your home
          feels. I work carefully in lived‑in spaces, protect floors and
          furniture, and leave rooms cleaner than I found them.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Interior painting services
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Apartments, condos, single‑family and multi‑family homes</li>
          <li>Walls, ceilings, trim, doors, and built‑ins</li>
          <li>Color changes and neat touch‑ups between tenants</li>
          <li>Minor drywall repairs and patching before paint</li>
          <li>Careful cutting‑in and clean lines around trim and ceilings</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Service area for interior painting
        </h2>
        <p className="text-sm text-slate-600">
          I primarily provide interior painting in Somerville, Medford and
          Cambridge, but I also work in Belmont, Malden, Burlington, Boston and
          nearby Massachusetts towns when the schedule allows.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Frequently asked questions
        </h2>
        <dl className="space-y-3 text-sm text-slate-700">
          <div>
            <dt className="font-medium text-slate-900">Do you paint occupied homes?</dt>
            <dd className="mt-0.5">Yes. We work carefully in lived-in spaces and protect floors and furniture.</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Do you do touch-ups or only full repaints?</dt>
            <dd className="mt-0.5">Both—we can touch up scuffs and small areas or repaint entire rooms.</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">What’s your service area for interior painting?</dt>
            <dd className="mt-0.5">Somerville, Medford, Cambridge, and nearby towns including Belmont, Malden, Burlington and Boston.</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">How do I get a quote for interior painting?</dt>
            <dd className="mt-0.5">Use the quote request form on the home page with a few photos and room details; we’ll send a written estimate.</dd>
          </div>
        </dl>
        <FaqSchema
          faqs={[
            { question: "Do you paint occupied homes?", answer: "Yes. We work carefully in lived-in spaces and protect floors and furniture." },
            { question: "Do you do touch-ups or only full repaints?", answer: "Both—we can touch up scuffs and small areas or repaint entire rooms." },
            { question: "What's your service area for interior painting?", answer: "Somerville, Medford, Cambridge, and nearby towns including Belmont, Malden, Burlington and Boston." },
            { question: "How do I get a quote for interior painting?", answer: "Use the quote request form on the home page with a few photos and room details; we'll send a written estimate." },
          ]}
        />
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Ready for a quote?
        </h2>
        <p>
          The fastest way to get an estimate is to fill out the quote request
          form on the home page with a few photos of the rooms and a rough idea
          of timing. I&apos;ll follow up with questions if needed and then send
          a written estimate.
        </p>
      </section>
    </div>
  );
}

