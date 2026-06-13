import { Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/ui/brand-icons";

const items = [
  { href: "https://github.com/acethekawaii", label: "GitHub", Icon: GitHub },
  {
    href: "https://www.linkedin.com/in/ace-gabriel-p-pasiliao-74594b250",
    label: "LinkedIn",
    Icon: LinkedIn,
  },
  { href: "mailto:acegabriel0809@gmail.com", label: "Email", Icon: Mail },
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
