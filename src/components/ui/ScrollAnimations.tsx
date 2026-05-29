"use client";

import { useEffect } from "react";

const animatedSelector = [
  "main > section",
  "main article",
  "#imprensa a",
  "main img",
].join(",");

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(animatedSelector));

    elements.forEach((element, index) => {
      element.dataset.reveal = "pending";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.reveal = "visible";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
