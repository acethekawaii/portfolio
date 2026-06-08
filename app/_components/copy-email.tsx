"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-border-strong bg-bg p-1 pl-1.5">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors hover:bg-surface"
      >
        <Mail className="text-accent-deep" size={20} strokeWidth={1.6} />
        <span className="mono">{email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
      >
        {copied ? (
          <Check className="text-accent" size={20} strokeWidth={1.6} />
        ) : (
          <Copy size={20} strokeWidth={1.6} />
        )}
      </button>
    </div>
  );
}
