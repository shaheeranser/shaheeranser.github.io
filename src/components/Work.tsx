"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { opensource, projects, type WorkItem } from "@/lib/content";

const TABS = [
  { id: "projects", label: "Projects" },
  { id: "oss", label: "Open source" },
] as const;

type TabKey = (typeof TABS)[number]["id"];

function Row({ item }: { item: WorkItem }) {
  const body = (
    <>
      <span>
        <span className="row-name">{item.name}</span>
        <span className="row-desc">{item.sub}</span>
      </span>
      <span className="row-right">
        <span className={`tag ${item.tone}`}>{item.tag}</span>
        <span className="go">{item.internal ? <ArrowRight /> : <ArrowUpRight />}</span>
      </span>
    </>
  );

  if (item.internal) {
    return (
      <Link className="row" href={item.href}>
        {body}
      </Link>
    );
  }

  return (
    <a className="row" href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}

export function Work() {
  const [tab, setTab] = useState<TabKey>("projects");
  const items = tab === "projects" ? projects : opensource;

  return (
    <section className="sect" id="work">
      <div className="sect-bar">
        <h2>Work</h2>
        <Link className="more" href="/projects">
          case studies →
        </Link>
      </div>

      <div className="tabs" role="tablist" aria-label="Work categories">
        {TABS.map((item) => (
          <button
            type="button"
            role="tab"
            key={item.id}
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="list" role="tabpanel">
        {items.map((item) => (
          <Row item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
