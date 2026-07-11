import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";

const footerGroups: Array<{ title: string; links: string[] }> = [
  { title: "Product", links: ["Collect", "Score", "Tasks", "Platform"] },
  { title: "Company", links: ["About", "Security", "Customers", "Careers"] },
  { title: "Resources", links: ["ESG frameworks", "Supplier guide", "Documentation", "Status"] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate/10 bg-white">
      <div className="section-shell grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate/62">
            AI Supplier ESG Intelligence for European procurement, sustainability, and supplier teams.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate/64">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> ul. Prosta 20, 00-850 Warszawa, Poland
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@esgexa.com
            </span>
          </div>
        </div>
        {footerGroups.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-sm font-semibold text-slate">{title}</h3>
            <div className="mt-4 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link}
                  href={link === "Platform" ? "/products" : "#"}
                  className="text-sm text-slate/62 transition hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="section-shell flex flex-col gap-3 border-t border-slate/10 py-6 text-sm text-slate/55 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Esgexa sp. z o.o. All rights reserved.</span>
        <span>esgexa.com</span>
      </div>
    </footer>
  );
}
