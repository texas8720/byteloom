import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byteloom Digital | We build the systems behind fast-growing companies.",
  description: "Byteloom designs, builds, and automates high-performance digital products for fast-growing startups — from custom Shopify storefronts to AI-powered operations workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

