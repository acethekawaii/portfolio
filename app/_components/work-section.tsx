import { ArrowUpRight } from "lucide-react";
import { links, projects, type Project } from "@/lib/content";
import { GitHub } from "@/components/ui/brand-icons";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-border bg-surface">
      {/* faux window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-bg/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        {project.live && (
          <span className="mono ml-2 truncate text-[0.72rem] text-muted">
            {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        )}
      </div>
      {/* monogram plaque on a dotted field */}
      <div
        className="relative flex h-full items-center justify-center"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.85 0.01 230) 1px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      >
        <span
          aria-hidden="true"
          className="select-none text-[clamp(4rem,12vw,7rem)] font-semibold leading-none text-accent"
          style={{ opacity: 0.16 }}
        >
          {project.accentMark}
        </span>
        {project.placeholder && (
          <span className="mono absolute bottom-3 right-4 rounded-md border border-accent-tint bg-accent-tint px-2 py-1 text-[0.68rem] text-accent-deep">
            preview soon
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
      <div className={flip ? "md:order-2" : ""}>
        <ProjectPreview project={project} />
      </div>

      <div className={flip ? "md:order-1" : ""}>
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-1 text-[0.95rem] font-medium text-accent-deep">
          {project.tagline}
        </p>
        <p className="measure mt-3 text-[1.0125rem] text-muted">
          {project.description}
        </p>

        {project.metrics && (
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-lg font-semibold text-ink">{m.value}</dd>
                <dd className="mono text-[0.72rem] text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Visit live site
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
            >
              <GitHub width={17} height={17} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Selected work
            </h2>
            <p className="measure mt-2 text-muted">
              Two projects that are live and used by real people, not localhost
              demos. Case studies for each are on the way.
            </p>
          </div>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            More on GitHub
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {projects.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
