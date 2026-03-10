import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Door Repairs, Locks & Hardware | Somerville, Medford & Cambridge",
  description:
    "Sticking doors, hinge and latch fixes, lock and deadbolt changes in Somerville, Medford, Cambridge and nearby MA. Storm and screen doors too.",
};

export default function DoorAdjustmentsHardwarePage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Door adjustments & hardware
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Doors that stick, won’t latch, or need new hardware are a daily
          annoyance. I adjust hinges and strike plates, swap locks and
          deadbolts, and install or repair door hardware so everything
          closes and locks properly.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Typical door work
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Fixing sticking or binding doors (hinge and latch alignment)</li>
          <li>Adjusting strike plates so latches catch consistently</li>
          <li>Replacing or rekeying locks and deadbolts (between tenants or after a move)</li>
          <li>Installing new doorknobs, levers, and hinges</li>
          <li>Storm door and screen door install or repair</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          Landlords & tenants
        </h2>
        <p>
          Lock changes between tenants are common in Somerville, Medford and
          Cambridge. I can swap or rekey deadbolts and entry locks so units
          are ready for the next occupant. Use the{" "}
          <a href="/#quote" className="font-medium text-brand-blue hover:underline">quote form</a> to
          describe the doors and I&apos;ll provide an estimate.
        </p>
      </section>
    </div>
  );
}
