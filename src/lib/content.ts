const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Muhammad Shaheer",
  handle: "shaheeranser",
  host: "shaheeranser@localhost",
  role: "Full-Stack Software Engineer",
  location: "Lahore, Pakistan",
  timezone: "UTC+05:00",
  email: "shaheer.anser@gmail.com",
  phone: "+92 328 5440010",
  phoneHref: "+923285440010",
  github: "https://github.com/shaheeranser",
  linkedin: "https://linkedin.com/in/shaheeranser",
  resume: `${basePath}/resume.pdf`,
  availability: "Available for full-time & contract — remote",
};

export const navSections = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "competencies", label: "Competencies" },
  { id: "connect", label: "Contact" },
] as const;

export type TerminalInfoRow = {
  k: string;
  v: string;
};

export const terminalInfo: TerminalInfoRow[] = [
  { k: "role", v: profile.role },
  { k: "focus", v: "Cloud & DevOps, Systems" },
  { k: "location", v: profile.location },
  { k: "timezone", v: profile.timezone },
  { k: "status", v: "Open to full-time & contract" },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  date: string;
  level: "active" | "log";
  bullets: string[];
};

export const roles: Role[] = [
  {
    company: "Inspirit360",
    title: "Software Engineer & Technical Consultant",
    location: "Finland · Remote",
    date: "Jan 2026 — present",
    level: "active",
    bullets: [
      "Founding engineer and sole technical owner of a production invoicing portal serving European SME back-office operations.",
      "Built the platform end to end on Next.js, FastAPI and PostgreSQL — from an empty repository to a live production service.",
      "Own the data models, API surface and deployment workflow; advise leadership on technical service expansion.",
    ],
  },
  {
    company: "Alpha Network",
    title: "Machine Learning Intern",
    location: "Remote",
    date: "Aug 2025",
    level: "log",
    bullets: [
      "Built an AI customer-support chatbot, fine-tuning DistilBERT for intent classification and FlanT5 for response generation behind a Flask API.",
      "Synthetically expanded the training corpus to lift intent coverage against sparse support logs.",
    ],
  },
];

export type WorkItem = {
  name: string;
  tag: string;
  tone: "merged" | "open" | "live" | "";
  sub: string;
  href: string;
  /** Internal route (case study) rather than an external link. */
  internal?: boolean;
};

export const projects: WorkItem[] = [
  {
    name: "Lookvisa",
    tag: "platform",
    tone: "live",
    sub: "lookvisa.com · commercial platform connecting investors with investment seekers",
    href: "https://lookvisa.com",
  },
  {
    name: "Invoicing portal",
    tag: "product",
    tone: "live",
    sub: "invoice.inspirit360.eu · production invoicing portal for European SME back-offices",
    href: "https://invoice.inspirit360.eu",
  },
  {
    name: "Exam Proctoring Platform",
    tag: "app",
    tone: "",
    sub: "github.com/shaheeranser/exam-proctor · LTI 1.3 proctoring that runs inside Moodle",
    href: "https://github.com/shaheeranser/exam-proctor",
  },
  {
    name: "watcher",
    tag: "daemon",
    tone: "",
    sub: "case study · tails logs and explains crashes with a local LLM",
    href: "/projects/watcher",
    internal: true,
  },
];

export const opensource: WorkItem[] = [
  {
    name: "reamify",
    tag: "library",
    tone: "",
    sub: "shaheeranser/reamify · MIT · streams PDF tables into XLSX with bounded memory",
    href: "https://github.com/shaheeranser/reamify",
  },
  {
    name: "hijri-api",
    tag: "data",
    tone: "",
    sub: "case study · verified, auditable Hijri calendar data as static JSON",
    href: "/projects/hijri-api",
    internal: true,
  },
  {
    name: "Rotation-aware table-cell hit-testing for slides",
    tag: "merged",
    tone: "merged",
    sub: "genspark-ai/genoffice · 7.6k★ · pull request #171",
    href: "https://github.com/genspark-ai/genoffice/pull/171",
  },
  {
    name: "perf(tables): cut chart detection off quadratic paths",
    tag: "open pr",
    tone: "open",
    sub: "firecrawl/pdf-inspector · pull request #613",
    href: "https://github.com/firecrawl/pdf-inspector/pull/613",
  },
];

export type Skill = {
  label: string;
  color: string;
  logo: string;
  logoColor?: string;
};

export const skills: Array<{ label: string; items: Skill[] }> = [
  {
    label: "Languages",
    items: [
      { label: "TypeScript", color: "3178C6", logo: "typescript", logoColor: "white" },
      { label: "Python", color: "3776AB", logo: "python", logoColor: "white" },
      { label: "Go", color: "00ADD8", logo: "go", logoColor: "white" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { label: "React", color: "61DAFB", logo: "react", logoColor: "20232A" },
      { label: "Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "Node.js", color: "339933", logo: "nodedotjs", logoColor: "white" },
      { label: "Express", color: "000000", logo: "express", logoColor: "white" },
      { label: "FastAPI", color: "009688", logo: "fastapi", logoColor: "white" },
    ],
  },
  {
    label: "Data",
    items: [
      { label: "PostgreSQL", color: "4169E1", logo: "postgresql", logoColor: "white" },
      { label: "MongoDB", color: "47A248", logo: "mongodb", logoColor: "white" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { label: "AWS", color: "232F3E", logo: "amazonwebservices", logoColor: "white" },
      { label: "Azure", color: "0078D4", logo: "microsoftazure", logoColor: "white" },
      { label: "Docker", color: "2496ED", logo: "docker", logoColor: "white" },
      { label: "Kubernetes", color: "326CE5", logo: "kubernetes", logoColor: "white" },
      { label: "GitHub Actions", color: "2088FF", logo: "githubactions", logoColor: "white" },
    ],
  },
];

export const education = [
  {
    degree: "BSc Computer Systems",
    school: "Riphah International University",
    date: "2024 — 2026",
    detail:
      "CGPA 3.71/4.0 · exchange semester at Multimedia University (MMU), Cyberjaya, Malaysia (Apr–Jul 2026).",
  },
  {
    degree: "Associate Degree, Computer Science",
    school: "Riphah International University",
    date: "2022 — 2024",
    detail: "CGPA 3.98/4.0.",
  },
];

export const certifications = [
  { name: "OCI AI Infrastructure Associate", issuer: "Oracle University", date: "2025" },
  { name: "Google AI Essentials", issuer: "Coursera", date: "Aug 2025" },
  {
    name: "AI for Brain-Controlled Applications",
    issuer: "NRG",
    date: "Jul 2025",
  },
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
  { label: "GitHub", value: "github.com/shaheeranser", href: profile.github, external: true },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shaheeranser",
    href: profile.linkedin,
    external: true,
  },
];
