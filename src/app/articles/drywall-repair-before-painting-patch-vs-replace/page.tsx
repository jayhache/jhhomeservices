import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Drywall Repair Before Painting: Patch vs. Replace",
  description:
    "When to patch drywall versus replace a section before painting in Greater Boston homes. Plaster and drywall.",
};

export default function DrywallRepairArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>Drywall repair before painting: when to patch vs. replace</h1>
      <p>
        Good paint starts with smooth walls. In older Greater Boston homes,
        that often means fixing drywall (or plaster) first. Here’s when
        patching is enough and when it’s better to replace a section.
      </p>

      <h2>When patching is enough</h2>
      <p>
        Small damage can usually be repaired with a patch and a bit of
        compound:
      </p>
      <ul>
        <li>Nail or screw holes</li>
        <li>Small dents and dings</li>
        <li>Holes from old anchors or fixtures (up to roughly fist-sized)</li>
        <li>Hairline or thin cracks that aren’t moving</li>
      </ul>
      <p>
        For small holes, fill with joint compound, sand smooth when dry, then
        prime and paint. For larger holes (e.g. where a fixture was removed),
        a small patch or “California patch” keeps the repair flat and stable.
      </p>

      <h2>When to replace a section</h2>
      <p>Consider replacing part of the wall when:</p>
      <ul>
        <li>There’s obvious water damage, soft spots, or mold</li>
        <li>A crack keeps coming back (often a sign of movement or a joint issue)</li>
        <li>The hole is too large to patch neatly (e.g. big enough to put your hand through)</li>
        <li>Multiple patches in one area would make the wall look lumpy</li>
      </ul>
      <p>
        Replacing a section means cutting out the bad area, installing a new
        piece of drywall, taping and mudding the seams, then sanding and
        priming. It’s more work but gives a clean, long-lasting result.
      </p>

      <h2>Plaster vs. drywall</h2>
      <p>
        Many homes in Somerville, Medford and Cambridge have plaster walls.
        Small holes and cracks in plaster can often be filled and skim-coated;
        larger damage may need a plaster patch or a drywall “plug” over the
        hole, then blended with joint compound. If you’re unsure, it’s worth
        having someone with experience take a look so the repair doesn’t
        telegraph through the new paint.
      </p>

      <h2>Get a smooth finish before paint</h2>
      <p>
        If you’d rather not DIY the repair, we handle{" "}
        <a href="/services/drywall-repairs" className="font-medium text-brand-blue hover:underline">drywall repairs</a> and
        patching so walls are ready for a clean paint job. Use our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote form</a> to
        describe the room and the damage (photos help), and we’ll recommend
        patch vs. replace and provide a written estimate.
      </p>
    </article>
  );
}
