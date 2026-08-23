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
  title: "VendRecord | AI Supplier ESG Intelligence",
  description:
    "Collect supplier ESG questionnaires, verify evidence, score suppliers and manage corrective actions from one enterprise platform.",
  metadataBase: new URL("https://vendrecord.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "VendRecord | AI Supplier ESG Intelligence",
    description:
      "Collect supplier ESG questionnaires, verify evidence, score suppliers and manage corrective actions from one enterprise platform.",
    url: "https://vendrecord.com",
    siteName: "VendRecord",
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
    name: "VendRecord",
    url: "https://vendrecord.com",
    sameAs: [
      "https://www.linkedin.com/company/vendrecord/",
      "https://www.crunchbase.com/organization/vendrecord",
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
