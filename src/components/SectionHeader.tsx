import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  aside?: ReactNode;
};

export function SectionHeader({ index, eyebrow, title, accent, aside }: SectionHeaderProps) {
  return (
    <header className="section-head">
      <div>
        <p className="section-eyebrow">
          <span>{index}</span>
          {eyebrow}
        </p>
        <h2 className="section-title">
          {title}
          {accent ? (
            <>
              {" "}
              <em>{accent}</em>
            </>
          ) : null}
        </h2>
      </div>
      {aside ? <div className="section-aside">{aside}</div> : null}
    </header>
  );
}
