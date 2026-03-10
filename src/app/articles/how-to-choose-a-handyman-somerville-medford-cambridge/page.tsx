import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How to Choose a Handyman in Somerville, Medford & Cambridge | John Henry Home Services",
  description:
    "What to look for when hiring a handyman in Somerville, Medford, Cambridge and nearby Massachusetts towns: insurance, estimates, and communication.",
};

export default function ChooseHandymanArticle() {
  return (
    <article className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
      <h1>How to choose a handyman in Somerville, Medford & Cambridge</h1>
      <p>
        Whether you need painting, small repairs, or a bit of carpentry,
        picking the right handyman makes a big difference. Here’s what to
        look for when hiring in the Greater Boston area.
      </p>

      <h2>Insurance and legitimacy</h2>
      <p>
        A serious handyman or small contractor should be willing to confirm
        they carry liability insurance. That protects you if something goes
        wrong on your property. Ask for proof of insurance if you’re unsure.
        In Massachusetts, certain trades (e.g. plumbing, electrical) require
        licenses—for those tasks, the person doing the work should be
        licensed or working under a licensed contractor.
      </p>

      <h2>Clear scope and a written estimate</h2>
      <p>
        Before work starts, you should have a clear idea of what’s included:
        materials, labor, and any assumptions (e.g. “paint two coats on
        walls and trim”). A written estimate or proposal helps avoid
        misunderstandings and gives you something to refer back to. No
        pricing should be final until you have that in writing.
      </p>

      <h2>Communication and availability</h2>
      <p>
        You want someone who shows up when they say they will, answers
        calls or texts, and keeps you updated if the schedule or scope
        changes. For smaller jobs in busy areas like Somerville and
        Cambridge, booking a few weeks ahead is common—so plan accordingly
        if you have a deadline.
      </p>

      <h2>References and reviews</h2>
      <p>
        Word of mouth still matters. Ask neighbors, check Google or other
        review sites, and if possible get a reference or two for similar
        work (e.g. interior painting, trim repair). One or two strong
        local references often mean more than a stack of generic reviews.
      </p>

      <h2>Fit for your project</h2>
      <p>
        Not every handyman does everything. Some focus on painting and
        drywall; others on carpentry or small remodels. Describe your
        project clearly when you reach out—if it’s outside their usual
        work, a good pro will say so and may refer you to someone else.
      </p>

      <h2>Ready to get a quote?</h2>
      <p>
        John Henry Home Services is a fully insured handyman and painting
        company based in Somerville, serving Medford, Cambridge and nearby
        towns. We provide written estimates, clear communication, and
        focus on painting, carpentry, drywall, landscaping and small
        projects. Use our{" "}
        <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote request form</a> to
        share your project, or call/text{" "}
        <a href="tel:+16178637629" className="font-medium text-brand-blue hover:underline">(617) 863-7629</a>.
      </p>
    </article>
  );
}
