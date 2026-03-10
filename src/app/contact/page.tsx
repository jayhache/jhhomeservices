import type { Metadata } from "next";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Contact | Request a Quote | Somerville, Medford, Cambridge",
  description:
    "Request a free quote for handyman, painting or small projects in Somerville, Medford, Cambridge and nearby MA. Call or text (617) 863-7629.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Contact us
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          The fastest way to get an estimate is to fill out the quote request
          form. You can also call or text directly.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Request a quote</h2>
          <p className="mt-1 text-sm text-slate-600">
            Share your project details and we&apos;ll follow up with a
            personalized written estimate.
          </p>
          <a
            href="/#quote"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-900"
          >
            Go to quote form
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Call or text</h2>
          <p className="mt-1 text-sm text-slate-600">
            For quick questions or to schedule a walkthrough.
          </p>
          <a
            href="tel:+16178637629"
            className="mt-3 inline-block text-lg font-semibold text-brand-blue hover:underline"
          >
            (617) 863-7629
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Frequently asked questions</h2>
        <dl className="space-y-3 text-sm text-slate-700">
          <div>
            <dt className="font-medium text-slate-900">How do I request a quote?</dt>
            <dd className="mt-0.5">Use the quote form on the home page (link above) or call or text (617) 863-7629.</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">What areas do you serve?</dt>
            <dd className="mt-0.5">Somerville, Medford, Cambridge, Belmont, Malden, Burlington, Boston and nearby Massachusetts towns.</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Do you offer free estimates?</dt>
            <dd className="mt-0.5">Yes. Share your project details and we’ll follow up with a written estimate at no charge.</dd>
          </div>
        </dl>
        <FaqSchema
          faqs={[
            { question: "How do I request a quote?", answer: "Use the quote form on the home page (link above) or call or text (617) 863-7629." },
            { question: "What areas do you serve?", answer: "Somerville, Medford, Cambridge, Belmont, Malden, Burlington, Boston and nearby Massachusetts towns." },
            { question: "Do you offer free estimates?", answer: "Yes. Share your project details and we'll follow up with a written estimate at no charge." },
          ]}
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">Service areas</h2>
        <p className="mt-1">
          We primarily serve Somerville, Medford and Cambridge, and also work in
          Belmont, Malden, Burlington, Boston and nearby towns. See our{" "}
          <a href="/areas" className="font-medium text-brand-blue hover:underline">
            service areas
          </a>{" "}
          page for details.
        </p>
      </section>
    </div>
  );
}
