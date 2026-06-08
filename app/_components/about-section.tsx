import { awards, education, experience } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
          About
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <div className="measure space-y-4 text-[1.0625rem] text-ink-soft">
              <p>
                I started on the backend and grew into full-stack work, the kind
                of engineer who reaches for a clear data model and a sensible API
                before writing a line of UI. Today I&apos;m Acting Tech Lead at
                Geoplan PH, setting technical direction for a team of four.
              </p>
              <p className="text-muted">
                I plan before I build. &ldquo;Failing to plan is planning to
                fail&rdquo; isn&apos;t a poster on the wall for me; it&apos;s the
                reason the systems I ship keep running after launch.
              </p>
            </div>

            <ol className="mt-9 space-y-8">
              {experience.map((role) => (
                <li key={role.title + role.period} className="relative pl-7">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
                  <span
                    aria-hidden="true"
                    className="absolute left-[5px] top-4 h-[calc(100%+1rem)] w-px bg-border last:hidden"
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-[1.05rem] font-semibold">
                      {role.title}
                    </h3>
                    <span className="mono text-[0.78rem] text-muted">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-[0.92rem] font-medium text-accent-deep">
                    {role.org}
                    {role.current && (
                      <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-muted">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="mono text-[0.7rem]">current</span>
                      </span>
                    )}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[0.95rem] text-muted">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mono text-[0.8rem] text-muted">Education</h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-medium">{item.title}</p>
                      <span className="mono text-[0.74rem] text-muted">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[0.9rem] text-muted">
                      {item.org}
                      {item.note && (
                        <span className="text-accent-deep"> - {item.note}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mono text-[0.8rem] text-muted">Recognition</h3>
              <ul className="mt-4 space-y-3">
                {awards.map((award) => (
                  <li key={award} className="flex gap-3 text-[0.95rem]">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-ink-soft">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
