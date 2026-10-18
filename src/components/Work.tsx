"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Database,
  FileText,
  GitPullRequest,
  Grid,
  Package,
  Terminal,
} from "@/components/icons";
import { opensource, projects, type WorkItem } from "@/lib/content";

const rowIcon: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Lookvisa: Grid,
  "Invoicing portal": FileText,
  "Exam Proctoring Platform": Cpu,
  watcher: Terminal,
  reamify: Package,
  "hijri-api": Database,
};

type TabKey = "projects" | "oss";

const TABS: Array<{ id: TabKey; label: string; note: string }> = [
  {
    id: "projects",
    label: "Projects",
    note: "Commercial products and shipped systems I've designed and built end to end.",
  },
  {
    id: "oss",
    label: "Open source",
    note: "A library and a dataset I maintain, plus pull requests merged into or open against other projects.",
  },
];

function WorkRow({ item }: { item: WorkItem }) {
  const Icon = rowIcon[item.name] ?? GitPullRequest;
  const Arrow = item.internal ? ArrowRight : ArrowUpRight;
  const content = (
    <>
      <span className="os-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="os-text">
        <span className="os-name">{item.name}</span>
        <span className="os-sub">{item.sub}</span>
      </span>
      <span className="os-right">
        <span className={`os-tag ${item.tone}`}>{item.tag}</span>
        <Arrow />
      </span>
    </>
  );

  if (item.internal) {
    return (
      <Link className="os-item" href={item.href}>
        {content}
      </Link>
    );
  }

  return (
    <a className="os-item" href={item.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export function Work() {
  const [tab, setTab] = useState<TabKey>("projects");
  const active = TABS.find((t) => t.id === tab)!;
  const items = tab === "projects" ? projects : opensource;

  return (
    <section className="work-view" id="work">
      <h2 className="view-title">Work</h2>

      <div className="tabs" role="tablist" aria-label="Work categories">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab ${tab === t.id ? "active" : ""}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
            <span className="count">{t.id === "projects" ? projects.length : opensource.length}</span>
          </button>
        ))}
      </div>

      <p className="tab-note">{active.note}</p>

      <div className="os-list" role="tabpanel" id={`panel-${tab}`}>
        {items.map((item) => (
          <WorkRow item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
