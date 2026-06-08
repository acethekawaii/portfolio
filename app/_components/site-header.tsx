import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { navigation, profile } from "@/lib/content";
import { MobileNav } from "./mobile-nav";
import { LinkButton } from "@/components/ui/link-button";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 border-b border-border bg-[oklch(1_0_0_/_0.88)] backdrop-blur-md"
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <div className="shell flex h-17 items-center justify-between gap-4">
        <Link
          href="/#top"
          className="group inline-flex items-baseline text-[0.98rem] font-semibold"
        >
          acethekawaii
          <span className="mono text-accent-deep" aria-hidden="true">
            .work
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[0.92rem] text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <LinkButton
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            className="ml-2"
          >
            Resume
            <ArrowUpRight className="text-accent-deep" size={16} strokeWidth={1.6} />
          </LinkButton>
        </nav>

        <MobileNav items={navigation} resumeHref={profile.resume} />
      </div>
    </header>
  );
}
