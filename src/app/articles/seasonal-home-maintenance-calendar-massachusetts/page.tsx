import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Seasonal Home Maintenance Calendar for Massachusetts",
  description:
    "Year-round maintenance calendar for Somerville, Medford, Cambridge and Greater Boston. Spring, summer, fall and winter tasks.",
};

export default function SeasonalCalendarArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>Seasonal home maintenance calendar for Massachusetts</h1>
      <p>
        New England weather runs in cycles. Spreading maintenance across the
        year keeps small tasks from turning into big repairs. This calendar
        is geared toward homeowners in Somerville, Medford, Cambridge and
        nearby towns.
      </p>

      <h2>Spring</h2>
      <ul>
        <li><strong>Gutters & drainage:</strong> Clear gutters and downspouts after the last freeze; check that water flows away from the foundation.</li>
        <li><strong>Exterior:</strong> Walk the perimeter; note peeling paint, soft trim, and gaps in caulk. Plan exterior painting for dry, warm weather.</li>
        <li><strong>Yard:</strong> Clean up beds, edge and mulch, and trim back winter damage.</li>
        <li><strong>Inside:</strong> Check for winter-related stains (ice dams, leaks); patch and repaint as needed.</li>
      </ul>

      <h2>Summer</h2>
      <ul>
        <li><strong>Exterior painting:</strong> Best window for siding, trim and porch work—warm, dry days.</li>
        <li><strong>Ventilation:</strong> Make sure baths and kitchens are vented to reduce humidity and mold risk.</li>
        <li><strong>Deck & outdoor:</strong> Inspect railings and steps; tighten or replace as needed.</li>
      </ul>

      <h2>Fall</h2>
      <ul>
        <li><strong>Gutters again:</strong> After leaves drop, clean gutters and check downspouts before winter.</li>
        <li><strong>Grading & drainage:</strong> Ensure soil slopes away from the foundation; extend downspouts if needed.</li>
        <li><strong>Doors & windows:</strong> Replace worn weatherstripping; fix drafts before heating season.</li>
        <li><strong>Yard:</strong> Final mow, leaf cleanup, and any last landscaping so spring starts clean.</li>
      </ul>

      <h2>Winter</h2>
      <ul>
        <li><strong>Indoor focus:</strong> Good time for interior painting, drywall repairs, and small carpentry projects.</li>
        <li><strong>Ice dams:</strong> Keep attic well vented and insulation in check; address roof/attic issues before heavy snow.</li>
        <li><strong>Emergency prep:</strong> Know where your main water shutoff is; have a plan for pipes in cold snaps.</li>
      </ul>

      <h2>Stick to the rhythm</h2>
      <p>
        Tackling a few items each season spreads cost and effort and helps
        avoid surprises. If you’d rather hand off gutter cleaning, painting,
        or repairs to someone local, we serve Somerville, Medford, Cambridge
        and nearby towns—use our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote form</a> or
        call <a href="tel:+16178637629" className="font-medium text-brand-blue hover:underline">(617) 863-7629</a> to
        schedule.
      </p>
    </article>
  );
}
