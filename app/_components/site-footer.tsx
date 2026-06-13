import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { CopyEmail } from "./copy-email";
import { DiscordPresence } from "./discord-presence";
import { Reveal } from "./reveal";
import { SocialLinks } from "./social-links";
import { LinkButton } from "@/components/ui/link-button";

const pages = [
  { href: "/work", label: "/work" },
  { href: "/about", label: "/about" },
  { href: "/experience", label: "/experience" },
] as const;

/* Sticky-reveal footer: the page (a z-10 plane in the layout) scrolls up and
   away while this sits pinned at z-0 underneath, as if the site was resting
   on it the whole time. Sticky only from md: up; on small screens the footer
   can be taller than the viewport, so it stays in normal flow there. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bottom-0 z-0 w-full md:sticky">
      <div className="bg-accent-tint">
        <div className="shell pt-16 sm:pt-20">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <Reveal>
              <h2 className="max-w-[18ch] text-[clamp(1.9rem,5vw,3rem)] font-semibold leading-[1.05]">
                Hiring? You bring the problem. I bring the plan.
              </h2>
              <p className="measure mt-4 text-[1.0625rem] text-ink-soft">
                Open to remote software engineering roles. Email reaches me
                fastest; I reply within a day, which is still quicker than most
                CI pipelines.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CopyEmail email="acegabriel0809@gmail.com" />
                <LinkButton
                  href="/ace-curriculum-vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  <FileText size={17} strokeWidth={1.6} />
                  Resume
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6 md:items-end">
              <ul className="mono flex flex-col gap-2 text-[0.88rem] md:text-right">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-ink-soft transition-colors hover:text-accent-deep"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <DiscordPresence
                href="https://discord.com/users/971077954941620276"
                userId="971077954941620276"
              />
              <SocialLinks />
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-accent-tint-strong py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.85rem] text-ink-soft">
              (c) {year} Ace Gabriel P. Pasiliao
            </p>
            <p className="mono flex items-center gap-1.5 text-[0.76rem] text-ink-soft">
              Built with Next.js & Tailwind
              <a
                href="https://github.com/acethekawaii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-accent-deep"
              >
                Source
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </p>
          </div>
        </div>

        {/* Giant cropped wordmark, the last thing the site rests on. */}
        <div
          aria-hidden="true"
          className="relative h-[clamp(4rem,13vw,10.5rem)] overflow-hidden"
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] select-none whitespace-nowrap text-[clamp(4.4rem,15.5vw,13rem)] font-semibold leading-none tracking-[-0.03em] text-accent-deep">
            acethekawaii
          </span>
        </div>
      </div>
    </footer>
  );
}
