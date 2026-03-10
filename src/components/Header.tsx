"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Service areas" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="John Henry Home Services"
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 object-contain"
          />
          <div>
            <div className="text-lg font-semibold">John Henry Home Services LLC</div>
            <div className="text-sm text-slate-500">
              Fully insured handyman & painting in Somerville, Medford & Cambridge
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side CTA / phone */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#quote"
            className="inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-900"
          >
            Request a quote
          </a>
          <a
            href="tel:+16178637629"
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm hover:bg-slate-50"
            aria-label="Call or text (617) 863-7629"
          >
            (617) 863-7629
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="grid gap-1.5">
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="block h-0.5 w-6 bg-slate-900" />
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:hidden"
        >
          <div className="grid gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 grid gap-2">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-900"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </a>
            <a
              href="tel:+16178637629"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Call/text (617) 863-7629
            </a>
          </div>
          <div className="mt-3 text-xs text-slate-500">
            Serving Somerville, Medford, Cambridge & nearby
          </div>
        </div>
      )}
    </header>
  );
}

