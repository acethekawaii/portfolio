import { Reveal, Stagger, StaggerItem } from "./reveal";

const groups: { label: string; items: readonly string[]; accent?: boolean }[] = [
  {
    label: "Primary stack",
    items: [
      "TypeScript",
      "JavaScript",
      "NestJS",
      "Angular",
      "PostgreSQL",
      "REST APIs",
    ],
    accent: true,
  },
  {
    label: "Also build with",
    items: [
      "React",
      "Next.js",
      "Tailwind",
      "Motion",
      "Lenis",
      "PostHog",
      "Python",
      "FastAPI",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    label: "Practices",
    items: [
      "System design",
      "Clean architecture",
      "Database design",
      "AI-assisted development",
    ],
  },
];

export function StackSection() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-24"
    >
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              The toolkit
            </h2>
            <p className="measure mt-3 text-muted">
              Backend and data layer is home turf; I&apos;m comfortable across
              the full stack (and yes, AI helped me make peace with CSS). Clean
              architecture keeps systems maintainable as they grow.
            </p>
          </Reveal>

          <dl className="flex flex-col gap-7">
            {groups.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 border-t border-border pt-6 sm:grid-cols-[10rem_1fr]"
              >
                <dt className="mono pt-1 text-[0.8rem] text-muted">
                  {group.label}
                </dt>
                <dd>
                  <Stagger as="ul" className="flex flex-wrap gap-2" gap={0.04}>
                    {group.items.map((item) => (
                      <StaggerItem
                        key={item}
                        as="li"
                        y={8}
                        className={`chip ${group.accent ? "chip-accent" : ""}`}
                      >
                        {item}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
