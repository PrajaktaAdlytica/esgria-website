"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  LineChart,
  ListChecks,
  LockKeyhole,
  Network,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroVisual } from "@/components/sections/hero-visual";
import { PlatformDashboard } from "@/components/sections/platform-dashboard";

const problems = [
  ["Supplier Data Collection", "Collecting ESG questionnaires manually wastes valuable procurement time.", ClipboardCheck],
  ["Evidence Verification", "Certificates and supporting documents are difficult to verify.", FileSearch],
  ["Supplier Scoring", "Scoring suppliers consistently across multiple frameworks is difficult.", LineChart],
  ["Corrective Actions", "Improvement plans are rarely tracked centrally.", ListChecks],
];

const products = [
  ["collect", "Esgexa Collect", "Collect supplier information automatically.", "Distribute questionnaires, collect supporting evidence and keep supplier ESG records organised.", "primary"],
  ["score", "Esgexa Score", "Generate trusted ESG scores.", "Analyse supplier evidence using AI and calculate consistent ESG performance scores.", "accent"],
  ["tasks", "Esgexa Tasks", "Drive continuous improvement.", "Assign corrective actions, monitor deadlines and improve supplier ESG performance.", "slate"],
];

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-40">
        <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(circle_at_50%_20%,rgba(15,118,110,0.12),transparent_36rem)]" />
        <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white/70 px-3 py-1.5 text-sm font-medium text-primary shadow-line backdrop-blur"
            >
              <Sparkles className="h-4 w-4" /> AI Supplier ESG Intelligence
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-slate sm:text-6xl lg:text-7xl"
            >
              Collect supplier <span className="accent-underline">ESG data</span> with confidence.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate/68"
            >
              Collect supplier ESG questionnaires, verify supporting evidence, generate AI-powered ESG scores and manage improvement plans from one intelligent platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/request-demo">Request Demo <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">Explore Platform</Link>
              </Button>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Problem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate lg:text-5xl">
              Supplier ESG shouldn't depend on spreadsheets.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate/64">
              Procurement teams spend weeks collecting inconsistent supplier data across emails, spreadsheets and disconnected systems.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problems.map(([title, description, Icon]) => (
              <Card key={title as string} className="group overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-28 items-center justify-center rounded-xl bg-muted">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-slate/62">{description as string}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  See workflow <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate/10 bg-white py-10">
        <div className="section-shell">
          <p className="text-center text-sm font-medium text-slate/48">Trusted by European procurement and sustainability teams</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-slate/38 md:grid-cols-5">
            {["Baltica Foods", "Kowalski Group", "Nordrail", "Vistula Energy", "Lodz Components"].map((logo) => (
              <div key={logo} className="rounded-xl border border-slate/10 bg-[#fcfcfb] py-4">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Solution</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate lg:text-5xl">
              One intelligent supplier ESG workspace.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate/64">
              Collect ESG information, verify evidence, calculate supplier scores and manage corrective actions from one connected platform.
            </p>
            <div className="mt-8 grid gap-4">
              {["EU supplier data residency", "Framework-ready evidence review", "Procurement-grade audit trails"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate">
                  <BadgeCheck className="h-5 w-5 text-primary" /> {item}
                </div>
              ))}
            </div>
          </div>
          <PlatformDashboard />
        </div>
      </section>

      <section className="bg-slate py-24 text-white">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Products</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">
                Built for the full supplier ESG cycle.
              </h2>
            </div>
            <Button asChild variant="outline" className="border-white/15 bg-white/8 text-white hover:bg-white hover:text-slate">
              <Link href="/products">View products</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map(([id, name, headline, description, color]) => (
              <div key={id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="h-44 rounded-xl bg-white p-4 text-slate">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{name}</span>
                    <span className={`h-3 w-3 rounded-full ${color === "accent" ? "bg-accent" : color === "slate" ? "bg-slate" : "bg-primary"}`} />
                  </div>
                  <div className="mt-6 grid gap-2">
                    <div className="h-3 w-3/4 rounded-full bg-slate/10" />
                    <div className="h-3 w-5/6 rounded-full bg-slate/10" />
                    <div className="h-3 w-2/3 rounded-full bg-slate/10" />
                  </div>
                  <div className="mt-6 rounded-xl bg-muted p-3 text-xs text-slate/55">
                    Verified evidence · AI summary · Owner assigned
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{headline}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {[
            ["68%", "faster ESG questionnaire collection"],
            ["3.4x", "more verified supplier evidence"],
            ["41%", "reduction in overdue corrective actions"],
          ].map(([value, label]) => (
            <Card key={value} className="p-8">
              <p className="text-5xl font-semibold tracking-[-0.05em] text-primary">{value}</p>
              <p className="mt-4 text-slate/62">{label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate">Calm control for supplier ESG.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Anna Kowalczyk", "Head of Sustainable Procurement, Warsaw", "Esgexa gave our buyers one reliable place to request data, review evidence, and see supplier risk without chasing files every week."],
              ["Marek Zielinski", "ESG Director, Krakow", "The scoring workflow is clear enough for procurement and rigorous enough for sustainability. That combination is rare."],
            ].map(([name, role, quote]) => (
              <Card key={name} className="p-6">
                <p className="text-lg leading-8 text-slate">“{quote}”</p>
                <p className="mt-6 font-semibold text-slate">{name}</p>
                <p className="mt-1 text-sm text-slate/55">{role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate">Questions procurement teams ask first.</h2>
          </div>
          <div className="grid gap-3">
            {[
              ["Does Esgexa replace spreadsheets?", "Yes. Teams can centralise questionnaires, evidence, scoring, and corrective actions while exporting structured records when needed."],
              ["Can suppliers use it without training?", "Supplier experiences are intentionally simple: secure links, guided uploads, status visibility, and reminders."],
              ["Is it designed for EU companies?", "Yes. The product story, data handling model, and workflows are designed for Poland and EU-based supplier operations."],
            ].map(([q, a]) => (
              <Card key={q} className="p-5">
                <h3 className="font-semibold text-slate">{q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate/62">{a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell rounded-[2rem] bg-primary px-6 py-16 text-center text-white shadow-soft">
          <LockKeyhole className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em]">
            Bring supplier ESG evidence into one verified system.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Esgexa helps procurement and sustainability teams move from scattered requests to trusted supplier intelligence.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="bg-white text-primary hover:bg-accent hover:text-slate">
              <Link href="/request-demo">Request Demo <Network className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
