import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "When to Repaint Interior Walls vs. Touch Up",
  description:
    "Decide whether to repaint a full room or touch up scuffs and holes. Tips for Somerville, Medford, Cambridge landlords and homeowners.",
};

export default function RepaintVsTouchUpArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>When to repaint interior walls vs. touch up</h1>
      <p>
        In older apartments and houses around Somerville, Medford and Cambridge,
        walls take a lot of wear. Deciding between a full repaint and a
        touch-up can save you time and money when you get it right.
      </p>

      <h2>When a touch-up is enough</h2>
      <p>
        Touch-ups work best when the existing paint is in good shape and you
        only have small, localized damage:
      </p>
      <ul>
        <li>Scuffs from furniture or daily use</li>
        <li>Nail holes and small dings from pictures or shelving</li>
        <li>One or two walls that got dirty (e.g. behind a couch) while the rest of the room is fine</li>
        <li>Same paint still available and the color hasn’t faded noticeably</li>
      </ul>
      <p>
        Use the same sheen (flat, eggshell, satin) as the existing wall so
        patched spots don’t stand out. If the can is years old, test a small
        area first—old paint can yellow or not match after time.
      </p>

      <h2>When to repaint the whole room</h2>
      <p>Plan on a full repaint when:</p>
      <ul>
        <li>Walls have many patches, different sheens, or obvious color mismatch</li>
        <li>You’re changing the color or sheen</li>
        <li>There’s widespread wear, fading, or stains that don’t cover well with touch-up</li>
        <li>You’re preparing a rental for a new tenant and want a clean, consistent look</li>
      </ul>
      <p>
        A full repaint gives you a uniform finish and a chance to fix small
        drywall issues before painting, so the result lasts longer.
      </p>

      <h2>Between tenants or before selling</h2>
      <p>
        Landlords in Somerville, Medford and Cambridge often ask whether to
        touch up or repaint between tenants. If the walls are otherwise in good
        shape and the same color works, touch-up plus a thorough clean can be
        enough. If the last paint job was several years ago or there’s visible
        wear, a full repaint is usually the better investment and easier to
        market.
      </p>

      <h2>Need a hand?</h2>
      <p>
        If you’re not sure whether your space needs a touch-up or a full
        repaint, you can share a few photos and details through our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a>.
        I’m happy to recommend the best approach and give you a written estimate
        for <a href="/services/interior-painting" className="font-medium text-brand-blue hover:underline">interior painting</a> in
        Somerville, Medford, Cambridge and nearby towns.
      </p>
    </article>
  );
}
