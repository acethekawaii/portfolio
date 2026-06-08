import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { SmoothScroll } from "./_components/smooth-scroll";
import { links, profile } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(links.site),
  title: {
    default: "Ace - Software Engineer",
    template: "%s | Ace",
  },
  description:
    "Backend-leaning full-stack software engineer in Manila, building production-grade web apps with TypeScript, NestJS, Angular, and PostgreSQL. Open to remote roles.",
  keywords: [
    profile.name,
    "acethekawaii",
    "software engineer",
    "full-stack developer",
  ],
  authors: [{ name: profile.name, url: links.site }],
  creator: profile.name,
  openGraph: {
    title: "Ace - Software Engineer",
    description:
      "Backend-leaning full-stack engineer building production-grade web apps. Open to remote roles.",
    url: links.site,
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
      <body className="min-h-dvh flex flex-col">
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
