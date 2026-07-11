import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate/10 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        className,
      )}
      {...props}
    />
  );
}
