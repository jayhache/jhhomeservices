import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Malden Handyman & Painting",
  description:
    "Handyman, painting and small projects for Malden, MA. Repairs, carpentry and maintenance. Free estimates.",
};

export default function MaldenAreaPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Handyman & painting services in Malden, MA
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          I work with Malden homeowners on practical projects like painting,
          repairs, trim and door work, landscaping and gutter cleaning that help
          keep homes in good shape.
        </p>
      </header>
    </div>
  );
}

