import Link from "next/link";
import { cn } from "@/lib/utils";

export function EsgexaMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-9 w-9", className)}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="18" fill="#0F766E" />
      <path
        d="M20 18.5C20 17.12 21.12 16 22.5 16H44V22.5H27.2V29H40.5V35H27.2V41.5H44V48H22.5C21.12 48 20 46.88 20 45.5V18.5Z"
        fill="white"
      />
      <path
        d="M37.5 20.5L49 32L37.5 43.5"
        stroke="#84CC16"
        strokeWidth="5.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49 20.5L37.5 32L49 43.5"
        stroke="#84CC16"
        strokeWidth="5.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 font-semibold tracking-[-0.02em]", className)}
      aria-label="Esgexa home"
    >
      <EsgexaMark />
      <span className="text-[1.12rem] font-semibold text-slate">
        Esg<span className="text-primary">x</span>a
      </span>
    </Link>
  );
}
