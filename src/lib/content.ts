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
  availability: "Available for full-time & contract — remote or relocation",
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
    title: "Software Engineer",
    location: "Finland · Remote",
    date: "Jan 2026 — present",
    level: "active",
    bullets: [
      "Founding engineer on an invoicing platform for European SMEs; took it from an empty repository to a deployed service.",
      "Currently maintain the product and its deployment workflow.",
    ],
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
};

export const projects: WorkItem[] = [
  {
    name: "Lookvisa",
    tag: "platform",
    tone: "live",
    sub: "lookvisa.com · backend developer (Nov 2024–Feb 2025): designed core API architecture and data models",
    href: "https://lookvisa.com",
  },
  {
    name: "Invoicing portal",
    tag: "product",
    tone: "live",
    sub: "invoice.inspirit360.eu · founding engineer for European SMEs: built end to end from empty repo to deployed service",
    href: "https://invoice.inspirit360.eu",
  },
  {
    name: "Exam Proctoring Platform",
    tag: "app",
    tone: "",
    sub: "case study · for schools running online exams: browser-based proctoring with nothing to install and no video leaving the device",
    href: "/projects/exam-proctor",
    internal: true,
  },
  {
    name: "watcher",
    tag: "daemon",
    tone: "",
    sub: "case study · for developers running services: tails logs and explains crashes with a local LLM, no cloud calls (demoed AI Tinkerers Lahore Oct 2026)",
    href: "/projects/watcher",
    internal: true,
    repo: "watcher",
  },
];

export const opensource: WorkItem[] = [
  {
    name: "CI/CD & Kubernetes Pipeline",
    tag: "pipeline",
    tone: "",
    sub: "shaheeranser/github-actions-demo · builds/pushes to Azure Container Registry and deploys to AKS with per-PR staging",
    href: "https://github.com/shaheeranser/github-actions-demo",
  },
  {
    name: "reamify",
    tag: "library",
    tone: "",
    sub: "shaheeranser/reamify · for large PDF tables: streams them into XLSX with bounded memory",
    href: "https://github.com/shaheeranser/reamify",
    repo: "reamify",
  },
  {
    name: "hijri-api",
    tag: "data",
    tone: "",
    sub: "case study · for apps that need trustworthy Hijri dates in Pakistan: verified, auditable month starts as static JSON",
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
      { label: "JavaScript", color: "F7DF1E", logo: "javascript", logoColor: "000000" },
      { label: "Python", color: "3776AB", logo: "python", logoColor: "white" },
      { label: "Go", color: "00ADD8", logo: "go", logoColor: "white" },
      { label: "SQL", color: "4479A1", logo: "postgresql", logoColor: "white" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { label: "React", color: "61DAFB", logo: "react", logoColor: "20232A" },
      { label: "Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
      { label: "Vite", color: "646CFF", logo: "vite", logoColor: "white" },
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
      { label: "MySQL", color: "4479A1", logo: "mysql", logoColor: "white" },
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
      { label: "Caddy", color: "1F88C0", logo: "caddy", logoColor: "white" },
      { label: "MinIO", color: "C72E49", logo: "minio", logoColor: "white" },
      { label: "Git", color: "F05032", logo: "git", logoColor: "white" },
    ],
  },
  {
    label: "Data & ML",
    items: [
      { label: "TensorFlow", color: "FF6F00", logo: "tensorflow", logoColor: "white" },
      { label: "TensorFlow.js", color: "FF6F00", logo: "tensorflow", logoColor: "white" },
      { label: "NumPy", color: "013243", logo: "numpy", logoColor: "white" },
      { label: "Pandas", color: "150458", logo: "pandas", logoColor: "white" },
      { label: "Scikit-learn", color: "F7931E", logo: "scikitlearn", logoColor: "white" },
      { label: "Ollama", color: "000000", logo: "ollama", logoColor: "white" },
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
