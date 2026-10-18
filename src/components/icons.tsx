import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Terminal(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="m5 8 4 4-4 4" />
      <path d="M13 16h6" />
    </svg>
  );
}

export function Briefcase(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.5 7V5.5A2.5 2.5 0 0 1 11 3h2a2.5 2.5 0 0 1 2.5 2.5V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function Grid(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  );
}

export function Layers(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3.5 12.5 8.5 4.7 8.5-4.7" />
      <path d="m3.5 16.5 8.5 4.7 8.5-4.7" />
    </svg>
  );
}

export function Mail(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Phone(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function FileText(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

export function Cpu(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

export function Search(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function Sun(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Moon(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function ArrowLeft(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Download(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function Menu(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Github(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export function Package(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function Database(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  );
}

export function GitPullRequest(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 8.5v2a3 3 0 0 1-3 3h-6" />
    </svg>
  );
}

export function Linkedin(p: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
