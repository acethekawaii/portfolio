"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { useEffect, useState } from "react";

/* Lenis smooth scroll with built-in anchor handling for in-page nav links.
   Disabled entirely under prefers-reduced-motion (native scroll takes over).
   MotionConfig makes every motion.dev animation respect the same preference:
   transforms drop out, opacity crossfades stay. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const content = (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );

  if (reduced) return content;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        anchors: { offset: -88 },
        lerp: 0.1,
      }}
    >
      {content}
    </ReactLenis>
  );
}
