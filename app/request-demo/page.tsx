import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RequestDemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="section-shell grid gap-12 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Request demo</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate lg:text-7xl">
              See Esgexa on your supplier workflow.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate/64">
              Share your supplier ESG process and our Warsaw team will tailor a walkthrough around questionnaires, evidence, scoring, and corrective actions.
            </p>
            <div className="mt-8 grid gap-4 text-slate/68">
              <span className="flex items-center gap-3"><CalendarCheck className="h-5 w-5 text-primary" /> 30-minute executive walkthrough</span>
              <span className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-primary" /> Security and procurement-ready answers</span>
              <span className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Esgexa sp. z o.o., Warsaw, Poland</span>
            </div>
          </div>
          <Card className="p-6 lg:p-8">
            <form className="grid gap-5">
              {[
                ["Full name", "Anna Nowak"],
                ["Work email", "anna.nowak@company.pl"],
                ["Company", "Vistula Manufacturing S.A."],
                ["Supplier count", "1,000+"],
              ].map(([label, placeholder]) => (
                <label key={label} className="grid gap-2 text-sm font-medium text-slate">
                  {label}
                  <input className="h-12 rounded-xl border border-slate/10 bg-white px-4 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10" placeholder={placeholder} />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-medium text-slate">
                What should we focus on?
                <textarea className="min-h-32 rounded-xl border border-slate/10 bg-white p-4 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10" placeholder="Questionnaire collection, supplier evidence, scoring methodology, corrective actions..." />
              </label>
              <Button type="button" size="lg">Request demo</Button>
            </form>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
