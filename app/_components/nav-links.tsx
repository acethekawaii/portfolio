"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationItem = { href: string; label: string };

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* Nav links rendered as the literal routes they point at (/work, /about...).
   The active route carries an accent rule that slides between links via a
   shared layoutId whenever the route changes. */
export function NavLinks({ items }: { items: readonly NavigationItem[] }) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        const className = `mono relative px-2.5 py-2 text-[0.84rem] transition-colors duration-200 ${
          active ? "text-accent-deep" : "text-muted hover:text-ink"
        }`;

        const underline = active && (
          <motion.span
            layoutId="nav-current"
            aria-hidden="true"
            className="absolute inset-x-2.5 bottom-0 h-0.5 bg-accent"
            transition={{ type: "spring", stiffness: 480, damping: 40 }}
          />
        );

        if (item.href.startsWith("#")) {
          return (
            <a key={item.href} href={item.href} className={className}>
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={className}
          >
            {item.label}
            {underline}
          </Link>
        );
      })}
    </>
  );
}
