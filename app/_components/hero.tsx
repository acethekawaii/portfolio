import { ArrowDown, FileText, MapPin } from "lucide-react";
import { profile } from "@/lib/content";
import { ProfilePhoto } from "./profile-photo";
import { SocialLinks } from "./social-links";
import { LinkButton } from "@/components/ui/link-button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="shell grid items-center gap-12 pt-16 pb-20 sm:pt-24 sm:pb-28 md:grid-cols-[1.45fr_1fr] md:gap-16">
        <div>
          <p className="mono inline-flex items-center gap-1.5 text-[0.85rem] text-muted">
            <MapPin size={15} strokeWidth={1.6} />
            {profile.location}
          </p>

          <h1 className="mt-5 text-[clamp(2.05rem,6.2vw,3.85rem)] font-semibold leading-[1.02]">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-[34ch] text-[clamp(1.3rem,2.7vw,1.7rem)] font-medium leading-[1.25] text-ink-soft">
            I build the backend systems and APIs that real products run on.
          </p>

          <p className="measure mt-5 text-[1.0625rem] text-muted">
            Backend-leaning, full-stack in practice. Five years shipping
            production web apps with TypeScript, NestJS, Angular, and PostgreSQL,
            including systems still in daily use today, which means they page me
            when they break.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href="#work">
              View work
              <ArrowDown size={17} strokeWidth={1.6} />
            </LinkButton>
            <LinkButton
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <FileText size={17} strokeWidth={1.6} />
              Download resume
            </LinkButton>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <SocialLinks />
            <span className="mono text-[0.78rem] text-muted">
              github.com/acethekawaii
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-76 md:max-w-none">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
