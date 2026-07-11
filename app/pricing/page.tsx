import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  ["Starter", "For focused supplier ESG pilots", "€1,900", ["250 suppliers", "Collect + evidence library", "Standard scoring", "Email support"]],
  ["Growth", "For multi-team procurement programs", "€4,900", ["1,500 suppliers", "Collect, Score, Tasks", "Custom frameworks", "Priority onboarding"]],
  ["Enterprise", "For complex EU supplier networks", "Custom", ["Unlimited suppliers", "Advanced controls", "Security review", "Dedicated success team"]],
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="section-shell pb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Pricing</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-slate lg:text-7xl">
            Pricing that scales with supplier programs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate/64">
            Start with a focused procurement workflow, then expand into scoring, supplier improvement, and portfolio reporting.
          </p>
        </section>
        <section className="section-shell grid gap-5 pb-24 lg:grid-cols-3">
          {tiers.map(([name, description, price, features], index) => (
            <Card key={name as string} className={`p-6 ${index === 1 ? "border-primary/30 shadow-soft" : ""}`}>
              {index === 1 ? (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Most selected</span>
              ) : null}
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate">{name as string}</h2>
              <p className="mt-2 text-sm text-slate/60">{description as string}</p>
              <p className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-slate">{price as string}<span className="text-sm font-normal tracking-normal text-slate/45">{price === "Custom" ? "" : "/mo"}</span></p>
              <div className="mt-7 grid gap-3">
                {(features as string[]).map((feature) => (
                  <span key={feature} className="flex items-center gap-2 text-sm text-slate/68">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {feature}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-8 w-full" variant={index === 1 ? "default" : "outline"}>
                <Link href="/request-demo">Talk to sales</Link>
              </Button>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
