import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

const productContent = {
  collect: {
    label: "Esgexa Collect",
    eyebrow: "Supplier data collection",
    title: "Collect supplier information automatically.",
    description:
      "Distribute ESG questionnaires, collect supporting evidence and keep supplier records organised in one secure workspace.",
    icon: UploadCloud,
    accent: "bg-teal-50 text-primary",
    metric: "94%",
    metricLabel: "average questionnaire completion",
    features: [
      "Configurable ESG questionnaire templates",
      "Supplier portal for evidence uploads",
      "Automated email reminders",
      "Versioned supplier ESG records",
    ],
    workflow: ["Invite supplier", "Collect answers", "Request evidence", "Approve record"],
    outcomes: ["Supplier response rates improve quickly", "Procurement sees missing data by category", "Every record keeps answer and evidence history"],
    capabilities: [
      ["Questionnaire orchestration", "Launch reusable ESG templates by supplier segment, country, category or framework."],
      ["Evidence intake", "Accept certificates, policies and audit files directly from the supplier workspace."],
      ["Reminder automation", "Nudge suppliers before deadlines and escalate overdue requests to the right owner."],
    ],
    metrics: [["3.2x", "faster collection"], ["420", "Polish suppliers onboarded"], ["18", "framework mappings"]],
  },
  score: {
    label: "Esgexa Score",
    eyebrow: "AI ESG scoring",
    title: "Generate trusted ESG scores.",
    description:
      "Analyse supplier evidence using AI-assisted checks and calculate consistent ESG performance scores across your frameworks.",
    icon: BarChart3,
    accent: "bg-lime-50 text-lime-700",
    metric: "86",
    metricLabel: "supplier score preview",
    features: [
      "AI evidence extraction and classification",
      "Framework-weighted score models",
      "Risk category explanations",
      "Procurement-ready supplier comparisons",
    ],
    workflow: ["Review evidence", "Map criteria", "Calculate score", "Publish insight"],
    outcomes: ["Risk scoring becomes consistent across buyers", "AI explains evidence gaps before approval", "Supplier comparisons are ready for sourcing reviews"],
    capabilities: [
      ["AI document review", "Extract dates, issuers, coverage and inconsistencies from certificates and policy files."],
      ["Score governance", "Use weighted criteria, approval states and audit history before scores are shared."],
      ["Risk narratives", "Translate raw supplier evidence into procurement-ready explanations and next actions."],
    ],
    metrics: [["86", "score preview"], ["63%", "less manual review"], ["4", "risk bands"]],
  },
  tasks: {
    label: "Esgexa Tasks",
    eyebrow: "Corrective actions",
    title: "Drive continuous improvement.",
    description:
      "Assign corrective actions, monitor deadlines and keep supplier improvement plans visible to procurement and sustainability teams.",
    icon: ClipboardCheck,
    accent: "bg-slate-100 text-slate-800",
    metric: "12",
    metricLabel: "open improvement tasks",
    features: [
      "Corrective action ownership",
      "Deadline and reminder workflows",
      "Evidence-linked task history",
      "Executive progress reporting",
    ],
    workflow: ["Create task", "Assign owner", "Track evidence", "Close action"],
    outcomes: ["Improvement plans stay visible after scoring", "Suppliers know exactly what evidence to provide", "Leadership can track closure by risk category"],
    capabilities: [
      ["Corrective action plans", "Create tasks directly from missing evidence, low scores or expiring documentation."],
      ["Supplier accountability", "Assign owners, due dates and evidence requirements to internal or supplier teams."],
      ["Progress reporting", "Monitor open actions by region, buyer, supplier category and ESG topic."],
    ],
    metrics: [["12", "open tasks"], ["78%", "on-time closure"], ["24", "upcoming reviews"]],
  },
};

export type ProductKey = keyof typeof productContent;

export function ProductPage({ product }: { product: ProductKey }) {
  const content = productContent[product];
  const Icon = content.icon;

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <section className="background-paths relative overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pt-40">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase text-primary shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {content.eyebrow}
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-demo"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] transition hover:bg-[#0d665f] active:scale-95"
              >
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#platform"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary active:scale-95"
              >
                View Platform
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="rounded-3xl bg-alternate p-6">
              <div className="flex items-center justify-between">
                <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", content.accent)}>
                  <Icon className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-hairline">
                  {content.label}
                </span>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-[0.7fr_1.3fr]">
                <div className="rounded-2xl bg-white p-5 shadow-hairline">
                  <div className="text-5xl font-semibold text-slate-950">{content.metric}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{content.metricLabel}</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-hairline">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <FileCheck2 className="h-4 w-4 text-primary" />
                    Live workflow
                  </div>
                  <div className="space-y-3">
                    {content.workflow.map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-50 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-4">
            {content.features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-alternate p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-soft">
                <Check className="h-5 w-5 text-primary" />
                <p className="mt-5 text-lg font-semibold leading-7 text-slate-950">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alternate px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase text-primary shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Enterprise workflow
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-slate-950">
              Built for procurement, sustainability and supplier teams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {content.label} connects operational supplier work with audit-ready ESG intelligence, so teams can move from collection to decisions without losing context.
            </p>
          </div>
          <div className="grid gap-4">
            {content.capabilities.map(([title, copy], index) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-hairline transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-teal-50 text-primary">
                    {index === 0 && <Layers3 className="h-5 w-5" />}
                    {index === 1 && <DatabaseZap className="h-5 w-5" />}
                    {index === 2 && <Network className="h-5 w-5" />}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {content.metrics.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-5xl font-semibold">{value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-teal-100">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-semibold">Controls teams can trust</h3>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                {["SSO-ready access", "Evidence audit trail", "Role-based permissions", "EU data residency workflows"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Operational outcomes</h3>
              </div>
              <div className="mt-6 grid gap-3">
                {content.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl border border-slate-200 bg-alternate px-4 py-3 text-sm font-semibold text-slate-700">
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
