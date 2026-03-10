import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Belmont Handyman & Painting",
  description:
    "Handyman and painting services for Belmont, MA. Interior, exterior, small projects and repairs. Free estimates.",
};

export default function BelmontAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman & painting services in Belmont, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I take on a selection of projects in Belmont, especially interior and
          exterior painting, trim and door carpentry, and seasonal maintenance
          for busy homeowners.
        </p>
      </header>
    </div>
  );
}

