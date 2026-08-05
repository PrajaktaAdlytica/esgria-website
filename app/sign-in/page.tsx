import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { EsgexaLogo } from "@/components/esgexa-logo";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <section className="background-paths relative px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase text-primary shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Secure workspace access
            </div>
            <h1 className="text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl">
              Sign in to your supplier ESG workspace.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Continue to Esgexa Collect, Score and Tasks with your company account.
            </p>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-8 flex items-center gap-3">
              <EsgexaLogo />
            </div>
            <label className="text-sm font-semibold text-slate-700" htmlFor="email">
              Work email
            </label>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                id="email"
                type="email"
                className="h-12 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-primary"
                placeholder="anna@company.pl"
              />
            </div>
            <label className="mt-5 block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <div className="relative mt-2">
              <LockKeyhole className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                id="password"
                type="password"
                className="h-12 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-primary"
                placeholder="Enter password"
              />
            </div>
            <button
              type="button"
              className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-[#0d665f] active:scale-95"
            >
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-5 text-center text-sm text-slate-500">
              Need access?{" "}
              <Link href="/request-demo" className="font-semibold text-primary">
                Request a demo
              </Link>
            </p>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
