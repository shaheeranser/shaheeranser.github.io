"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "@/components/icons";
import { profile } from "@/lib/content";

type CopyEmailProps = {
  className?: string;
  compact?: boolean;
};

export function CopyEmail({ className = "btn", compact = false }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button
      className={className}
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email address copied" : `Copy email address ${profile.email}`}
    >
      {copied ? <Check /> : <Copy />}
      <span>{copied ? "Copied to clipboard" : compact ? "Copy email" : profile.email}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
