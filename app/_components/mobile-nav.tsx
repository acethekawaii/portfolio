"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import type { NavigationItem } from "./nav-links";

type MobileNavProps = {
  items: readonly NavigationItem[];
  resumeHref: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const panel = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: EASE, staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: EASE } },
};

const row = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
};

export function MobileNav({ items, resumeHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-ink"
        aria-expanded={open}
        aria-controls={navId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X size={20} strokeWidth={1.6} />
        ) : (
          <Menu size={20} strokeWidth={1.6} />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={navId}
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-x-0 top-full border-b border-t border-border bg-bg"
          >
            <nav className="shell flex flex-col py-3" aria-label="Mobile">
              {items.map((item) => {
                const className =
                  "mono rounded-lg px-3 py-3 text-[0.95rem] text-ink-soft transition-colors hover:bg-surface hover:text-ink";

                if (item.href.startsWith("#")) {
                  return (
                    <motion.a
                      key={item.href}
                      variants={row}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </motion.a>
                  );
                }

                return (
                  <motion.div key={item.href} variants={row}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`${className} block`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                variants={row}
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-3 font-medium text-accent-deep"
              >
                Resume
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
