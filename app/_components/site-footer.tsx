import { ArrowUpRight, FileText } from "lucide-react";
import { links, profile } from "@/lib/content";
import { CopyEmail } from "./copy-email";
import { DiscordPresence } from "./discord-presence";
import { LinkButton } from "@/components/ui/link-button";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24">
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
            <div>
              <h2 className="text-[clamp(1.9rem,5vw,3rem)] font-semibold leading-[1.05]">
                Let&apos;s build something
                <br className="hidden sm:block" /> that ships.
              </h2>
              <p className="measure mt-4 text-[1.0625rem] text-muted">
                I&apos;m open to remote software engineering roles. Email is the
                fastest way to reach me, and I reply within a day (faster than
                most CI pipelines).
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CopyEmail email={profile.email} />
                <LinkButton
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  <FileText size={17} strokeWidth={1.6} />
                  Resume
                </LinkButton>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <DiscordPresence href={links.discord} userId={profile.discordId} />
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-bg">
        <div className="shell flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.85rem] text-muted">
            (c) {year} {profile.name}
          </p>
          <p className="mono flex items-center gap-1.5 text-[0.76rem] text-muted">
            Built with Next.js & Tailwind
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-accent-deep"
            >
              Source
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
