"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  Menu,
  UploadCloud,
  X,
} from "lucide-react";
import { useState } from "react";

const entryLinks = [
  { label: "Products", href: "#products", dropdown: true },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "News", href: "/news/funding-announcement" },
];

const productSignals = [
  {
    label: "Collect",
    copy: "Automate evidence collection across your suppliers.",
    icon: UploadCloud,
  },
  {
    label: "Score",
    copy: "Validate and score ESG performance with confidence.",
    icon: BarChart3,
  },
  {
    label: "Tasks",
    copy: "Assign, track and close actions that drive impact.",
    icon: ClipboardCheck,
  },
] as const;

export function EntryHero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      aria-labelledby="entry-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#07110f] text-white"
    >
      <motion.div
        className="absolute -inset-[3%] -z-20"
        initial={{ scale: 1.04, x: 0 }}
        animate={{ scale: [1.04, 1.09, 1.04], x: [0, -18, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src="/vendrecord-entry-evidence.png"
          alt="Supplier ESG evidence documents connected through VendRecord verification intelligence"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-black/35 sm:bg-black/16" aria-hidden="true" />

      <header className="relative z-30 border-b border-white/15">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="inline-flex items-center" aria-label="VendRecord home">
            <Image src="/vendrecord-logo-white.svg" alt="VendRecord" width={244} height={64} priority className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 lg:flex">
            {entryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 py-2 transition hover:text-white"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/sign-in"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
            >
              Request demo
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle entry navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/15 bg-[#07110f]/95 backdrop-blur-xl lg:hidden"
            >
              <nav className="grid gap-1 px-5 py-5 text-sm font-medium sm:px-8">
                {entryLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-white/80"
                >
                  Sign in
                </Link>
                <Link
                  href="/request-demo"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 font-semibold text-slate-950"
                >
                  Request demo
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/68">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI Supplier ESG Intelligence
          </div>
          <h1
            id="entry-heading"
            className="text-[clamp(3.25rem,7.8vw,7rem)] font-medium leading-[0.82] tracking-[0] text-white"
          >
            Vend<span className="text-[#69d2c8]">Record</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-white/86 sm:text-2xl">
            Supplier ESG intelligence, verified.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#top"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(15,118,110,0.28)] transition hover:bg-[#12877e] active:scale-95"
            >
              Enter the platform <ArrowDown className="h-4 w-4" />
            </a>
            <Link
              href="/request-demo"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-black/15 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 active:scale-95"
            >
              Request demo
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 overflow-x-auto border-t border-white/15 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex min-w-[720px] max-w-[1440px] divide-x divide-white/15 px-5 sm:px-8 lg:grid lg:min-w-0 lg:grid-cols-[1fr_1fr_1fr_auto] lg:px-12">
          {productSignals.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.12, duration: 0.55 }}
              className="flex min-h-28 w-60 shrink-0 items-center gap-4 px-5 py-4 first:pl-0 lg:min-h-24 lg:w-auto lg:px-6 lg:py-5 first:lg:pl-0"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/8 text-[#75ddd3]">
                <item.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-white">{item.label}</span>
                <span className="mt-1 block text-sm text-white/52">{item.copy}</span>
              </span>
              {index === 2 && <Check className="ml-auto hidden h-4 w-4 text-accent xl:block" />}
            </motion.div>
          ))}
          <a
            href="#top"
            className="hidden min-h-24 items-center justify-between gap-5 py-5 pl-8 text-sm font-medium text-white/62 transition hover:text-white lg:flex"
          >
            Scroll to explore <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
