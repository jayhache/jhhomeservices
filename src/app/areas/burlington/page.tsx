import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Burlington Handyman & Painting",
  description:
    "Interior and exterior painting, handyman and small projects in Burlington, MA. Repairs and seasonal maintenance. Free estimates.",
};

export default function BurlingtonAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman & painting services in Burlington, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I take on a range of projects in Burlington, from interior repainting
          and drywall repairs to trim, small carpentry jobs and seasonal
          maintenance.
        </p>
      </header>
    </div>
  );
}

