import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { NavLinks, type NavigationItem } from "./nav-links";
import { LinkButton } from "@/components/ui/link-button";

const navigation: readonly NavigationItem[] = [
  { href: "/work", label: "/work" },
  { href: "/about", label: "/about" },
  { href: "/experience", label: "/experience" },
  { href: "#contact", label: "#contact" },
];

const resumeHref = "/ace-curriculum-vitae.pdf";

/* Flat, solid, opaque bar. No glass, no blur: the header is a fixed plane
   the page scrolls under, same material as the page itself. */
export function SiteHeader() {
  return (
    <header
      className="sticky top-0 border-b border-border bg-bg"
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-baseline text-[0.98rem] font-semibold"
        >
          acethekawaii
          <span className="mono text-accent-deep" aria-hidden="true">
            .work
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <NavLinks items={navigation} />
          <LinkButton
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            className="ml-3"
          >
            Resume
            <ArrowUpRight
              className="text-accent-deep"
              size={16}
              strokeWidth={1.6}
            />
          </LinkButton>
        </nav>

        <MobileNav items={navigation} resumeHref={resumeHref} />
      </div>
    </header>
  );
}
