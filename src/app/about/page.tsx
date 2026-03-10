import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About John Henry Home Services | Handyman & Painting in Somerville, Medford & Cambridge",
  description:
    "John Henry Home Services LLC: fully insured handyman and painting company based in Somerville, serving Medford, Cambridge and Greater Boston, MA.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About John Henry Home Services
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          A local, fully insured company focused on handyman work, painting,
          carpentry and small projects in Somerville, Medford, Cambridge and
          nearby Massachusetts towns.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">What we do</h2>
        <p className="text-sm text-slate-700">
          John Henry Home Services LLC offers interior and exterior painting,
          small remodeling projects, trim and door carpentry, landscaping and
          gardening, gutter cleaning, and drywall repairs. We work in occupied
          homes and condos with care for your space and schedule, and we&apos;re
          building toward offering full construction services as the business
          grows.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Service area</h2>
        <p className="text-sm text-slate-700">
          We&apos;re based in Somerville and prioritize Somerville, Medford and
          Cambridge. We also take on projects in Belmont, Malden, Burlington,
          Boston and other nearby towns when the schedule allows.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Insurance & quality</h2>
        <p className="text-sm text-slate-700">
          We are fully insured. We take pride in clear communication, written
          estimates, and leaving job sites tidy. No pricing is final until you
          receive a written estimate.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">Get in touch</h2>
        <p className="mt-1 text-sm text-slate-600">
          Ready for a quote? Use the{" "}
          <a href="/#quote" className="font-medium text-brand-blue hover:underline">
            quote request form
          </a>{" "}
          on the home page, or call or text{" "}
          <a href="tel:+16178637629" className="font-medium text-brand-blue hover:underline">
            (617) 863-7629
          </a>
          .
        </p>
      </section>
    </div>
  );
}
