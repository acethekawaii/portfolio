import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { SmoothScroll } from "./_components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acethekawaii.work"),
  title: {
    default: "Ace - Software Engineer",
    template: "%s | Ace",
  },
  description:
    "Backend-leaning full-stack software engineer in Manila, building production-grade web apps with TypeScript, NestJS, Angular, and PostgreSQL. Open to remote roles.",
  keywords: [
    "Ace Gabriel P. Pasiliao",
    "acethekawaii",
    "software engineer",
    "full-stack developer",
  ],
  authors: [
    { name: "Ace Gabriel P. Pasiliao", url: "https://acethekawaii.work" },
  ],
  creator: "Ace Gabriel P. Pasiliao",
  openGraph: {
    title: "Ace - Software Engineer",
    description:
      "Backend-leaning full-stack engineer building production-grade web apps. Open to remote roles.",
    url: "https://acethekawaii.work",
    siteName: "acethekawaii",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <SmoothScroll>
          {/* z-10 plane that scrolls over the sticky footer beneath it */}
          <div className="page-plane relative z-10 flex min-h-dvh flex-col bg-bg">
            <SiteHeader />
            {children}
          </div>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
