"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  ClipboardCheck,
  Menu,
  UploadCloud,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Esgria Collect",
    href: "/products/collect",
    copy: "Questionnaires, supplier portal and evidence intake.",
    icon: UploadCloud,
  },
  {
    name: "Esgria Score",
    href: "/products/score",
    copy: "AI evidence review and consistent ESG scoring.",
    icon: BarChart3,
  },
  {
    name: "Esgria Tasks",
    href: "/products/tasks",
    copy: "Corrective actions, owners and deadlines.",
    icon: ClipboardCheck,
  },
];

const navLinks = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Platform", href: "/#platform" },
  { label: "FAQ", href: "/#faq" },
];

function NavButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 active:scale-95",
        variant === "primary" &&
          "bg-primary text-white shadow-[0_12px_30px_rgba(15,118,110,0.18)] hover:bg-[#0d665f]",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteNav() {
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
        <Link href="/" className="flex items-center" aria-label="Esgria home">
          <span className="relative block h-12 w-28 overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-hairline">
            <Image
              src="/esgria-logo.svg"
              alt="Esgria logo"
              fill
              sizes="112px"
              className="object-cover object-left"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-primary"
              aria-expanded={open}
              aria-haspopup="menu"
            >
              Products
              <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
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
                    <Link
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
                        <span className="mt-1 block text-sm leading-5 text-slate-500">
                          {product.copy}
                        </span>
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavButton href="/sign-in" variant="ghost">
            Sign In
          </NavButton>
          <NavButton href="/request-demo">Request Demo</NavButton>
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
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setMobile(false)}
                  className="hover:text-primary"
                >
                  {product.name}
                </Link>
              ))}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobile(false)}
                  className="hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/sign-in" onClick={() => setMobile(false)} className="hover:text-primary">
                Sign In
              </Link>
              <NavButton href="/request-demo">Request Demo</NavButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
