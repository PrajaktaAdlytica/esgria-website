"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  FileText,
  Leaf,
  Menu,
  MousePointer2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Table2,
  Target,
  UploadCloud,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { EsgexaLogo } from "@/components/esgexa-logo";
import { EntryHero } from "@/components/entry-hero";

const products = [
  {
    name: "Esgexa Collect",
    href: "#collect",
    copy: "Questionnaires, supplier portal and evidence intake.",
    icon: UploadCloud,
  },
  {
    name: "Esgexa Score",
    href: "#score",
    copy: "AI evidence review and consistent ESG scoring.",
    icon: BarChart3,
  },
  {
    name: "Esgexa Tasks",
    href: "#tasks",
    copy: "Corrective actions, owners and deadlines.",
    icon: ClipboardCheck,
  },
];

const trusted = [
  "Baltic Manufacturing",
  "PolSteel Group",
  "Nova Logistics",
  "Mazovia Foods",
  "Vistula Energy",
  "Gdansk Components",
  "Krakow Packaging",
  "Wroclaw Transit",
];

const stats = [
  ["2.4M+", "supplier records processed"],
  ["91%", "questionnaire completion rate"],
  ["63%", "less manual evidence review"],
  ["18", "EU frameworks mapped"],
];

const completionData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 50 },
  { month: "Mar", value: 61 },
  { month: "Apr", value: 67 },
  { month: "May", value: 73 },
  { month: "Jun", value: 82 },
];

const scoreData = [
  { name: "Low", value: 46, fill: "#0F766E" },
  { name: "Medium", value: 32, fill: "#84CC16" },
  { name: "High", value: 14, fill: "#F59E0B" },
  { name: "Critical", value: 8, fill: "#EF4444" },
];

const countryData = [
  { country: "PL", suppliers: 420 },
  { country: "DE", suppliers: 310 },
  { country: "CZ", suppliers: 180 },
  { country: "SE", suppliers: 136 },
  { country: "NL", suppliers: 122 },
];

const suppliers = [
  ["Kowal Components", "Poland", "92", "Verified", "Low"],
  ["Baltic Glassworks", "Poland", "86", "Review", "Medium"],
  ["Silesia Plastics", "Poland", "78", "Missing evidence", "Medium"],
  ["Vistula Textiles", "Poland", "69", "Action open", "High"],
];

const problemVisuals = [
  {
    chip: "12 requests",
    bars: [86, 58, 74],
    rows: ["Kowal Components", "Baltic Glassworks", "Vistula Textiles"],
    color: "from-teal-50 to-white",
    border: "group-hover:border-teal-300",
  },
  {
    chip: "3 expired",
    bars: [44, 78, 66],
    rows: ["ISO 14001", "Code of Conduct", "Audit report"],
    color: "from-amber-50 to-white",
    border: "group-hover:border-amber-300",
  },
  {
    chip: "86 avg",
    bars: [92, 71, 63],
    rows: ["Environment", "Labour", "Governance"],
    color: "from-lime-50 to-white",
    border: "group-hover:border-lime-300",
  },
  {
    chip: "21 open",
    bars: [38, 64, 82],
    rows: ["CO2 evidence", "Policy update", "Review owner"],
    color: "from-slate-100 to-white",
    border: "group-hover:border-slate-400",
  },
] as const;

const productCards = [
  {
    id: "collect",
    href: "/products/collect",
    title: "Esgexa Collect",
    headline: "Collect supplier information automatically.",
    copy: "Launch questionnaire waves, monitor completion and keep evidence attached to each supplier profile.",
    icon: UploadCloud,
    metric: "94%",
    label: "completion",
    steps: ["Questionnaire sent", "Evidence uploaded", "Record approved"],
    tone: "bg-teal-50 text-primary border-teal-100",
  },
  {
    id: "score",
    href: "/products/score",
    title: "Esgexa Score",
    headline: "Generate trusted ESG scores.",
    copy: "Turn verified supplier evidence into comparable ESG scores with framework mapping and AI explanations.",
    icon: BarChart3,
    metric: "86",
    label: "score",
    steps: ["Evidence parsed", "Criteria mapped", "Risk explained"],
    tone: "bg-lime-50 text-lime-700 border-lime-100",
  },
  {
    id: "tasks",
    href: "/products/tasks",
    title: "Esgexa Tasks",
    headline: "Drive continuous improvement.",
    copy: "Assign corrective actions, track deadlines and close the loop with evidence-backed supplier progress.",
    icon: ClipboardCheck,
    metric: "12",
    label: "tasks",
    steps: ["Owner assigned", "Deadline tracked", "Action closed"],
    tone: "bg-slate-100 text-slate-800 border-slate-200",
  },
] as const;

const faqs = [
  ["How does Esgexa calculate ESG scores?", "Esgexa maps questionnaire answers and evidence to your ESG framework, weights the criteria, and applies AI-assisted checks before publishing a supplier score."],
  ["How is supplier evidence verified?", "Documents are extracted, classified and checked for expiry dates, issuer details, policy coverage and inconsistencies. Teams can approve, reject or request clarification."],
  ["Can suppliers upload documents directly?", "Yes. Suppliers receive a secure portal for questionnaires, certificates, policies, audit reports and follow-up responses."],
  ["Does Esgexa support CSRD?", "Esgexa supports CSRD-aligned supplier data collection and can map custom questions to EU reporting requirements."],
  ["Does Esgexa integrate with SAP?", "Professional and Enterprise plans support ERP integrations including SAP workflows through API and managed connectors."],
  ["Can questionnaires be customised?", "Yes. Teams can create reusable templates, localise questions and assign supplier-specific evidence requirements."],
  ["How are corrective actions tracked?", "Esgexa Tasks assigns owners, deadlines, reminders and status history for each supplier improvement plan."],
  ["What security certifications are supported?", "Enterprise deployments support SSO, audit logs, advanced permissions and security review workflows for ISO 27001 and SOC 2 aligned controls."],
];

function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 active:scale-95",
        variant === "primary" &&
          "bg-primary text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] hover:bg-[#0d665f]",
        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-900 hover:border-primary hover:text-primary",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-hairline">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const nav = (
    <>
      <a href="#products" className="hover:text-primary">
        Products
      </a>
      <a href="#pricing" className="hover:text-primary">
        Pricing
      </a>
      <a href="#demo" className="hover:text-primary">
        Request Demo
      </a>
      <a href="#signin" className="hover:text-primary">
        Sign In
      </a>
    </>
  );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/86 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <EsgexaLogo href="#top" priority />

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-primary"
              aria-expanded={open}
              aria-haspopup="menu"
            >
              Products <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-[360px] rounded-2xl border border-slate-200 bg-white p-2 shadow-soft"
                >
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      onClick={() => setOpen(false)}
                      className="flex gap-3 rounded-xl p-3 transition hover:bg-alternate"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-primary">
                        <product.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold text-slate-950">{product.name}</span>
                        <span className="mt-1 block text-sm leading-5 text-slate-500">{product.copy}</span>
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#pricing" className="hover:text-primary">
            Pricing
          </a>
          <a href="#platform" className="hover:text-primary">
            Platform
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="px-4" id="signin">
            Sign In
          </Button>
          <Button>Request Demo</Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white lg:hidden"
          onClick={() => setMobile((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-sm font-medium">
              {nav}
              <Button className="w-full">Request Demo</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroVisual() {
  const docs = [
    ["Supplier Questionnaire", FileText, "top-[12%] left-[13%] rotate-[-7deg]"],
    ["Certificates", ShieldCheck, "top-[26%] right-[14%] rotate-[5deg]"],
    ["Policies", FileCheck2, "left-[22%] bottom-[28%] rotate-[4deg]"],
    ["Evidence", DatabaseZap, "right-[20%] bottom-[18%] rotate-[-5deg]"],
    ["Audit Reports", ClipboardCheck, "left-[38%] top-[39%] rotate-[1deg]"],
  ] as const;

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(15,118,110,0.16),transparent_34%),linear-gradient(180deg,#fff,rgba(245,247,246,0.82))]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 520" fill="none">
        {[
          "M126 128 C260 90 330 170 498 130",
          "M155 375 C240 300 390 310 506 406",
          "M212 230 C284 282 384 226 474 204",
          "M315 284 C310 190 360 154 490 146",
        ].map((path) => (
          <motion.path
            key={path}
            d={path}
            stroke="#0F766E"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>
      <motion.div
        className="absolute inset-8"
        animate={{ rotate: [0, 1.6, 0, -1.2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {docs.map(([label, Icon, position], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            className={cn(
              "absolute w-48 rounded-2xl border border-slate-200 bg-white/92 p-4 shadow-[0_22px_50px_rgba(15,23,42,0.12)] backdrop-blur",
              position,
            )}
          >
            <div className="flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-lime-50 px-2 py-1 text-[11px] font-semibold text-lime-700">
                <Check className="h-3 w-3" /> verified
              </span>
            </div>
              <div className="mt-4 text-sm font-semibold text-slate-950">{label}</div>
            <div className="mt-3 space-y-2">
              <span className="block h-2 rounded-full bg-slate-100" />
              <span className="block h-2 w-2/3 rounded-full bg-slate-100" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-8 right-8 grid gap-4 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-soft sm:grid-cols-[1fr_auto]"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
            <Sparkles className="h-4 w-4" /> AI analysis complete
          </div>
          <div className="mt-2 text-2xl font-semibold">ESG Score 86/100</div>
          <div className="mt-1 text-sm text-slate-300">3 improvement tasks created for Vistula Textiles.</div>
        </div>
        <div className="grid min-w-36 gap-2 text-sm">
          <span className="rounded-full bg-white/10 px-3 py-2">Policy refresh</span>
          <span className="rounded-full bg-white/10 px-3 py-2">CO2 evidence</span>
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="background-paths relative overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionLabel>AI Supplier ESG Intelligence</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl lg:text-7xl">
            Collect supplier <span className="relative inline-block text-primary">ESG data<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/30" /></span> with confidence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Collect supplier ESG questionnaires, verify supporting evidence, generate AI-powered ESG scores and manage improvement plans from one intelligent platform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-demo"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] transition duration-200 hover:bg-[#0d665f] active:scale-95"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Button variant="secondary">
              Explore Platform <MousePointer2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            {stats.slice(0, 3).map(([value, label]) => (
              <div key={value}>
                <div className="text-2xl font-semibold text-slate-950">{value}</div>
                <div className="mt-1 text-sm leading-5 text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    ["Supplier Data Collection", "Collecting ESG questionnaires manually wastes valuable procurement time.", UploadCloud],
    ["Evidence Verification", "Certificates and supporting documents are difficult to verify.", ShieldCheck],
    ["Supplier Scoring", "Scoring suppliers consistently across multiple frameworks is difficult.", BarChart3],
    ["Corrective Actions", "Improvement plans are rarely tracked centrally.", ClipboardCheck],
  ] as const;
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">Supplier ESG shouldn&apos;t depend on spreadsheets.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Procurement teams spend weeks collecting inconsistent supplier data across emails, spreadsheets and disconnected systems.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map(([title, copy, Icon], index) => (
            <motion.article
              key={title}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={cn(
                "group relative min-h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br p-6 transition duration-300 md:min-h-[390px]",
                problemVisuals[index].color,
                problemVisuals[index].border,
              )}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-44 w-44 bg-[radial-gradient(circle,rgba(15,118,110,0.18),transparent_68%)]" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary shadow-hairline">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-hairline">
                    {problemVisuals[index].chip}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{copy}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                  Inspect workflow <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-hairline backdrop-blur">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Live signal
                    <span className="text-primary">{index === 1 ? "Needs review" : "Active"}</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {problemVisuals[index].rows.map((row, rowIndex) => (
                      <div key={row} className="grid grid-cols-[1fr_84px] items-center gap-3">
                        <span className="truncate text-sm text-slate-600">{row}</span>
                        <span className="block h-2 rounded-full bg-slate-100">
                          <motion.span
                            className="block h-full rounded-full bg-primary/75"
                            initial={{ width: 18 }}
                            whileInView={{ width: `${problemVisuals[index].bars[rowIndex]}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: rowIndex * 0.12 }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-7 items-end gap-1">
                    {[...problemVisuals[index].bars, 52, 88, 47, 69].map((height, barIndex) => (
                      <motion.span
                        key={`${title}-${barIndex}`}
                        className="rounded-t-md bg-primary/20 group-hover:bg-primary/40"
                        initial={{ height: 12 }}
                        whileInView={{ height: 18 + (height % 46) }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: barIndex * 0.04 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const [active, setActive] = useState("Baltic Manufacturing");
  const doubled = [...trusted, ...trusted];
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-alternate py-10">
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Trusted by EU procurement teams</p>
      </div>
      <div className="flex w-max gap-4 logo-marquee hover:[animation-play-state:paused]">
        {doubled.map((name, index) => (
          <button
            key={`${name}-${index}`}
            onClick={() => setActive(name)}
            className={cn(
              "flex h-20 min-w-64 items-center justify-center rounded-2xl border bg-white px-8 text-base font-semibold text-slate-500 transition",
              active === name ? "border-primary text-primary shadow-soft" : "border-slate-200",
            )}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Products</SectionLabel>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">One intelligent supplier ESG workspace.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Collect ESG information, verify evidence, calculate supplier scores and manage corrective actions from one connected platform.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {productCards.map((product) => (
            <motion.article
              id={product.id}
              key={product.title}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-alternate p-6 transition duration-300 hover:border-primary/40 hover:bg-white hover:shadow-soft"
            >
              <Link href={product.href} className="block">
              <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <motion.div
                  className={cn("absolute inset-x-6 top-7 rounded-2xl border p-4", product.tone)}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary">
                      <product.icon className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-semibold">{product.metric}</span>
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase text-slate-500">{product.label}</div>
                  <div className="mt-5 space-y-2">
                    {product.steps.map((step) => (
                      <div key={step} className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {step}
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-5 left-6 right-6 grid grid-cols-6 items-end gap-1"
                  initial={false}
                >
                  {[34, 58, 42, 78, 66, 88].map((height, barIndex) => (
                    <span
                      key={barIndex}
                      className="rounded-t-md bg-slate-200 transition group-hover:bg-primary/35"
                      style={{ height }}
                    />
                  ))}
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,transparent,#fff)]" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{product.headline}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{product.copy}</p>
              <div className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition group-hover:border-primary group-hover:text-primary">
                Open {product.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FundingAnnouncement() {
  return (
    <section className="bg-alternate px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-hairline lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>Funding announcement</SectionLabel>
                <time dateTime="2026-05-06" className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  May 6, 2026
                </time>
              </div>
              <h2 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Esgexa secures $480K in funding from Dlabs.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Esgexa is part of Dlabs&apos; global portfolio of companies building supplier ESG intelligence for complex operating environments.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://d-labs-site.vercel.app/companies"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] transition hover:bg-[#0d665f] active:scale-95"
              >
                View Dlabs portfolio <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/news/funding-announcement"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary active:scale-95"
              >
                Read announcement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const [view, setView] = useState("Overview");
  const views = ["Overview", "Evidence", "Scores", "Tasks"];
  const completion = useMemo(() => completionData, []);

  return (
    <section id="platform" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Platform</SectionLabel>
            <h2 className="text-4xl font-semibold sm:text-5xl">Executive ESG command centre.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Interactive supplier overview, completion rates, pending questionnaires, evidence verification, scores, risk categories, corrective actions and upcoming reviews.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-white text-slate-950 shadow-soft">
          <div className="flex flex-col gap-4 border-b border-slate-200 bg-alternate p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                <Network className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Supplier ESG Overview</div>
                <div className="text-sm text-slate-500">Esgexa Sp. z o.o. · 6818 Park Avenue, Budapest, Budapest (BU), 1024, Hungary</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {views.map((item) => (
                <button
                  key={item}
                  onClick={() => setView(item)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    view === item ? "bg-primary text-white" : "bg-white text-slate-600 shadow-hairline",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
            <aside className="border-b border-slate-200 bg-white p-5 lg:border-b-0 lg:border-r">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <input className="h-11 w-full rounded-full border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-primary" placeholder="Search suppliers" />
              </div>
              <div className="mt-5 space-y-2">
                {["All suppliers", "Evidence review", "High risk", "Tasks due", "Poland"].map((item, index) => (
                  <button key={item} className={cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm", index === 0 ? "bg-teal-50 text-primary" : "text-slate-600 hover:bg-slate-50")}>
                    {item}
                    <span className="text-xs text-slate-400">{[1280, 38, 14, 21, 420][index]}</span>
                  </button>
                ))}
              </div>
            </aside>
            <main className="p-5">
              <div className="grid gap-4 md:grid-cols-4">
                {([
                  ["Completion Rate", "82%", Leaf],
                  ["Pending Questionnaires", "38", FileText],
                  ["Evidence Verified", "1,942", ShieldCheck],
                  ["Upcoming Reviews", "24", Target],
                ] as const).map(([label, value, Icon]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="mt-4 text-2xl font-semibold">{value}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">ESG completion rate</h3>
                    <span className="text-sm text-primary">+18% QoQ</span>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={completion}>
                        <defs>
                          <linearGradient id="completion" x1="0" x2="0" y1="0" y2="1">
                            <stop stopColor="#0F766E" stopOpacity={0.28} />
                            <stop offset="1" stopColor="#0F766E" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#94A3B8" />
                        <YAxis stroke="#94A3B8" />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#0F766E" fill="url(#completion)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">Risk categories</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={scoreData} dataKey="value" innerRadius={54} outerRadius={88} paddingAngle={4}>
                          {scoreData.map((entry) => (
                            <Cell key={entry.name} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">Country</h3>
                  <div className="mt-4 h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={countryData}>
                        <XAxis dataKey="country" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="suppliers" fill="#0F766E" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-2 border-b border-slate-200 p-5 font-semibold">
                    <Table2 className="h-5 w-5 text-primary" /> Supplier scores
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-alternate text-slate-500">
                        <tr>
                          {["Supplier", "Country", "Score", "Evidence", "Risk"].map((head) => (
                            <th key={head} className="px-5 py-3 font-semibold">{head}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {suppliers.map((row) => (
                          <tr key={row[0]} className="border-t border-slate-100">
                            {row.map((cell, index) => (
                              <td key={cell} className={cn("px-5 py-4", index === 0 && "font-semibold text-slate-950")}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    ["Starter", "Growing suppliers", "€299", ["Unlimited questionnaires", "100 suppliers", "AI document extraction", "ESG scoring", "Email reminders", "Standard integrations"]],
    ["Professional", "Most Popular", "€799", ["Unlimited suppliers", "AI verification", "Automated evidence collection", "Risk alerts", "Task management", "API", "ERP integrations", "Priority support"]],
    ["Enterprise", "Custom", "Custom", ["Unlimited organisations", "Multi-region", "Custom ESG frameworks", "Dedicated success manager", "SSO", "Advanced permissions", "Audit logs"]],
  ] as const;
  return (
    <section id="pricing" className="bg-alternate px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Plans for every supplier ESG program.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map(([name, best, price, features]) => (
            <motion.article
              key={name}
              whileHover={{ y: -10, scale: name === "Professional" ? 1.015 : 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={cn("rounded-3xl border bg-white p-6 transition duration-300 hover:shadow-soft", name === "Professional" ? "border-primary shadow-soft" : "border-slate-200 hover:border-primary/40")}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-950">{name}</h3>
                <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", name === "Professional" ? "bg-primary text-white" : "bg-alternate text-slate-500")}>{best}</span>
              </div>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-5xl font-semibold text-slate-950">{price}</span>
                {price !== "Custom" && <span className="pb-2 text-slate-500">/month</span>}
              </div>
              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-600">
                    <Check className="h-5 w-5 shrink-0 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" variant={name === "Enterprise" ? "secondary" : "primary"}>
                {name === "Enterprise" ? "Talk to Sales" : "Start Plan"}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsAndFaq() {
  const testimonials = [
    ["Anna Kowalska", "Head of Sustainable Procurement", "Baltic Manufacturing", "Esgexa reduced supplier ESG collection time from weeks to days. We finally have one trusted source of supplier sustainability data."],
    ["Piotr Nowak", "Procurement Director", "PolSteel Group", "The AI verification process helped our team eliminate manual evidence reviews and improved supplier engagement."],
    ["Katarzyna Wisniewska", "ESG Manager", "Nova Logistics", "We now track supplier improvement plans centrally instead of relying on spreadsheets and email."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Testimonials</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(([name, role, company, quote], index) => (
              <motion.article
                key={name}
                whileHover={{ y: -8, rotate: index === 1 ? 0.35 : -0.35 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={cn(
                  "group rounded-3xl border border-slate-200 p-6 transition duration-300 hover:border-primary/40 hover:shadow-soft",
                  index === 0 && "bg-[linear-gradient(135deg,#f5f7f6,#ffffff)] lg:row-span-2 lg:p-8",
                  index === 1 && "bg-[linear-gradient(135deg,#ecfdf5,#ffffff)]",
                  index === 2 && "bg-[linear-gradient(135deg,#f8fafc,#ffffff)]",
                )}
              >
                <div className="text-5xl font-semibold text-primary">“</div>
                <p className="mt-3 text-xl leading-8 text-slate-800 transition group-hover:text-slate-950">{quote}</p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-sm font-semibold text-white transition group-hover:scale-105">{name.split(" ").map((part) => part[0]).join("")}</span>
                  <div>
                    <div className="font-semibold text-slate-950">{name}</div>
                    <div className="text-sm text-slate-500">{role} · {company}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="bg-alternate px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-semibold text-slate-950">Answers for procurement and sustainability leaders.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-white">
                <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-950">
                  {question}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
                </button>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 leading-7 text-slate-600">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CTAFooter() {
  return (
    <>
      <section id="demo" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] bg-slate-950 p-8 text-white lg:grid-cols-[1fr_420px] lg:p-12">
          <div>
            <SectionLabel>Request Demo</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-semibold sm:text-5xl">See how Esgexa turns supplier ESG chaos into verified intelligence.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Esgexa Sp. z o.o. · 6818 Park Avenue, Budapest, Budapest (BU), 1024, Hungary · hello@esgexa.com
            </p>
          </div>
          <form className="rounded-3xl border border-white/10 bg-white p-5 text-slate-950">
            <div className="grid gap-3">
              <input className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-primary" placeholder="Work email" type="email" />
              <input className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-primary" placeholder="Company" />
              <select className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-primary" defaultValue="">
                <option value="" disabled>Team</option>
                <option>Procurement</option>
                <option>Sustainability</option>
                <option>Supplier management</option>
              </select>
              <Link
                href="/request-demo"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition duration-200 hover:bg-[#0d665f] active:scale-95"
              >
                Book a demo
              </Link>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

export default function Home() {
  return (
    <main>
      <EntryHero />
      <SiteNav revealAfterId="top" />
      <Hero />
      <Problem />
      <TrustedBy />
      <Products />
      <FundingAnnouncement />
      <Platform />
      <Pricing />
      <TestimonialsAndFaq />
      <CTAFooter />
    </main>
  );
}
