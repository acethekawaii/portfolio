import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../_components/reveal";
import { LinkButton } from "@/components/ui/link-button";
import introFrontend from "../../public/assets/certs/intro-frontend.jpeg";
import kodegoCert from "../../public/assets/certs/kodego.png";
import uxCert from "../../public/assets/certs/ux-cert.jpeg";

export const metadata: Metadata = {
  title: "Experience",
};

type Role = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  points: readonly string[];
};

type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  credentialLink: string;
  image: StaticImageData;
};

const experience: readonly Role[] = [
  {
    title: "System Developer / Acting Tech Lead",
    org: "Geoplan PH Inc.",
    period: "Mar 2026 - Present",
    current: true,
    points: [
      "Lead a team of 4: technical direction, task breakdown, and delivery quality.",
      "Design system architecture, database models, and API contracts for production web apps.",
      "Balance delivery priorities across client needs, developer capacity, and timelines.",
    ],
  },
  {
    title: "System Developer",
    org: "Geoplan PH Inc.",
    period: "Jun 2023 - May 2024",
    points: [
      "Built and maintained full-stack apps with TypeScript, Angular, NestJS, and PostgreSQL.",
      "Worked in both agile and waterfall delivery; daily scrum.",
      "Mentored two interns on the team's TypeScript stack.",
    ],
  },
  {
    title: "Full-Stack Web Development Trainee",
    org: "Kodego Bootcamp",
    period: "2022 - 2023",
    points: [
      "Trained full-time on the JavaScript stack: HTML, CSS, JavaScript, React, Node, and SQL.",
      "Finished as top student of the cohort and went straight into a developer role.",
    ],
  },
];

const certifications: readonly Certification[] = [
  {
    issuer: "Kodego",
    title: "Full Stack Web Developer",
    issueDate: "Issued March 2023",
    credentialLink:
      "https://www.coursera.org/account/accomplishments/verify/R6KZYFYNMBSX",
    image: kodegoCert,
  },
  {
    issuer: "Coursera",
    title: "Introduction to Front-End Development",
    issueDate: "Issued Jan 2023",
    credentialLink:
      "https://www.coursera.org/account/accomplishments/verify/R6KZYFYNMBSX",
    image: introFrontend,
  },
  {
    issuer: "Coursera",
    title: "Foundations of User Experience (UX) Design",
    issueDate: "Issued Dec 2022",
    credentialLink:
      "https://www.coursera.org/account/accomplishments/verify/7B8FJBYAEYVN",
    image: uxCert,
  },
];

const education = [
  {
    title: "BS Information System",
    org: "AMA University",
    period: "2023 - 2026",
  },
  {
    title: "Full Stack Web Developer Bootcamp",
    org: "Kodego",
    period: "2022 - 2023",
    note: "Top Student",
  },
];

function CertificationRow({ certification }: { certification: Certification }) {
  return (
    <StaggerItem
      as="li"
      y={12}
      className="grid gap-4 border-t border-border py-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
    >
      <div className="w-28 overflow-hidden rounded-lg border border-border bg-bg sm:w-full">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate thumbnail`}
          placeholder="blur"
          sizes="112px"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold">{certification.title}</h3>
        <p className="mt-1 text-[0.94rem] text-muted">
          {certification.issuer} / {certification.issueDate}
        </p>
      </div>
      <a
        href={certification.credentialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mono inline-flex items-center gap-1.5 text-[0.78rem] text-accent-deep transition-colors hover:text-accent"
      >
        verify
        <ArrowUpRight size={14} strokeWidth={1.6} />
      </a>
    </StaggerItem>
  );
}

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <section className="shell py-16 sm:py-24">
        <Stagger className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" gap={0.1}>
          <StaggerItem y={22} blur>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.02]">
              Experience
            </h1>
            <p className="measure mt-5 text-[1.125rem] text-muted">
              The paper trail.
            </p>
          </StaggerItem>
          <StaggerItem className="max-w-sm">
            <p className="mb-3 text-[0.95rem] text-muted">
              Prefer the PDF? Same story, fewer pixels.
            </p>
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
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Work history
            </h2>
          </Reveal>
          <Stagger as="ul" className="space-y-8" gap={0.12}>
            {experience.map((role, index) => (
              <StaggerItem
                as="li"
                key={role.title + role.period}
                className="relative pl-7"
              >
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
                {index < experience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[5px] top-4 h-[calc(100%+1rem)] w-px bg-border"
                  />
                )}
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Certifications
            </h2>
            <p className="measure mt-3 text-muted">
              The ones that mattered. The full pile lives in the resume.
            </p>
          </Reveal>
          <Stagger as="ul" className="border-b border-border" gap={0.1}>
            {certifications.map((certification) => (
              <CertificationRow
                key={certification.title}
                certification={certification}
              />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
              Education
            </h2>
          </Reveal>

          <Stagger as="ul" className="space-y-6" gap={0.1}>
            {education.map((item) => (
              <StaggerItem as="li" key={item.title} y={12}>
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
