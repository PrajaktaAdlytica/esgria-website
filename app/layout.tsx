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
  metadataBase: new URL("https://esgexa.com"),
  title: {
    default: "Esgexa | AI Supplier ESG Intelligence",
    template: "%s | Esgexa",
  },
  description:
    "Esgexa helps procurement and sustainability teams collect supplier ESG data, verify evidence, score suppliers, and manage corrective actions.",
  applicationName: "Esgexa",
  keywords: [
    "supplier ESG",
    "ESG data collection",
    "procurement sustainability",
    "supplier scoring",
    "corrective actions",
    "Poland ESG platform",
  ],
  openGraph: {
    title: "Esgexa | AI Supplier ESG Intelligence",
    description:
      "Collect ESG questionnaires, verify evidence, score suppliers, and manage improvement plans from one intelligent platform.",
    url: "https://esgexa.com",
    siteName: "Esgexa",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
