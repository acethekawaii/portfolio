import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { GitHub } from "@/components/ui/brand-icons";
import { ProjectRow, projects } from "../_components/project-row";
import { Reveal, Stagger, StaggerItem } from "../_components/reveal";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <section className="shell py-16 sm:py-24">
        <Stagger className="max-w-3xl" gap={0.1}>
          <StaggerItem y={22} blur>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.02]">
              Work
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="measure mt-5 text-[1.125rem] text-muted">
              Live projects with enough context to judge the decisions behind
              them.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>

        <Reveal y={12} className="mt-16 border-t border-border pt-8">
          <a
            href="https://github.com/acethekawaii"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <GitHub width={17} height={17} />
            More on GitHub
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
