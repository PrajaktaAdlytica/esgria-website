import { ClipboardCheck, FileCheck2, LineChart, ListChecks, ShieldCheck, Workflow } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { PlatformDashboard } from "@/components/sections/platform-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: "collect",
    name: "Esgexa Collect",
    headline: "Collect supplier information automatically.",
    description:
      "Distribute ESG questionnaires, collect supporting evidence, route reminders, and keep supplier records organised by framework, country, and buyer.",
    icon: ClipboardCheck,
    points: ["Supplier portal", "Smart reminders", "Evidence library"],
  },
  {
    id: "score",
    name: "Esgexa Score",
    headline: "Generate trusted ESG scores.",
    description:
      "Analyse supplier evidence using AI-assisted review, normalize responses, and produce consistent supplier ESG performance scores.",
    icon: LineChart,
    points: ["AI summaries", "Risk categories", "Audit trail"],
  },
  {
    id: "tasks",
    name: "Esgexa Tasks",
    headline: "Drive continuous improvement.",
    description:
      "Assign corrective actions, monitor deadlines, escalate overdue work, and prove supplier ESG improvements over time.",
    icon: ListChecks,
    points: ["Action owners", "Deadline tracking", "Review cycles"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="section-shell pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Platform</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate lg:text-7xl">
            Supplier ESG intelligence, from request to remediation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate/66">
            Esgexa connects procurement workflows, sustainability evidence, supplier collaboration, and executive ESG reporting in one calm workspace.
          </p>
        </section>
        <section className="section-shell pb-24">
          <PlatformDashboard />
        </section>
        <section className="section-shell grid gap-6 pb-24">
          {products.map((product) => (
            <Card key={product.id} id={product.id} className="grid gap-8 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <product.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{product.name}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate">{product.headline}</h2>
                <p className="mt-4 leading-7 text-slate/64">{product.description}</p>
              </div>
              <div className="rounded-2xl border border-slate/10 bg-muted p-5">
                <div className="grid gap-3 md:grid-cols-3">
                  {product.points.map((point) => (
                    <div key={point} className="rounded-xl bg-white p-4">
                      <FileCheck2 className="h-5 w-5 text-primary" />
                      <p className="mt-4 text-sm font-semibold text-slate">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-white p-5">
                  <div className="flex items-center justify-between border-b border-slate/10 pb-4">
                    <span className="text-sm font-semibold text-slate">Supplier review workflow</span>
                    <Workflow className="h-4 w-4 text-primary" />
                  </div>
                  <div className="mt-5 grid gap-3">
                    {["Request sent", "Evidence verified", "Score calculated", "Action plan active"].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate/68">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>
        <section className="section-shell pb-24">
          <div className="rounded-[2rem] bg-slate p-10 text-white lg:p-14">
            <ShieldCheck className="h-8 w-8 text-accent" />
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em]">Built for procurement reality.</h2>
            <p className="mt-4 max-w-2xl text-white/64">
              Esgexa supports supplier onboarding, periodic review, evidence refreshes, country-level reporting, and corrective action management.
            </p>
            <Button asChild className="mt-8 bg-white text-slate hover:bg-accent">
              <Link href="/request-demo">Request demo</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
