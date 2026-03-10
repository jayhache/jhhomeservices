 "use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("Failed to submit quote request");
      }

      setStatus("success");
    } catch (e) {
      console.error(e);
      setError(
        "Something went wrong sending your request. Please try again or call (617) 863-7629."
      );
      setStatus("error");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(617) 555‑1234"
            />
          </div>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="city">City</label>
            <select id="city" name="city" defaultValue="Somerville" required>
              {[
                "Somerville",
                "Medford",
                "Cambridge",
                "Belmont",
                "Malden",
                "Burlington",
                "Boston",
                "Other"
              ].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="preferredTiming">Preferred timing</label>
            <select
              id="preferredTiming"
              name="preferredTiming"
              defaultValue="Flexible"
            >
              <option>As soon as possible</option>
              <option>Within the next month</option>
              <option>Within the next 3 months</option>
              <option>Flexible</option>
            </select>
          </div>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="serviceType">Type of work</label>
          <select
            id="serviceType"
            name="serviceType"
            required
            defaultValue="Interior painting"
          >
            {[
              "Interior painting",
              "Exterior painting",
              "Small remodeling project",
              "Trim and door carpentry",
              "Landscaping and gardening",
              "Gutter cleaning",
              "Drywall repairs",
              "Furniture assembly & TV mounting",
              "Door adjustments & hardware",
              "Shelving, blinds & picture hanging",
              "Storm doors, screens & seasonal installs",
              "Other"
            ].map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="details">Project details</label>
          <textarea
            id="details"
            name="details"
            rows={5}
            required
            placeholder="What would you like done? Include the room/area, approximate size, and any photos you can share."
          />
          <p className="text-[11px] leading-snug text-slate-500">
            Helpful: address or cross street (optional), photos, access notes,
            and any deadlines.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="budget">Budget range (optional)</label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="e.g. $1,000–$3,000 or unsure"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="howHeard">How did you hear about us? (optional)</label>
            <input
              id="howHeard"
              name="howHeard"
              type="text"
              placeholder="Google, referral, neighbor, etc."
            />
          </div>
        </div>

        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </div>
        )}
        {status === "success" && (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            Thanks for reaching out — your request was sent successfully.
            I&apos;ll follow up with a personalized quote.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full"
        >
          {status === "submitting" ? "Sending..." : "Send request"}
        </button>

        <p className="text-[11px] leading-snug text-slate-500">
          By submitting this form you agree that John Henry Home Services LLC
          may contact you about this project. No pricing is final until you
          receive a written estimate.
        </p>
      </div>
    </form>
  );
}

