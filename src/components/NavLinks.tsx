"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navSections } from "@/lib/content";

export function NavLinks() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;

    const sections = navSections
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = "";
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) setActive(bestId);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <nav className="site-nav" aria-label="Sections">
      {navSections.map((item, index) => (
        <Link
          className="site-nav-link"
          href={`/#${item.id}`}
          key={item.id}
          aria-current={onHome && active === item.id ? "location" : undefined}
        >
          <span className="site-nav-num" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
