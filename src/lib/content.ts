const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Muhammad Shaheer",
  handle: "shaheeranser",
  host: "shaheeranser.me",
  site: "https://shaheeranser.me",
  role: "Full-Stack Software Engineer",
  focus: "Cloud & DevOps, Systems",
  location: "Lahore, Pakistan",
  timezone: "UTC+05:00",
  email: "hello@shaheeranser.me",
  phone: "+92 328 5440010",
  phoneHref: "+923285440010",
  github: "https://github.com/shaheeranser",
  linkedin: "https://linkedin.com/in/shaheeranser",
  medium: "https://medium.com/@shaheer.anser",
  resume: `${basePath}/resume.pdf`,
  availability: "Available for full-time & contract — remote or relocation",
  availabilityShort: "Open to full-time & contract",
} as const;

export const navSections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export type Role = {
  company: string;
  title: string;
  location: string;
  date: string;
  level: "active" | "log";
  bullets: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    company: "Inspirit360",
    title: "Software Engineer",
    location: "Finland · Remote",
    date: "Jan 2026 — present",
    level: "active",
    bullets: [
      "Founding engineer on an invoicing platform for European SMEs; took it from an empty repository to a deployed service.",
      "Currently maintain the product and its deployment workflow.",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    company: "Alpha Network",
    title: "Machine Learning Intern",
    location: "Remote",
    date: "Aug 2025",
    level: "log",
    bullets: [
      "Fine-tuned DistilBERT and FlanT5 to build an AI customer-support chatbot for intent classification and response generation.",
      "Synthetically expanded the training corpus to lift intent coverage against sparse support logs.",
    ],
    stack: ["Python", "Transformers", "DistilBERT", "FlanT5"],
  },
];

export type RepoStats = {
  stars: number;
  forks: number;
};

export type WorkItem = {
  name: string;
  tag: string;
  tone: "merged" | "open" | "live" | "";
  sub: string;
  href: string;
  /** Internal route (case study) rather than an external link. */
  internal?: boolean;
  /** Key into the build-time GitHub stats map. */
  repo?: string;
  /** Short, honest context shown on project cards. */
  meta?: string;
  /** Tools and concepts involved, shown as chips. */
  stack?: string[];
};

export const projects: WorkItem[] = [
  {
    name: "Lookvisa",
    tag: "commercial",
    tone: "live",
    sub: "A visa platform: designed the core API architecture and data models as backend developer.",
    href: "https://lookvisa.com",
    meta: "Backend · Nov 2024 — Feb 2025",
    stack: ["Backend", "API design", "Data models"],
  },
  {
    name: "Invoicing portal",
    tag: "product",
    tone: "live",
    sub: "An invoicing platform for European SMEs: built end to end from an empty repo to a deployed service.",
    href: "https://invoice.inspirit360.eu",
    meta: "Founding engineer · 2026 — present",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    name: "Exam Proctoring Platform",
    tag: "case study",
    tone: "",
    sub: "For schools running online exams: browser-based proctoring with nothing to install and no video leaving the device.",
    href: "/projects/exam-proctor",
    internal: true,
    meta: "Final-year project · piloted",
    stack: ["LTI 1.3", "TypeScript", "React", "Express", "MongoDB"],
  },
  {
    name: "watcher",
    tag: "case study",
    tone: "",
    sub: "For developers running services: tails logs and explains crashes with a local LLM, with no cloud calls.",
    href: "/projects/watcher",
    internal: true,
    repo: "watcher",
    meta: "Demoed at AI Tinkerers Lahore · Oct 2026",
    stack: ["Go", "Ollama", "SQLite", "systemd"],
  },
];

export const opensource: WorkItem[] = [
  {
    name: "CI/CD & Kubernetes Pipeline",
    tag: "pipeline",
    tone: "",
    sub: "shaheeranser/github-actions-demo · builds and pushes to Azure Container Registry, then deploys to AKS with per-PR staging.",
    href: "https://github.com/shaheeranser/github-actions-demo",
  },
  {
    name: "reamify",
    tag: "library",
    tone: "",
    sub: "shaheeranser/reamify · streams large PDF tables into XLSX with bounded memory.",
    href: "https://github.com/shaheeranser/reamify",
    repo: "reamify",
  },
  {
    name: "hijri-api",
    tag: "data",
    tone: "",
    sub: "pakistan-hijri/hijri-api · verified, auditable Hijri month starts for Pakistan, served as static JSON.",
    href: "/projects/hijri-api",
    internal: true,
    repo: "hijri-api",
  },
  {
    name: "Rotation-aware table-cell hit-testing for slides",
    tag: "merged",
    tone: "merged",
    sub: "genspark-ai/genoffice · pull request #171",
    href: "https://github.com/genspark-ai/genoffice/pull/171",
    repo: "genoffice",
  },
  {
    name: "perf(tables): cut chart detection off quadratic paths",
    tag: "open pr",
    tone: "open",
    sub: "firecrawl/pdf-inspector · pull request #613",
    href: "https://github.com/firecrawl/pdf-inspector/pull/613",
  },
];

export type SkillGroup = {
  label: string;
  note: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    note: "what I reach for first",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    label: "Frontend",
    note: "interfaces that stay out of the way",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend",
    note: "APIs, models, and the seams between",
    items: ["Node.js", "Express", "FastAPI", "REST"],
  },
  {
    label: "Data",
    note: "where the state actually lives",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    label: "Cloud & DevOps",
    note: "from commit to running service",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Caddy",
      "MinIO",
      "Git",
    ],
  },
  {
    label: "Data & ML",
    note: "models running close to the metal",
    items: ["TensorFlow", "TensorFlow.js", "NumPy", "Pandas", "Scikit-learn", "Ollama"],
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
  { label: "Medium", value: "medium.com/@shaheer.anser", href: profile.medium, external: true },
];
