// Project case studies. One entry per project; the /projects/[slug] route renders
// whatever is here, so adding a project is a single object — no new plumbing.

export type ProjectLinkKind = "repo" | "live" | "extra";

export type ProjectLink = {
  label: string;
  href: string;
  kind?: ProjectLinkKind;
};

export type CalloutRow = {
  label: string;
  value: string;
};

export type ProjectSection =
  | { kind: "prose"; id?: string; heading?: string; paragraphs: string[] }
  | { kind: "code"; id?: string; heading?: string; label?: string; lines: string[] }
  | {
      kind: "steps";
      id?: string;
      heading?: string;
      intro?: string;
      items: { title: string; text: string }[];
    }
  | {
      kind: "list";
      id?: string;
      heading?: string;
      intro?: string;
      tone?: "built" | "gap";
      items: string[];
    }
  | {
      kind: "callout";
      id?: string;
      badge?: string;
      title: string;
      rows: CalloutRow[];
      meta?: string[];
      foot?: string;
    }
  | {
      kind: "links";
      id?: string;
      heading?: string;
      intro?: string;
      items: { label: string; href: string; note?: string; tag?: string }[];
    };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: string;
  stack: string[];
  links: ProjectLink[];
  /** Optional path to a light/dark logo under /public. */
  logo?: string;
  body: ProjectSection[];
};

const installCommand =
  "curl -fsSL https://github.com/shaheeranser/watcher/releases/latest/download/install.sh | sudo sh";

export const caseStudies: Project[] = [
  {
    slug: "exam-proctor",
    name: "Exam Proctoring Platform",
    tagline: "Proctoring that never leaves the browser.",
    summary:
      "An LTI 1.3 exam platform that launches inside Moodle and proctors exams with nothing to install. Detection runs in a web worker on the student's device, so no video leaves the machine — only flagged incident snapshots are kept, on a server the school runs itself.",
    status: "Apache-2.0 · final-year project, piloted",
    stack: ["LTI 1.3", "TypeScript", "React", "Express", "MongoDB", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shaheeranser/exam-proctor",
        kind: "repo",
      },
    ],
    body: [
      {
        kind: "prose",
        paragraphs: [
          "Online exams need supervision, and the usual answers are both awkward. A desktop client has to be installed and maintained on every machine in a lab; a cloud proctoring service streams webcam video off-site, which is hard to justify to students and hard to defend on privacy.",
          "This platform takes the opposite route. It is an LTI 1.3 tool, so from the student's side there is nothing to install and nothing new to learn: they click the exam in Moodle and it opens. Detection runs entirely in the browser, in a web worker, and the video never leaves the device. Only the moments that matter are kept, as snapshots on a server the school runs itself.",
        ],
      },
      {
        kind: "steps",
        heading: "From a Moodle click to a graded result",
        intro:
          "One Express service is the LTI tool, the API and the host for the React client; MongoDB, MinIO and Caddy run alongside it in Docker.",
        items: [
          {
            title: "Launch",
            text: "Moodle sends an LTI 1.3 launch. Instructors are routed to the teacher views, everyone else to the exam — the role, course and user come from the LMS, not from a second account.",
          },
          {
            title: "Build",
            text: "Teachers write quizzes inside the tool: questions, options, correct answers and per-question scores, with a draft/publish flow, an optional schedule and duration, and access limited to a course enrolment or an explicit allowlist.",
          },
          {
            title: "Proctor",
            text: "During the attempt a web worker runs face detection, multiple-person detection and presence checks with MediaPipe Tasks Vision, TensorFlow.js and face-api, alongside visibility and tab-switch guards. All of it is computed on the device.",
          },
          {
            title: "Strike",
            text: "Violations accumulate against a configurable soft-violation limit. Soft and hard incidents are separate severities, so a glance away and a second person on screen are not treated the same.",
          },
          {
            title: "Snapshot",
            text: "An identity snapshot is taken at the start and a frame is captured on each incident, then uploaded to a self-hosted MinIO bucket. The continuous video stream is never uploaded.",
          },
          {
            title: "Review and grade",
            text: "Teachers watch in-progress attempts over server-sent events, pause or resume a single attempt, and review flagged attempts to uphold, dismiss or grant a retest. Scoring is automatic and the final grade is passed back to Moodle over LTI AGS, with retries.",
          },
        ],
      },
      {
        kind: "list",
        heading: "What is actually there",
        tone: "built",
        items: [
          "An LTI 1.3 tool (ltijs) that launches from Moodle and returns grades through LTI AGS.",
          "Browser-side detection in a web worker: face, multiple-person, presence, and visibility/tab-switch guards.",
          "An incident model with soft and hard severity and a configurable strike limit.",
          "Self-hosted snapshot storage in MinIO, with an identity snapshot taken at exam start.",
          "A teacher quiz builder, scheduling, enrolment/allowlist control, and a live dashboard of running attempts.",
          "A Docker Compose stack (Express, MongoDB, MinIO, Caddy) and a one-shot EC2 deploy script that provisions Let's Encrypt certificates.",
        ],
      },
      {
        kind: "list",
        heading: "Where this stands",
        intro:
          "This was a final-year project and it has been piloted rather than rolled out, so the honest position matters more than a pitch.",
        tone: "gap",
        items: [
          "Piloted, not production: it has been demonstrated end to end against a real Moodle instance, but it has not run a full real exam cycle.",
          "Detection is heuristic. It narrows the obvious cases; it is not a claim of cheating-proofness, and a flagged incident is a prompt for a human to review, not an automatic verdict.",
          "Setup is heavier than a typical web app: it needs two external Docker networks and a registered LTI tool. The cold-start walkthrough lives in SETUP.md.",
        ],
      },
      {
        kind: "links",
        heading: "Read the code",
        items: [
          {
            label: "Repository",
            href: "https://github.com/shaheeranser/exam-proctor",
          },
          {
            label: "Cold-start walkthrough, including the local Moodle/LTI environment",
            href: "https://github.com/shaheeranser/exam-proctor/blob/main/SETUP.md",
            tag: "docs",
          },
        ],
      },
    ],
  },
  {
    slug: "watcher",
    name: "watcher",
    tagline: "Your logs already know what broke.",
    summary:
      "A self-hosted daemon that reads your application logs, notices crashes on its own, and explains them in plain English using a small local model. No cloud calls, no API keys.",
    status: "MIT · pre-1.0",
    stack: ["Go", "Docker", "Ollama", "SQLite", "systemd"],
    logo: "/projects/watcher.svg",
    links: [
      { label: "GitHub", href: "https://github.com/shaheeranser/watcher", kind: "repo" },
      {
        label: "Test harness",
        href: "https://github.com/shaheeranser/watcher_victim",
        kind: "extra",
      },
    ],
    body: [
      {
        kind: "prose",
        paragraphs: [
          "Watcher runs in the background reading your application logs. When something crashes, it works out the root cause and tells you in plain English, using a small model on the machine you already have.",
        ],
      },
      {
        kind: "code",
        label: "Install (Linux and macOS — no Go toolchain, no compiler, no build step)",
        lines: [installCommand],
      },
      {
        kind: "code",
        label: "Run",
        lines: [
          "watcher onboard",
          "watcher run --model qwen2.5:1.5b --file /var/log/app.log",
        ],
      },
      {
        kind: "callout",
        badge: "New incident · Critical",
        title: "Application startup failure due to missing RELAYBOX_API_TOKEN.",
        rows: [
          {
            label: "Likely cause",
            value:
              "The application is attempting to load configuration without the required RELAYBOX_API_TOKEN environment variable.",
          },
          {
            label: "Suggested fix",
            value:
              "Ensure the RELAYBOX_API_TOKEN environment variable is set before attempting to load configuration.",
          },
        ],
        meta: [
          "source: api",
          "detector: generic-fatal",
          "fingerprint: 62b7d353dab61403",
          "confidence: 0.30",
          "model: qwen2.5:1.5b",
        ],
        foot: "From a real test run. I broke a live service on purpose, with no crash switch wired into it. It even tells you when it is unsure: this run flagged that some cited evidence was not in the excerpt, and lowered its own confidence to 0.30.",
      },
      {
        kind: "steps",
        heading: "It comes to you, so you never invoke it against an incident",
        intro:
          "Push, not pull. Watcher watches continuously and only speaks up when something actually breaks.",
        items: [
          {
            title: "Read",
            text: "A file, stdin, or several labelled sources. Inside Docker Compose it attaches to its own sibling containers over the Docker socket, with no configuration.",
          },
          {
            title: "Detect",
            text: "Go panics, Python tracebacks, and generic fatal or exception lines. Deliberately heuristic: logs have no universal format, and requiring one would make Watcher undeployable anywhere unusual.",
          },
          {
            title: "Fingerprint",
            text: "Addresses, timestamps, UUIDs and request ids are normalised away, so the same failure keeps the same identity. This is what stops a crash loop from becoming fifty alerts.",
          },
          {
            title: "Curate",
            text: "A bounded excerpt of the crash block and its surrounding context is extracted within a token budget, so a small model still gets a clean, affordable prompt.",
          },
          {
            title: "Explain",
            text: "A local Ollama model returns a summary, a likely cause, the evidence it used, a suggested fix, a confidence, and a severity.",
          },
          {
            title: "Report",
            text: "Readable text in a terminal, JSON Lines when piped, and lifecycle notifications to Slack, Discord or a generic webhook. One message when it breaks, one when it recovers.",
          },
        ],
      },
      {
        kind: "list",
        heading: "A crash loop is one incident, not fifty",
        intro:
          "Deduplication is decided by the fingerprint, so a service failing in a loop produces a single incident with a rising count.",
        tone: "built",
        items: [
          "A raw log gives you twenty-four identical stack traces and no idea which one matters.",
          "Watcher sends one incident, announced once, then an update when it recovers — the notifications follow the incident, not the log line. One incident, count 24, moving new → ongoing → resolved.",
        ],
      },
      {
        kind: "list",
        heading: "Where this actually is",
        intro:
          "Watcher is pre-1.0 and currently published as a release candidate. It is tested against real services rather than declared finished, so here is the real position rather than a pitch.",
        tone: "built",
        items: [
          "The engine, its production runtime, and crash deduplication.",
          "watcher attach — a live dashboard over SQLite incident history and a read API on a unix socket.",
          "watcher eval — scoring explanations against a ground-truth file.",
          "watcher onboard, the TOML config file, the checksum-verified installer, and a systemd unit.",
          "Webhook delivery with retry, a fallback spool, and a heartbeat.",
        ],
      },
      {
        kind: "list",
        heading: "Known gaps, stated plainly",
        tone: "gap",
        items: [
          "The live Docker Compose checks and the evaluation-harness checks have not been run end to end yet. The behaviour behind them is covered by unit tests; the integration is unverified.",
          "No default model is bundled. --model is required, so you choose.",
          "The webhook spool is never replayed automatically. It captures undeliverable notifications so nothing is lost, but draining it is manual.",
          "Notification state is process-local: after a restart, a still-failing crash is announced as new rather than ongoing.",
        ],
      },
      {
        kind: "links",
        heading: "Pick something small and real",
        intro:
          "These are scoped, have a definition of done, and can be tested offline. Every one of them is a genuine gap in the code or the docs, not busywork. Go is 1.26 or newer; read CONTRIBUTING.md first, and AGENTS.md if you are working with an agent.",
        items: [
          {
            label: "watcher --version prints nothing, and the bug template asks for it",
            href: "https://github.com/shaheeranser/watcher/issues/1",
            note: "#1",
            tag: "small",
          },
          {
            label: "Add an ntfy webhook payload format",
            href: "https://github.com/shaheeranser/watcher/issues/3",
            note: "#3",
            tag: "small",
          },
          {
            label: "Detect JavaScript / Node.js stack traces",
            href: "https://github.com/shaheeranser/watcher/issues/2",
            note: "#2",
            tag: "small",
          },
          {
            label: "Document the development loop, from a clean clone to a rendered explanation",
            href: "https://github.com/shaheeranser/watcher/issues/4",
            note: "#4",
            tag: "docs",
          },
          {
            label: "Add an examples/ directory with one worked end-to-end recipe",
            href: "https://github.com/shaheeranser/watcher/issues/5",
            note: "#5",
            tag: "docs",
          },
        ],
      },
    ],
  },
  {
    slug: "hijri-api",
    name: "hijri-api",
    tagline: "Verified, auditable Hijri dates as static JSON.",
    summary:
      "Open Hijri calendar and prayer time data for Pakistan: a verified, auditable archive of sighted month starts with confidence levels, served as static JSON.",
    status: "MIT · static JSON API",
    stack: ["TypeScript", "JSON", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/shaheeranser/hijri-api", kind: "repo" },
      {
        label: "Live API",
        href: "https://shaheeranser.github.io/hijri-api/",
        kind: "live",
      },
    ],
    body: [
      {
        kind: "prose",
        paragraphs: [
          "Pakistan has no machine-readable source for sighted Hijri month starts. Most calendars return a computed table with no provenance, so you cannot tell why a date differs from the announcement or how much to trust it.",
          "hijri-api keeps a verified, auditable archive of the sighted starts with a calculated fallback, computes prayer times locally, and watches the news for each announcement so a human approves the update through a pull request. The repository is the data store, the build system and the API.",
        ],
      },
      {
        kind: "code",
        label: "API",
        lines: [
          "# Base URL: https://shaheeranser.github.io/hijri-api",
          "GET /hijri/index.json                    # coverage, generation time, available years",
          "GET /hijri/overrides.json                # the confirmed month-start record, with sources",
          "GET /hijri/calendar/<hijriYear>.json     # Gregorian date → Hijri date + confidence",
          "GET /prayer/<city>/<profile>/<year>.json # daily prayer times",
        ],
      },
      {
        kind: "list",
        heading: "Every date carries its confidence",
        intro:
          "Every published Hijri date carries a confidence level; prayer times are calculated, not observed.",
        tone: "built",
        items: [
          "confirmed — a verified start date exists in overrides.json.",
          "estimated — a past month with no verified entry, from the baseline.",
          "predicted — a future month, from the baseline.",
          "unconfirmed — the last day of a month, where the sighting decides whether a 30th day exists.",
        ],
      },
      {
        kind: "prose",
        heading: "Where it runs",
        paragraphs: [
          "The JSON is the contract: dates are precomputed, so no astronomy library is needed at runtime and other languages can read the files directly. The site is published as static files on GitHub Pages, so the full history is diffable in git.",
          "Cities: karachi, lahore, peshawar. Profiles: sunni_hanafi, sunni_asr1 (earlier Asr), shia_jafari.",
        ],
      },
      {
        kind: "links",
        heading: "Read the data",
        intro:
          "The live API stays at shaheeranser.github.io/hijri-api; this page only links to it.",
        items: [
          {
            label: "Live API",
            href: "https://shaheeranser.github.io/hijri-api/",
            tag: "json",
          },
          {
            label: "Repository",
            href: "https://github.com/shaheeranser/hijri-api",
          },
          {
            label: "Contributing — add a city or a confirmed month",
            href: "https://github.com/shaheeranser/hijri-api/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): Project | undefined {
  return caseStudies.find((p) => p.slug === slug);
}
