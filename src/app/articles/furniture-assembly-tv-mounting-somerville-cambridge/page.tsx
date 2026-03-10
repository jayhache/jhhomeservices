import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Furniture Assembly & TV Mounting in Somerville & Cambridge",
  description:
    "When to hire a handyman for IKEA assembly and TV wall mounting in Somerville, Medford and Cambridge. What to have ready.",
};

export default function FurnitureAssemblyArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>Furniture assembly & TV mounting in Somerville & Cambridge</h1>
      <p>
        Moving into a new apartment or finally upgrading the living room? In
        Somerville, Medford and Cambridge, a lot of us live in older buildings
        with plaster walls and tight stairways. Getting furniture assembled and
        TVs mounted the right way can save time, avoid damage, and keep
        everything secure.
      </p>

      <h2>When to hire out furniture assembly</h2>
      <p>
        Flat-pack furniture from IKEA, Wayfair, Amazon and similar can be
        straightforward—or a multi-hour puzzle with missing hardware. It often
        makes sense to hire a handyman when:
      </p>
      <ul>
        <li>You have several pieces and limited time</li>
        <li>The instructions are unclear or the build is heavy (e.g. large dressers, beds)</li>
        <li>You want it done without risking stripped screws or misaligned parts</li>
        <li>You’d rather spend the day unpacking or working instead of building</li>
      </ul>
      <p>
        A handyman with experience assembling these brands can work through the
        steps quickly and leave everything level and stable.
      </p>

      <h2>TV and monitor mounting</h2>
      <p>
        Mounting a TV or monitor on the wall isn’t just about the bracket. In
        older homes you need to find studs or use the right anchors for plaster
        and lath so the set doesn’t pull out. A good install also includes:
      </p>
      <ul>
        <li>Leveling and height that works for the room</li>
        <li>Basic cable management so cords aren’t dangling</li>
        <li>Optional cord concealment (e.g. in-wall or raceway) for a cleaner look</li>
      </ul>
      <p>
        If you’re not comfortable drilling into your walls or you want it
        done once and done right, hiring someone is a smart move.
      </p>

      <h2>What to have ready</h2>
      <p>
        For furniture assembly, have the boxes on-site and the room clear
        enough to work. For TV mounting, have the mount and the TV (or at least
        the size and weight) so the installer can confirm the right hardware.
        Mention any quirks—e.g. plaster walls, brick, or a TV that’s already
        heavy—when you request a quote so the estimate is accurate.
      </p>

      <h2>Need assembly or mounting help?</h2>
      <p>
        John Henry Home Services offers{" "}
        <a href="/services/furniture-assembly-tv-mounting" className="font-medium text-brand-blue hover:underline">furniture assembly and TV mounting</a> in
        Somerville, Medford, Cambridge and nearby towns. Use our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a> to
        describe what you have (e.g. “IKEA Kallax,” “55” TV mount”) and we’ll
        follow up with timing and a written estimate.
      </p>
    </article>
  );
}
