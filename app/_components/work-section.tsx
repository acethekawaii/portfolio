import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects, ProjectRow } from "./project-row";
import { Reveal } from "./reveal";

const attendify = projects[0];
const astryss = projects[1];

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Selected work
            </h2>
            <p className="measure mt-2 text-muted">
              The flagship gets the full treatment here. The rest stays short
              so the home page can do its job.
            </p>
          </div>
          <Link href="/work" className="link">
            Everything else is on /work
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </Link>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12 sm:gap-16">
          <ProjectRow project={attendify} index={0} />

          <Reveal y={14}>
            <article className="border-t border-border pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{astryss.name}</h3>
                  <p className="mt-1 text-[0.98rem] text-muted">
                    {astryss.tagline}. A quiet anonymous wall with moderation
                    and no accounts.
                  </p>
                </div>
                {astryss.live && (
                  <a
                    href={astryss.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link shrink-0"
                  >
                    Visit live site
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
