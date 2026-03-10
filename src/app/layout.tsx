import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.johnhenryhomeservices.com"
  ),
  title: {
    default:
      "John Henry Home Services | Handyman, Painter & Carpenter in Somerville, Medford & Cambridge",
    template: "%s | John Henry Home Services",
  },
  description:
    "Fully insured handyman, interior & exterior painting, carpentry, landscaping and small projects in Somerville, Medford, Cambridge, Belmont, Malden, Burlington and Boston, MA. Free estimates.",
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6">
          <Header />
          <main className="flex-1">
            <Breadcrumbs />
            {children}
          </main>
          <footer className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>
                © {new Date().getFullYear()} John Henry Home Services LLC. All
                rights reserved.
              </span>
              <nav className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="/about" className="hover:text-slate-700">About</a>
                <a href="/contact" className="hover:text-slate-700">Contact</a>
                <a href="/services" className="hover:text-slate-700">Services</a>
                <a href="/areas" className="hover:text-slate-700">Service areas</a>
                <a href="/articles" className="hover:text-slate-700">Articles</a>
                <span className="text-slate-400">Somerville • Medford • Cambridge • Greater Boston, MA</span>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

