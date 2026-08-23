import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function VendRecordLogo({
  href,
  priority = false,
  className,
  inverted = false,
}: {
  href?: string;
  priority?: boolean;
  className?: string;
  inverted?: boolean;
}) {
  const logo = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/vendrecord-mark.svg"
        alt=""
        width={64}
        height={64}
        priority={priority}
        className="h-11 w-11"
      />
      <span
        className={cn(
          "whitespace-nowrap text-[1.18rem] font-semibold tracking-[-0.035em]",
          inverted ? "text-white" : "text-slate-950",
        )}
      >
        Vend<span className={inverted ? "text-[#6edbd1]" : "text-primary"}>Record</span>
      </span>
    </span>
  );

  return href ? (
    <Link href={href} aria-label="VendRecord home">
      {logo}
    </Link>
  ) : logo;
}
