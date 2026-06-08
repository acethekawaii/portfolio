import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200";

const variants = {
  primary:
    "border-transparent bg-accent text-on-accent hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[var(--shadow-lift)] active:translate-y-0 active:shadow-[var(--shadow-soft)]",
  ghost:
    "border-border-strong bg-bg text-ink hover:border-ink hover:bg-surface",
};

const sizes = {
  sm: "h-10 rounded-lg px-3.5 text-[0.92rem]",
  md: "h-[2.875rem] rounded-[0.625rem] px-5 text-[0.9375rem]",
};

function isAppRoute(href: string) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !/\.[a-z0-9]+(?:[?#].*)?$/i.test(href)
  );
}

export function LinkButton({
  children,
  className = "",
  href,
  size = "md",
  target,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (!target && isAppRoute(href)) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} target={target} {...props}>
      {children}
    </a>
  );
}
