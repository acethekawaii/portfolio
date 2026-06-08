"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/* Lenis smooth scroll with built-in anchor handling for in-page nav links.
   Disabled entirely under prefers-reduced-motion (native scroll takes over). */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        anchors: { offset: -88 },
        lerp: 0.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
