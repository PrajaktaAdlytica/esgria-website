"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, ClipboardCheck, LineChart, Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Esgexa Collect",
    href: "/products#collect",
    description: "Questionnaires, evidence intake, and supplier records.",
    icon: ClipboardCheck,
  },
  {
    name: "Esgexa Score",
    href: "/products#score",
    description: "AI-assisted supplier ESG scoring and risk signals.",
    icon: LineChart,
  },
  {
    name: "Esgexa Tasks",
    href: "/products#tasks",
    description: "Corrective actions, ownership, and deadlines.",
    icon: ShieldCheck,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate/10 bg-white/82 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate/75 lg:flex">
          <div className="group relative">
            <button className="inline-flex items-center gap-1 transition hover:text-primary">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-8 w-[430px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate/10 bg-white p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="flex gap-4 rounded-xl p-4 transition hover:bg-muted"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <product.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate">{product.name}</span>
                    <span className="mt-1 block text-sm font-normal leading-5 text-slate/60">
                      {product.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/products" className="transition hover:text-primary">
            Platform
          </Link>
          <Link href="/pricing" className="transition hover:text-primary">
            Pricing
          </Link>
          <Link href="/request-demo" className="transition hover:text-primary">
            Request demo
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/request-demo">Request demo</Link>
          </Button>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/10 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate/10 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {[...products, { name: "Pricing", href: "/pricing" }, { name: "Request demo", href: "/request-demo" }, { name: "Sign in", href: "/sign-in" }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
