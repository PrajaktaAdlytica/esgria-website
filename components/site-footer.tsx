import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  [
    "Products",
    { label: "Collect", href: "/products/collect" },
    { label: "Score", href: "/products/score" },
    { label: "Tasks", href: "/products/tasks" },
  ],
  [
    "Company",
    { label: "About", href: "/" },
    { label: "Security", href: "/" },
    { label: "Careers", href: "/" },
  ],
  [
    "Resources",
    { label: "CSRD guide", href: "/request-demo" },
    { label: "Supplier portal", href: "/sign-in" },
    { label: "API", href: "/request-demo" },
  ],
  [
    "Legal",
    { label: "Privacy", href: "/" },
    { label: "DPA", href: "/" },
    { label: "Terms", href: "/" },
  ],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-alternate px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center">
            <span className="relative block h-12 w-28 overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-hairline">
              <Image
                src="/esgria-logo.svg"
                alt="Esgria logo"
                fill
                sizes="112px"
                className="object-cover object-left"
              />
            </span>
          </div>
          <div className="mt-4 max-w-sm space-y-1 text-sm leading-6 text-slate-600">
            <p>Esgria sp. z o.o.</p>
            <p>ul. Prosta 70, 00-838 Warszawa, Poland</p>
            <p>hello@esgria.io</p>
            <p>+48 22 307 14 61</p>
          </div>
        </div>
        {footerColumns.map(([head, ...items]) => (
          <div key={head}>
            <h3 className="font-semibold text-slate-950">{head}</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              {items.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
