import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GitHub } from "@/components/ui/brand-icons";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export type Project = {
  name: string;
  tagline: string;
  description: string;
  why: string;
  stack: readonly string[];
  metrics?: readonly { value: string; label: string }[];
  live?: string;
  repo?: string;
  caseStudyHref?: string;
  placeholder: boolean;
  accentMark: string;
};

export const projects: readonly Project[] = [
  {
    name: "Attendify v2",
    tagline: "Attendance and face-recognition system",
    description:
      "Face-recognition attendance for a church: enrollment, recognition, and reporting, built end to end and in daily use since October 2024.",
    why: "Volunteer work. Around 250 people queued every Sunday to sign a paper sheet, and first-time visitors sometimes went unwelcomed. Now check-in is a glance at a camera.",
    stack: ["Angular", "NestJS", "FastAPI", "Docker", "PostgreSQL"],
    metrics: [
      { value: "16,000+", label: "attendance logs" },
      { value: "2,400+", label: "registered profiles" },
      { value: "20 months", label: "in production" },
    ],
    live: "https://attendify.website/",
    repo: "https://github.com/acethekawaii",
    caseStudyHref: "/work/attendify",
    placeholder: true,
    accentMark: "A",
  },
  {
    name: "Astryss",
    tagline: "Anonymous freedom wall",
    description:
      "A freedom wall for sharing thoughts anonymously. People post and read without accounts, with moderation to keep the space usable.",
    why: "Some thoughts do not have anyone to hear them. So I built a quiet place to say them to the stars.",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    live: "https://astryss.acethekawaii.work",
    repo: "https://github.com/acethekawaii/astryss-frontend",
    placeholder: false,
    accentMark: "S",
  },
];

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-border bg-surface">
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

export function ProjectRow({
  project,
  index,
  showCaseStudy = true,
}: {
  project: Project;
  index: number;
  showCaseStudy?: boolean;
}) {
  const flip = index % 2 === 1;

  return (
    <article className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
      <Reveal
        className={flip ? "md:order-2" : ""}
        x={flip ? 28 : -28}
        y={0}
        duration={0.8}
      >
        <ProjectPreview project={project} />
      </Reveal>

      <Stagger className={flip ? "md:order-1" : ""} gap={0.07}>
        <StaggerItem>
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="mt-1 text-[0.95rem] font-medium text-accent-deep">
            {project.tagline}
          </p>
        </StaggerItem>

        {/* Numbers first: the result is the pitch, the prose is the context. */}
        {project.metrics && (
          <StaggerItem>
            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="text-[1.35rem] font-semibold leading-tight text-ink">
                    {metric.value}
                  </dd>
                  <dd className="mono text-[0.72rem] text-muted">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </StaggerItem>
        )}

        <StaggerItem>
          <p className="measure mt-4 text-[1.0125rem] text-muted">
            {project.description}
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-4">
            <p className="mono text-[0.74rem] text-muted">why I built it</p>
            <p className="measure mt-1 text-[0.95rem] leading-[1.55] text-ink-soft">
              {project.why}
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {showCaseStudy && project.caseStudyHref && (
              <Link href={project.caseStudyHref} className="link">
                Read the case study
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </Link>
            )}
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
        </StaggerItem>
      </Stagger>
    </article>
  );
}
