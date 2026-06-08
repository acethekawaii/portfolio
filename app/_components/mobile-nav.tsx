"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { NavigationItem } from "@/lib/content";

type MobileNavProps = {
  items: readonly NavigationItem[];
  resumeHref: string;
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
        {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
      </button>

      <div
        id={navId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-t border-border bg-bg"
      >
        <nav className="shell flex flex-col py-3" aria-label="Mobile">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-3 font-medium text-accent-deep"
          >
            Resume
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </nav>
      </div>
    </div>
  );
}
