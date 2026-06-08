import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="shell flex flex-1 flex-col items-center justify-center py-24 text-center">
        <p className="mono text-[0.85rem] text-accent-deep">Error 404</p>

        <h1 className="mt-4 text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[1.02]">
          This route returned null.
        </h1>

        <p className="measure mt-5 text-[1.0625rem] text-muted">
          The page you wanted isn&apos;t here. Maybe it shipped without a plan,
          maybe the URL was typed from memory. Either way, the parts that
          actually work are back home.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/">Back to home</LinkButton>
          <Link href="/#work" className="link">
            See the work
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </main>
  );
}
