import { Mail } from "lucide-react";
import { links, profile } from "@/lib/content";
import { GitHub, LinkedIn } from "@/components/ui/brand-icons";

const items = [
  { href: links.github, label: "GitHub", Icon: GitHub },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedIn },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1.5 ${className}`}>
      {items.map(({ href, label, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-soft transition-colors hover:border-border-strong hover:bg-surface hover:text-ink"
            >
              <Icon width={20} height={20} strokeWidth={1.6} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
