import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2, Linkedin } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "VendRecord secures $480K in funding from Gama VC",
  description: "VendRecord has secured $480K in funding from Gama VC, announced May 6, 2026.",
  alternates: { canonical: "/news/funding-announcement" },
  openGraph: {
    title: "VendRecord secures $480K in funding from Gama VC",
    description: "VendRecord has secured $480K in funding from Gama VC, announced May 6, 2026.",
    type: "article",
    publishedTime: "2026-05-06T00:00:00.000Z",
  },
};

export default function FundingAnnouncementPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <article className="background-paths relative px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <header className="mt-12 max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Funding announcement
            </div>
            <time dateTime="2026-05-06" className="block text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              May 6, 2026
            </time>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl">
              VendRecord secures $480K in funding from Gama VC.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              VendRecord is backed by Gama VC, supporting companies building supplier ESG intelligence for complex operating environments.
            </p>
          </header>

          <div className="mt-12 max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft lg:p-8">
            <p className="text-lg leading-8 text-slate-600">VendRecord has secured $480K in funding from Gama VC.</p>
            <a
              href="https://gamavc.com"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] transition hover:bg-[#0d665f] active:scale-95"
            >
              View Gama VC <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <aside className="mt-6 max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-hairline lg:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-50 text-primary">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">About VendRecord</h2>
                <p className="mt-2 leading-7 text-slate-600">
                  VendRecord builds supplier ESG intelligence for procurement teams, sustainability teams and suppliers.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
              <a
                href="https://www.linkedin.com/company/vendrecord/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.crunchbase.com/organization/vendrecord"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
              >
                Crunchbase <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
