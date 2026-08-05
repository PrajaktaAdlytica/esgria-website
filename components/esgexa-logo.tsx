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
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/esgexa-logo.svg"
        alt="Esgexa"
        width={174}
        height={64}
        priority={priority}
        className="h-11 w-auto"
      />
    </span>
  );

  return href ? (
    <Link href={href} aria-label="Esgexa home">
      {logo}
    </Link>
  ) : logo;
}
