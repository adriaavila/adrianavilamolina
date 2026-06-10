"use client";

import lottie, { type AnimationItem } from "lottie-web/build/player/lottie_light";
import { useEffect, useRef } from "react";

export function DarkSideOfTheMoon({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animation: AnimationItem | undefined;
    let cancelled = false;

    fetch("/animations/dark-side-of-the-moon.json")
      .then((res) => res.json())
      .then((animationData) => {
        if (cancelled || !containerRef.current) return;
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        animation = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: !prefersReducedMotion,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        });

        if (prefersReducedMotion) {
          animation.goToAndStop(40, true);
        }
      })
      .catch(() => {
        // Background decoration only — fail silently.
      });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
