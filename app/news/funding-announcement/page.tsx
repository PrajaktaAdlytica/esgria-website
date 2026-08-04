import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2 } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Esgexa secures $480K in funding from Dlabs",
  description: "Esgexa has secured $480K in funding from Dlabs, announced May 6, 2026.",
  alternates: { canonical: "/news/funding-announcement" },
  openGraph: {
    title: "Esgexa secures $480K in funding from Dlabs",
    description: "Esgexa has secured $480K in funding from Dlabs, announced May 6, 2026.",
    type: "article",
    publishedTime: "2026-05-06T00:00:00.000Z",
  },
};

export default function FundingAnnouncementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <article className="section-shell pb-24">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate/62 transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <header className="mt-12 max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              <span>Funding announcement</span>
              <span className="h-1 w-1 rounded-full bg-primary/45" aria-hidden="true" />
              <time dateTime="2026-05-06">May 6, 2026</time>
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.055em] text-slate lg:text-7xl">
              Esgexa secures $480K in funding from Dlabs.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate/68">
              Esgexa is part of Dlabs&apos; global portfolio of companies building supplier ESG intelligence for complex operating environments.
            </p>
          </header>

          <div className="mt-14 border-y border-slate/10 py-10">
            <p className="max-w-3xl text-lg leading-8 text-slate/72">Esgexa has secured $480K in funding from Dlabs.</p>
            <Button asChild className="mt-8">
              <a href="https://d-labs-site.vercel.app/companies" target="_blank" rel="noreferrer noopener">
                View Dlabs portfolio <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <aside className="mt-12 max-w-3xl rounded-2xl border border-slate/10 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate">About Esgexa</p>
                <p className="mt-1 text-sm leading-6 text-slate/62">
                  Esgexa builds supplier ESG intelligence for procurement teams, sustainability teams, and suppliers.
                </p>
              </div>
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
}
