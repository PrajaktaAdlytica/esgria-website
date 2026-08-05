import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function EsgexaLogo({
  href,
  priority = false,
  className,
}: {
  href?: string;
  priority?: boolean;
  className?: string;
}) {
  const logo = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-hairline">
        <Image
          src="/esgexa-logo-source.svg"
          alt=""
          width={88}
          height={44}
          sizes="88px"
          className="h-11 w-[88px] max-w-none object-cover object-left"
          priority={priority}
        />
        <span className="absolute inset-y-0 right-0 w-2 bg-white" aria-hidden="true" />
      </span>
      <span className="text-lg font-semibold text-slate-950">
        Esge<span className="text-primary">x</span>a
      </span>
    </span>
  );

  return href ? (
    <Link href={href} aria-label="Esgexa home">
      {logo}
    </Link>
  ) : logo;
}
