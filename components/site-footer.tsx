import Link from "next/link";
import { EsgexaLogo } from "@/components/esgexa-logo";

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
    { label: "News", href: "/news/funding-announcement" },
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
            <EsgexaLogo href="/" />
          </div>
          <div className="mt-4 max-w-sm space-y-1 text-sm leading-6 text-slate-600">
            <p>Esgexa sp. z o.o.</p>
            <p>6818 Park Avenue, Budapest, Budapest (BU), 1024, Hungary</p>
            <p>hello@esgexa.com</p>
            <p>06 03 160 5553</p>
            <a href="https://www.linkedin.com/company/esgexa/" target="_blank" rel="noreferrer noopener" className="mt-1 inline-flex text-slate-600 transition hover:text-primary">
              LinkedIn
            </a>
            <a href="https://www.crunchbase.com/organization/esgexa" target="_blank" rel="noreferrer noopener" className="inline-flex text-slate-600 transition hover:text-primary">
              Crunchbase
            </a>
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
