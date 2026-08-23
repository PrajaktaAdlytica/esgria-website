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
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={inverted ? "/vendrecord-logo-white.svg" : "/vendrecord-logo.svg"}
        alt="VendRecord"
        width={384}
        height={64}
        priority={priority}
        className="h-9 w-auto"
      />
    </span>
  );

  return href ? (
    <Link href={href} aria-label="VendRecord home">
      {logo}
    </Link>
  ) : logo;
}
