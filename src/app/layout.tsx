import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Henry Home Services | Handyman, Painting, Carpentry in Somerville & Cambridge",
  description:
    "John Henry Home Services LLC offers interior and exterior painting, small remodeling projects, trim and door carpentry, landscaping, gutter cleaning, and drywall repairs in Somerville, Medford, Cambridge, and nearby Massachusetts towns."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6">
          <header className="mb-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Placeholder for existing logo; swap to Image component later */}
              <div className="h-10 w-10 rounded bg-brand-blue" aria-hidden="true" />
              <div>
                <div className="text-lg font-semibold">
                  John Henry Home Services LLC
                </div>
                <div className="text-sm text-slate-500">
                  Fully insured handyman & painting in Somerville, Medford & Cambridge
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end text-sm">
              <span className="font-semibold text-brand-blue">
                Call or text: (617) 863-7629
              </span>
              <span className="text-slate-500">
                Serving Somerville, Medford, Cambridge & nearby
              </span>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>
                © {new Date().getFullYear()} John Henry Home Services LLC. All
                rights reserved.
              </span>
              <span>Somerville • Medford • Cambridge • Greater Boston, MA</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

