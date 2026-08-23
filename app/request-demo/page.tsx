import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <section className="background-paths relative px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase text-primary shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Request Demo
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl">
              See VendRecord with your supplier ESG workflow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Meet with a VendRecord specialist in Budapest to map your supplier data collection, evidence review and corrective action process.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-600">
              {[
                "Poland and EU supplier programs",
                "CSRD-aligned questionnaire setup",
                "SAP and ERP integration review",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-primary">
                <CalendarDays className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Book a product walkthrough</h2>
                <p className="text-sm text-slate-500">VendRecord Sp. z o.o. · 6818 Park Avenue, Budapest, Budapest (BU), 1024, Hungary</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-primary" placeholder="First name" />
              <input className="h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-primary" placeholder="Last name" />
              <input className="h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-primary sm:col-span-2" placeholder="Work email" type="email" />
              <input className="h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-primary sm:col-span-2" placeholder="Company" />
              <select className="h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-primary sm:col-span-2" defaultValue="">
                <option value="" disabled>Primary team</option>
                <option>Procurement</option>
                <option>Sustainability</option>
                <option>Supplier management</option>
              </select>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-[#0d665f] active:scale-95"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
