import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Handyman & Painting Services | Somerville, Medford, Cambridge MA",
  description:
    "Interior & exterior painting, carpentry, furniture assembly, TV mounting, door repairs, shelving, storm doors, gutter cleaning, drywall and more. Serving Somerville, Medford, Cambridge and nearby towns.",
};

const services = [
  {
    slug: "interior-painting",
    name: "Interior painting",
    summary:
      "Clean, careful interior painting for apartments, condos, single‑family homes, and multi‑family buildings.",
    href: "/services/interior-painting"
  },
  {
    slug: "exterior-painting",
    name: "Exterior painting",
    summary:
      "Preparation and painting for exterior siding, trim, porches, and entryways to handle New England weather.",
    href: "/services/exterior-painting"
  },
  {
    slug: "small-remodeling-projects",
    name: "Small remodeling projects",
    summary:
      "Smaller construction projects like updates to kitchens, baths, and living spaces without a full gut‑renovation.",
    href: "/services/small-remodeling-projects"
  },
  {
    slug: "trim-and-door-carpentry",
    name: "Trim and door carpentry",
    summary:
      "Baseboards, casing, window and door trim, doors that close properly, and custom details that make rooms feel finished.",
    href: "/services/trim-and-door-carpentry"
  },
  {
    slug: "landscaping-and-gardening",
    name: "Landscaping and gardening",
    summary:
      "Yard clean‑ups, planting, bed edging, and basic landscaping and gardening help to keep your outdoor spaces looking good.",
    href: "/services/landscaping-and-gardening"
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter cleaning",
    summary:
      "Seasonal gutter cleaning to help protect your roof, siding, and foundation from New England rain and snow.",
    href: "/services/gutter-cleaning"
  },
  {
    slug: "drywall-repairs",
    name: "Drywall repairs",
    summary:
      "Patching, skim coating, and drywall repairs so walls and ceilings are smooth before painting.",
    href: "/services/drywall-repairs"
  },
  {
    slug: "furniture-assembly-tv-mounting",
    name: "Furniture assembly & TV mounting",
    summary:
      "IKEA and flat-pack assembly, TV and monitor wall mounting, and cable management so everything stays level and secure.",
    href: "/services/furniture-assembly-tv-mounting"
  },
  {
    slug: "door-adjustments-hardware",
    name: "Door adjustments & hardware",
    summary:
      "Sticking doors, hinge and latch adjustments, lock and deadbolt changes, and storm or screen door install or repair.",
    href: "/services/door-adjustments-hardware"
  },
  {
    slug: "shelving-blinds-picture-hanging",
    name: "Shelving, blinds & picture hanging",
    summary:
      "Floating shelves, closet systems, blind and shade installation, and picture and mirror hanging with proper anchors.",
    href: "/services/shelving-blinds-picture-hanging"
  },
  {
    slug: "storm-doors-screens-seasonal",
    name: "Storm doors, screens & seasonal installs",
    summary:
      "Storm and screen door install or repair, screen mesh replacement, and window AC install or removal.",
    href: "/services/storm-doors-screens-seasonal"
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Services
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          John Henry Home Services LLC is a fully insured handyman and painting
          company serving Somerville, Medford, Cambridge, Belmont, Malden,
          Burlington, Boston and nearby Massachusetts towns. Below are some of
          the most common services I provide.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">
              <a href={service.href} className="hover:underline">
                {service.name}
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-600">{service.summary}</p>
          </article>
        ))}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Other handyman tasks
        </h2>
        <p className="text-sm text-slate-600">
          I also take on cabinet tweaks (rehanging doors, new pulls), minor
          fixture swaps, closet build-outs, ceiling fan installs (where it’s a
          straight swap), and small repairs. If it’s in scope for a handyman
          and doesn’t require a licensed electrician or plumber, ask.
        </p>
        <p className="text-sm">
          <a href="/#quote" className="font-medium text-brand-blue hover:underline">Request a quote</a> and
          describe the job—I’ll let you know if it’s a fit and send an estimate.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          Serving <a href="/areas" className="font-medium text-brand-blue hover:underline">Somerville, Medford, Cambridge and nearby towns</a>.
          For practical home maintenance tips, see our{" "}
          <a href="/articles" className="font-medium text-brand-blue hover:underline">articles</a>.
          Ready to get a quote?{" "}
          <a href="/#quote" className="font-medium text-brand-blue hover:underline">Request a free quote</a>.
        </p>
      </section>
    </div>
  );
}

