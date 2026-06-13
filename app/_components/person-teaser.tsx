import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sketch from "../../public/assets/me/art-sketch.jpg";
import { Reveal } from "./reveal";

export function PersonTeaser() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="shell grid items-center gap-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
        <Reveal x={-16} y={10} className="max-w-[18rem] rotate-[-1.5deg]">
          <figure>
            <div className="border border-border bg-bg p-3 shadow-[var(--shadow-soft)]">
              <Image
                src={sketch}
                alt="Ink sketch of Ace Gabriel P. Pasiliao by arcianne"
                placeholder="blur"
                sizes="(max-width: 768px) 70vw, 288px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="mono mt-3 text-[0.74rem] text-muted">
              ink on paper, by arcianne
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="text-[clamp(1.7rem,4vw,2.3rem)] font-semibold">
            The person part
          </h2>
          <p className="measure mt-4 text-[1.0625rem] text-ink-soft">
            Curious by default, passionate about the craft, and a known source
            of harmless mischief (a teammate&apos;s words, kept verbatim). A
            friend drew me like this; I figure it&apos;s more honest than
            another headshot.
          </p>
          <Link href="/about" className="link mt-6">
            About the person
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
