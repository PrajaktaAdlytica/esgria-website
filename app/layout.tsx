import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esgexa | AI Supplier ESG Intelligence",
  description:
    "Collect supplier ESG questionnaires, verify evidence, score suppliers and manage corrective actions from one enterprise platform.",
  metadataBase: new URL("https://esgexa.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/esgexa-mark.svg",
  },
  openGraph: {
    title: "Esgexa | AI Supplier ESG Intelligence",
    description:
      "Collect supplier ESG questionnaires, verify evidence, score suppliers and manage corrective actions from one enterprise platform.",
    url: "https://esgexa.com",
    siteName: "Esgexa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Esgexa",
    url: "https://esgexa.com",
    sameAs: [
      "https://www.linkedin.com/company/esgexa/",
      "https://www.crunchbase.com/organization/esgexa",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
