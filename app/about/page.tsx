import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../_components/reveal";
import tesdaAwarding from "../../public/assets/TESDA-awarding.jpeg";
import pencilPortrait from "../../public/assets/me/art-pencil-portrait.jpg";
import sketch from "../../public/assets/me/art-sketch.jpg";
import sketchGlasses from "../../public/assets/me/art-sketch-glasses.jpg";

export const metadata: Metadata = {
  title: "About",
};

const artGalleryHref = "https://arcianne.github.io/Gallery";

const artwork = [
  {
    image: pencilPortrait,
    alt: "Pencil portrait of Ace Gabriel P. Pasiliao by arcianne",
    rotate: "rotate-[-1.2deg]",
  },
  {
    image: sketch,
    alt: "Ink sketch of Ace Gabriel P. Pasiliao by arcianne",
    rotate: "rotate-[0.9deg]",
  },
  {
    image: sketchGlasses,
    alt: "Sideways ink sketch of Ace Gabriel P. Pasiliao wearing sunglasses, by arcianne",
    rotate: "rotate-[-0.8deg]",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <Stagger gap={0.1}>
          <StaggerItem y={22} blur>
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.02]">
              Plans first. Ships second. Jokes third.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <div className="measure mt-6 space-y-4 text-[1.0625rem] text-ink-soft">
              <p>
                I&apos;m the kind of engineer who wants to know how things work
                under the hood. I use AI to ship faster, and I&apos;m not
                precious about it, but I don&apos;t let it think for me.
                Backend first, full-stack in practice.
              </p>
              <p>
                &quot;Failing to plan is planning to fail&quot; is not a poster
                line for me; I learned it on stage. I once took a speaking slot
                on deepfakes, skipped the rehearsal, and delivered exactly the
                talk I deserved. Nothing I&apos;ve shipped since has gone in
                unprepared.
              </p>
              <p>
                The line I tell people is simple: give me a problem and room to
                prepare. I&apos;ll come back with a solution.
              </p>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal x={20} y={10} delay={0.15} className="max-w-[34rem]">
          <figure className="rotate-[0.8deg]">
            <div className="border border-border bg-bg p-3 shadow-[var(--shadow-soft)]">
              <Image
                src={tesdaAwarding}
                alt="Awarding ceremony of the NCR Regional Skills Competition in web technologies, medalists holding their prize cheques on the podium"
                placeholder="blur"
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mono mt-3 text-[0.74rem] text-muted">
              NCR Regional Skills Competition, web technologies — silver.
              Proof I can also build with a timer running.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* The art wall: every portrait friends have made, one section, one credit. */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="shell">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,3.4vw,2rem)] font-semibold">
              Drawn by a friend, shipped by me.
            </h2>
            <p className="measure mt-3 text-muted">
              Friends keep drawing me, so the headshot budget stays at zero.
              The sideways one is hung exactly as drawn; the artist has not
              apologized.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-8 sm:grid-cols-3" gap={0.12}>
            {artwork.map((piece) => (
              <StaggerItem
                key={piece.alt}
                as="figure"
                y={20}
                className={piece.rotate}
              >
                <div className="border border-border bg-bg p-3">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    placeholder="blur"
                    sizes="(max-width: 640px) 90vw, 360px"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal y={10} className="mt-6">
            <p className="mono text-[0.8rem] text-muted">
              all art by{" "}
              <a
                href={artGalleryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent-deep transition-colors hover:text-accent"
              >
                arcianne
                <ArrowUpRight size={13} strokeWidth={1.6} />
              </a>{" "}
              — the rest of the gallery is worth your time
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 sm:py-20">
        <Reveal>
          <p className="mono text-[0.82rem] text-muted">
            teammates&apos; words: curious, passionate, harmless mischief
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <Link href="/work" className="link">
              See the work
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
            <Link href="/experience" className="link">
              Read the paper trail
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
