import QuoteForm from "../components/QuoteForm";

export default function HomePage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Reliable handyman, painting & small projects in Somerville, Medford & Cambridge
          </h1>
          <p className="text-base text-slate-600">
            John Henry Home Services LLC is a fully insured local company
            offering interior and exterior painting, small remodeling projects,
            trim and door carpentry, landscaping and gardening, gutter cleaning,
            drywall repairs and more throughout Somerville, Medford, Cambridge,
            and nearby Massachusetts towns.
          </p>
        </div>

        <div className="grid gap-4 rounded-xl bg-white p-5 shadow-sm sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Painting & finishing
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Interior & exterior painting, drywall repairs, patching, and clean
              prep work that makes your home feel new again.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Carpentry & small remodels
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Trim and door carpentry, small remodeling projects, built-ins,
              doors that actually close, and detail work that adds value.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Outdoors & maintenance
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Landscaping and gardening help, seasonal cleanups, gutter
              cleaning, and home maintenance checklists for New England weather.
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Service areas in Massachusetts
          </h2>
          <p className="text-sm text-slate-600">
            Based in Somerville, we primarily serve:
          </p>
          <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-3">
            <li>Somerville, MA</li>
            <li>Medford, MA</li>
            <li>Cambridge, MA</li>
            <li>Belmont, MA</li>
            <li>Malden, MA</li>
            <li>Burlington, MA</li>
            <li>Boston, MA</li>
            <li>and nearby towns</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Home maintenance & project guides
          </h2>
          <p className="text-sm text-slate-600">
            Learn how to take care of your home with practical, local advice
            tailored to New England houses and weather. Articles cover topics
            like spring maintenance checklists, exterior painting prep, gutter
            cleaning, and getting your yard ready for the season.
          </p>
        </section>
      </section>

      <aside className="md:pl-6">
        <div className="sticky top-4 rounded-xl bg-white p-5 shadow-md">
          <h2 className="text-lg font-semibold text-slate-900">
            Request a free quote
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Share a few details about your project and we&apos;ll follow up
            with a personalized quote. You&apos;ll get a quick confirmation
            email; John receives a full summary with a PDF estimate template.
          </p>
          <div className="mt-4">
            <QuoteForm />
          </div>
        </div>
      </aside>
    </div>
  );
}

