import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Maintenance & Improvement Articles | Somerville, Medford, Cambridge",
  description:
    "Practical guides for Massachusetts homeowners: spring checklists, painting prep, gutter cleaning, yard care and handyman tips for Somerville, Medford and Cambridge.",
};

const articles = [
  {
    slug: "spring-home-maintenance-checklist-massachusetts",
    title: "Spring home maintenance checklist for Massachusetts homeowners",
    summary:
      "A practical, local checklist to get your home ready for a New England spring in Somerville, Medford, Cambridge and nearby towns."
  },
  {
    slug: "prepare-exterior-for-paint-after-new-england-winter",
    title:
      "How to prepare your exterior for paint after a New England winter",
    summary:
      "Steps to get siding, trim and porches ready for exterior painting after snow, ice and road salt."
  },
  {
    slug: "gutter-cleaning-before-spring-rains-boston-area",
    title: "Why gutter cleaning before spring rains matters in Greater Boston",
    summary:
      "Why clogged gutters are a problem in Somerville, Medford, Cambridge and Boston, and when to schedule cleaning."
  },
  {
    slug: "get-yard-ready-for-spring-somerville-cambridge",
    title: "Getting your yard ready for spring in Somerville & Cambridge",
    summary:
      "Simple landscaping and gardening tasks that make a big difference in small urban yards."
  },
  {
    slug: "when-to-repaint-interior-walls-vs-touch-up",
    title: "When to repaint interior walls vs. touch up",
    summary:
      "Decide whether to repaint a full room or just touch up scuffs and holes in Massachusetts homes."
  },
  {
    slug: "drywall-repair-before-painting-patch-vs-replace",
    title: "Drywall repair before painting: when to patch vs. replace",
    summary:
      "When to patch drywall versus replace a section before painting in Greater Boston homes."
  },
  {
    slug: "seasonal-home-maintenance-calendar-massachusetts",
    title: "Seasonal home maintenance calendar for Massachusetts",
    summary:
      "A year-round maintenance calendar for homeowners in Somerville, Medford, Cambridge and Greater Boston."
  },
  {
    slug: "furniture-assembly-tv-mounting-somerville-cambridge",
    title: "Furniture assembly & TV mounting in Somerville & Cambridge",
    summary:
      "When to hire a handyman for IKEA assembly, TV wall mounting, and cable management in older local homes."
  },
  {
    slug: "door-fixes-picture-hanging-somerville-cambridge",
    title: "Door fixes & picture hanging in Somerville & Cambridge",
    summary:
      "Sticking doors, latch and lock fixes, and picture and mirror hanging in older Somerville, Medford and Cambridge homes."
  },
  // Draft: how-to-choose-a-handyman-somerville-medford-cambridge (publish when insurance/references are in place)
];

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Home maintenance & project guides
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Articles written from the perspective of a local handyman and
          painter, focused on the kinds of homes and weather we see in
          Somerville, Medford, Cambridge and nearby Massachusetts towns.
        </p>
      </header>

      <section className="space-y-4">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">
              <a href={`/articles/${article.slug}`} className="hover:underline">
                {article.title}
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-600">{article.summary}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          Need help with a project? Browse our <a href="/services" className="font-medium text-brand-blue hover:underline">services</a> and{" "}
          <a href="/areas" className="font-medium text-brand-blue hover:underline">service areas</a>.
          Ready for an estimate? <a href="/#quote" className="font-medium text-brand-blue hover:underline">Request a free quote</a>.
        </p>
      </section>
    </div>
  );
}

