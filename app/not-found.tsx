import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "./_components/reveal";
import { LinkButton } from "@/components/ui/link-button";
import sketchGlasses from "../public/assets/me/art-sketch-glasses.jpg";

export const metadata: Metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <Stagger
        className="shell flex flex-1 flex-col items-center justify-center py-24 text-center"
        gap={0.1}
      >
        <StaggerItem as="figure" y={20} className="mb-8 w-40 rotate-[-7deg]">
          <div className="border border-border bg-bg p-2 shadow-[var(--shadow-soft)]">
            <Image
              src={sketchGlasses}
              alt="Sideways ink sketch of Ace Gabriel P. Pasiliao wearing sunglasses, by arcianne"
              placeholder="blur"
              sizes="160px"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </StaggerItem>

        <StaggerItem>
          <p className="mono text-[0.85rem] text-accent-deep">Error 404</p>
        </StaggerItem>

        <StaggerItem y={18} blur>
          <h1 className="mt-4 text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[1.02]">
            This route returned null.
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="measure mt-5 text-[1.0625rem] text-muted">
            The page you wanted isn&apos;t here. Even the sketch is
            disoriented. Maybe the URL was typed from memory. Either way, the
            parts that actually work are back home.
          </p>
        </StaggerItem>

        <StaggerItem className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/">Back to home</LinkButton>
          <Link href="/work" className="link">
            See the work
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </Link>
        </StaggerItem>
      </Stagger>
    </main>
  );
}
