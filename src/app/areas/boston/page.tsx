import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Boston Handyman & Painting (Selective)",
  description:
    "Selective handyman and painting projects in Boston neighborhoods. Typically by referral or when schedule allows. Request a quote.",
};

export default function BostonAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman & painting in Boston, MA (selective)
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I occasionally take on projects in Boston neighborhoods, especially
          through referrals or when the schedule aligns. If you&apos;re in
          Boston and interested in working together, feel free to reach out with
          details.
        </p>
      </header>
    </div>
  );
}

