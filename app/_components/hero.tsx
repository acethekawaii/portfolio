import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { ProfilePhoto } from "./profile-photo";
import { Stagger, StaggerItem } from "./reveal";
import { LinkButton } from "@/components/ui/link-button";

const receipts = [
  { value: "16,000+", label: "check-ins logged" },
  { value: "2,400+", label: "faces enrolled" },
  { value: "Oct 2024", label: "live since" },
] as const;

export function Hero() {
  return (
    <section id="top" className="overflow-x-clip">
      <Stagger className="shell pt-16 pb-14 sm:pt-24 sm:pb-18" gap={0.1}>
        <StaggerItem className="flex items-center gap-3.5">
          <ProfilePhoto />
          <p className="mono text-[0.85rem] leading-snug text-muted">
            Ace Gabriel P. Pasiliao
            <br />
            software engineer · Manila · remote-ready
          </p>
        </StaggerItem>

        <StaggerItem y={26} blur>
          <h1 className="mt-8 max-w-[15ch] text-[clamp(2.5rem,7.4vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Give me a problem and room to plan.
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="measure mt-6 text-[1.125rem] text-muted">
            I come back with systems that ship and stay up. Backend-leaning,
            full-stack in practice; five years in TypeScript, NestJS, Angular,
            and PostgreSQL, currently leading a team of four at Geoplan PH.
          </p>
        </StaggerItem>

        <StaggerItem className="mt-9 flex flex-wrap items-center gap-3">
          <LinkButton href="/work">
            See the proof
            <ArrowRight size={17} strokeWidth={1.6} />
          </LinkButton>
          <LinkButton
            href="/ace-curriculum-vitae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            <FileText size={17} strokeWidth={1.6} />
            Resume
          </LinkButton>
        </StaggerItem>
      </Stagger>

      {/* The receipts: real production numbers before any scrolling. */}
      <div className="border-y border-border bg-surface">
        <Stagger
          className="shell flex flex-wrap items-center gap-x-9 gap-y-4 py-5"
          gap={0.07}
          delay={0.5}
        >
          <StaggerItem y={10}>
            <p className="mono text-[0.78rem] text-muted">
              in production right now —{" "}
              <a
                href="https://attendify.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-deep transition-colors hover:text-accent"
              >
                attendify.website
              </a>
            </p>
          </StaggerItem>
          {receipts.map((item) => (
            <StaggerItem key={item.label} y={10} className="flex items-baseline gap-2">
              <span className="text-[1.05rem] font-semibold">{item.value}</span>
              <span className="mono text-[0.74rem] text-muted">
                {item.label}
              </span>
            </StaggerItem>
          ))}
          <StaggerItem y={10} className="ms-auto">
            <Link href="/work/attendify" className="link text-[0.9rem]">
              how it&apos;s built
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
