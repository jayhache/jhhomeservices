import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Door Fixes & Picture Hanging in Somerville & Cambridge",
  description:
    "Sticking doors, latch and lock fixes, and picture and mirror hanging in older Somerville, Medford and Cambridge homes.",
};

export default function DoorFixesPictureHangingArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>Door fixes & picture hanging in Somerville & Cambridge</h1>
      <p>
        Older homes in Somerville, Medford and Cambridge have a lot of
        character—and a lot of doors and walls that need a bit of attention.
        Two of the most common “small” jobs that make a big difference: doors
        that actually close and latch, and pictures and mirrors hung securely
        so they don’t end up on the floor.
      </p>

      <h2>Doors that stick or won’t latch</h2>
      <p>
        Doors that bind, stick, or don’t catch the strike plate are usually
        fixable without replacing the whole door. Common causes and fixes:
      </p>
      <ul>
        <li><strong>Hinges:</strong> Loose screws, hinges that need shimming, or a door that’s dropped over time. Tightening, adjusting, or adding a shim can fix alignment.</li>
        <li><strong>Strike plate:</strong> If the latch doesn’t line up with the hole, moving or enlarging the strike plate (or adjusting the latch) fixes it.</li>
        <li><strong>Swelling:</strong> In humid months, doors can swell. Trimming or planing the sticking edge is a job for someone with the right tools so you don’t ruin the finish.</li>
      </ul>
      <p>
        A handyman can usually diagnose and fix these in one visit. If you’re
        between tenants or just moved in, it’s also a good time to change or
        rekey locks and deadbolts for security.
      </p>

      <h2>Picture and mirror hanging</h2>
      <p>
        Hanging art and mirrors in plaster or lath walls isn’t the same as
        drywall. Wrong anchors can pull out or crack plaster. A handyman used
        to older construction will:
      </p>
      <ul>
        <li>Use the right anchors (or find studs) for the weight of the piece</li>
        <li>Level and space pieces for galleries or multi-piece layouts</li>
        <li>Hang mirrors and heavier items so they’re secure and safe</li>
      </ul>
      <p>
        If you’ve had a picture pull out of the wall or you’re nervous about
        drilling into plaster, hiring it out is a small cost for peace of mind.
      </p>

      <h2>Storm doors and screens</h2>
      <p>
        Storm and screen doors take a beating with seasonal use. Adjusting
        closers, replacing screens, or installing a new storm door are all
        standard handyman tasks. Scheduling before or after the season (e.g.
        early spring or late fall) is a good time to get on the list.
      </p>

      <h2>Get a quote</h2>
      <p>
        For door adjustments, lock changes, picture hanging, or storm/screen
        door work in Somerville, Medford, Cambridge or nearby, use our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a>.
        Describe the doors or walls and what you’d like done, and we’ll provide
        a written estimate. See our{" "}
        <a href="/services/door-adjustments-hardware" className="font-medium text-brand-blue hover:underline">door adjustments & hardware</a> and{" "}
        <a href="/services/shelving-blinds-picture-hanging" className="font-medium text-brand-blue hover:underline">shelving, blinds & picture hanging</a> pages
        for more on what we cover.
      </p>
    </article>
  );
}
