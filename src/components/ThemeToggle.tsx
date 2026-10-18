"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // private mode etc.
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="icobtn"
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="glyph icon-to-dark">
        <Sun />
      </span>
      <span className="glyph icon-to-light">
        <Moon />
      </span>
    </button>
  );
}
