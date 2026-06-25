import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhajit Banik | Microsoft Cloud Practitioner, Azure, DevOps, FinOps",
  description:
    "Personal CV and portfolio of Subhajit Banik, Microsoft-certified Azure professional focused on Azure infrastructure, DevOps, FinOps, governance, and AI productivity interests.",
  keywords: [
    "Subhajit Banik",
    "Microsoft Cloud Practitioner",
    "Azure",
    "DevOps",
    "FinOps",
    "SRE",
    "Intune",
    "AI Projects",
    "Kolkata"
  ],
  authors: [{ name: "Subhajit Banik" }],
  creator: "Subhajit Banik",
  openGraph: {
    title: "Subhajit Banik | Microsoft Cloud Practitioner",
    description:
      "Azure infrastructure, DevOps automation, FinOps, governance, and AI productivity portfolio.",
    type: "website",
    locale: "en_IN",
    siteName: "Subhajit Banik CV Portfolio"
  },
  icons: {
    icon: "/favicon.svg"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
