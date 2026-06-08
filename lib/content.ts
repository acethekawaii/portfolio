/* Single source of truth for public site content. */

export const links = {
  github: "https://github.com/acethekawaii",
  linkedin: "https://www.linkedin.com/in/ace-gabriel-p-pasiliao-74594b250",
  site: "https://acethekawaii.work",
  discord: "https://discord.com/users/971077954941620276",
} as const;

export const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export type NavigationItem = (typeof navigation)[number];

export const profile = {
  name: "Ace Gabriel P. Pasiliao",
  shortName: "Ace Gabriel Pasiliao",
  role: "Software Engineer",
  location: "Manila, Philippines",
  email: "acegabriel0809@gmail.com",
  resume: "/ace-curriculum-vitae.pdf",
  discordId: "971077954941620276",
} as const;

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  live?: string;
  repo?: string;
  placeholder: boolean;
  accentMark: string;
};

export const projects: Project[] = [
  {
    name: "Attendify v2",
    tagline: "Attendance & face-recognition system",
    description:
      "A production face-recognition attendance system in daily use at a church since October 2024. Handles enrollment, recognition, and reporting end to end.",
    stack: ["Angular", "NestJS", "FastAPI", "Docker", "PostgreSQL"],
    metrics: [
      { value: "16,000+", label: "attendance logs" },
      { value: "2,400+", label: "registered profiles" },
      { value: "Since 2024", label: "in production" },
    ],
    live: "https://attendify.website/",
    repo: "https://github.com/acethekawaii",
    placeholder: true,
    accentMark: "A",
  },
  {
    name: "Astryss",
    tagline: "Anonymous freedom wall",
    description:
      "A freedom wall for sharing thoughts anonymously. People post and read without accounts, with moderation to keep the space usable.",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    live: "https://astryss.acethekawaii.work",
    repo: "https://github.com/acethekawaii/astryss-frontend",
    placeholder: false,
    accentMark: "S",
  },
];

export const skills = {
  primary: [
    "TypeScript",
    "JavaScript",
    "NestJS",
    "Angular",
    "PostgreSQL",
    "REST APIs",
  ],
  also: [
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
  practices: [
    "System design",
    "Clean architecture",
    "Database design",
    "AI-assisted development",
  ],
} as const;

export type Role = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
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
];

export const education = [
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

export const awards = [
  "NCR Regional Skills Competition - Web Technologies, Silver Medalist",
  "Kodego Top Student",
];
