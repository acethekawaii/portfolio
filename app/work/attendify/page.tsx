import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal, Stagger, StaggerItem } from "../../_components/reveal";

export const metadata: Metadata = {
  title: "Attendify Case Study",
};

const metrics = [
  { value: "16,000+", label: "attendance logs" },
  { value: "2,400+", label: "registered profiles" },
  { value: "Since Oct 2024", label: "in production" },
];

const architecture = [
  {
    title: "Angular web app",
    text: "Enrollment, check-in, and reporting screens for the church team.",
  },
  {
    title: "NestJS API",
    text: "Application logic, API contracts, profile data, and attendance logs.",
  },
  {
    title: "PostgreSQL",
    text: "Persistent records for people, attendance, and reporting.",
  },
];

export default function AttendifyCaseStudyPage() {
  return (
    <main className="flex-1">
      <section className="shell py-16 sm:py-24">
        <Stagger className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end" gap={0.1}>
          <StaggerItem y={22} blur>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.02]">
              Attendify v2
            </h1>
            <p className="measure mt-4 text-[1.125rem] text-muted">
              A production face-recognition attendance system for weekly church
              check-ins, enrollment, and reporting.
            </p>
          </StaggerItem>
          <StaggerItem>
            <LinkButton
              href="https://attendify.website/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Live site
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </LinkButton>
          </StaggerItem>
        </Stagger>

        <Stagger
          as="div"
          className="mt-10 grid gap-3 border-y border-border py-5 sm:grid-cols-3"
          gap={0.08}
          delay={0.3}
        >
          <dl className="contents">
            {metrics.map((metric) => (
              <StaggerItem key={metric.label} y={12}>
                <dt className="mono text-[0.74rem] text-muted">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold">{metric.value}</dd>
              </StaggerItem>
            ))}
          </dl>
        </Stagger>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              The problem
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="measure space-y-4 text-[1.0625rem] text-ink-soft">
            <p>
              Every Sunday around 250 people came through our church doors, and
              every one of them stopped to sign a paper attendance sheet. The
              line backed up.
            </p>
            <p>
              Worse, the church has a tradition of welcoming first-time
              visitors, and on busy mornings some got missed. Nobody should
              slip through a door that is supposed to know your name.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              What I built
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="measure space-y-4 text-[1.0625rem] text-ink-soft">
            <p>
              I built enrollment, recognition, and reporting end to end. Check-in
              is a glance at a camera; first-timers flash on screen so the
              welcome team never misses anyone.
            </p>
            <p>
              It was volunteer work, built free. When you&apos;re starting out,
              offer your work for free; the production experience pays better
              than the invoice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
                How it&apos;s put together
              </h2>
            </Reveal>
            <div>
              <Stagger
                className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch"
                gap={0.12}
              >
                {architecture.map((item, index) => (
                  <div key={item.title} className="contents">
                    <StaggerItem
                      y={14}
                      className="rounded-xl border border-border bg-bg p-5"
                    >
                      <h3 className="mono text-[0.9rem] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] text-muted">
                        {item.text}
                      </p>
                    </StaggerItem>
                    {index < architecture.length - 1 && (
                      <StaggerItem
                        aria-hidden="true"
                        y={0}
                        className="mono hidden items-center text-muted lg:flex"
                      >
                        -&gt;
                      </StaggerItem>
                    )}
                  </div>
                ))}
              </Stagger>

              <Reveal y={14} className="mt-3 rounded-xl border border-accent-tint-strong bg-accent-tint p-5">
                <h3 className="mono text-[0.9rem] text-accent-deep">
                  FastAPI face-recognition service
                </h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">
                  Runs alongside the main API for face recognition. The web app,
                  API, recognition service, and database run in Docker.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Status
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure text-[1.0625rem] text-ink-soft">
              Attendify has been in production since October 2024. The
              attendance logs and registered profiles are still climbing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Screens
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
            {/* TODO: real screenshots */}
            <div
              className="flex h-full items-center justify-center"
              style={{
                backgroundImage:
                  "radial-gradient(oklch(0.85 0.01 230) 1px, transparent 1.4px)",
                backgroundSize: "18px 18px",
              }}
            >
              <span className="mono rounded-md border border-accent-tint-strong bg-accent-tint px-3 py-1.5 text-[0.8rem] text-accent-deep">
                real captures land here later
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="shell flex flex-wrap items-center gap-5">
          <Link href="/work" className="link">
            Back to work
          </Link>
          <a
            href="https://attendify.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Visit live site
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </div>
      </section>
    </main>
  );
}
