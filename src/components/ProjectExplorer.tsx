"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore, type CSSProperties } from "react";
import { projects, projectPath } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";

const filters = [
  { value: "all", label: "All" },
  { value: "game", label: "Games" },
  { value: "tool", label: "Tools" },
  { value: "academic", label: "Academic" },
];
function currentFilter() {
  const value = new URLSearchParams(window.location.search).get("category");
  return filters.some((filter) => filter.value === value) ? value! : "all";
}
function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

export function ProjectExplorer() {
  const category = useSyncExternalStore(subscribe, currentFilter, () => "all");
  const reducedMotion = useReducedMotion();
  const visible = projects.filter(
    (project) => category === "all" || project.category === category,
  );
  const ordered = [...visible].sort(
    (a, b) =>
      ["bothun", "amelos", "alkut", "seshat", "knight-of-the-alliance"].indexOf(
        a.slug,
      ) -
      ["bothun", "amelos", "alkut", "seshat", "knight-of-the-alliance"].indexOf(
        b.slug,
      ),
  );

  function select(value: string) {
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", value);
    if (url.href !== window.location.href)
      window.history.pushState(null, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <>
      <div className="filter-row">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => select(filter.value)}
              aria-pressed={category === filter.value}
            >
              {filter.label}
              <span>
                {filter.value === "all"
                  ? projects.length
                  : projects.filter(
                      (project) => project.category === filter.value,
                    ).length}
              </span>
            </button>
          ))}
        </div>
        <p className="label" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div
        className={`project-grid ${category !== "all" ? "is-filtered" : ""}`}
      >
        {ordered.map((project) => (
          <motion.article
            key={project.slug}
            layout={!reducedMotion}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            className={`project-card card-${project.slug}`}
            style={{ "--project-accent": project.accent } as CSSProperties}
          >
            <Link href={projectPath(project)} className="project-card-link">
              <div className="card-media">
                <ProjectVisual
                  project={project}
                  sizes="(max-width: 767px) 100vw, 60vw"
                />
                <span className="card-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="card-copy">
                <div className="flex items-center gap-3 mb-3">
                  <span className="label" style={{ color: project.accent }}>
                    {project.categoryLabel}
                  </span>
                  {project.status && (
                    <span className="status-badge">{project.status}</span>
                  )}
                  {project.category === "academic" && (
                    <span className="status-badge">CTIS Awards 2024</span>
                  )}
                </div>
                <h2>{project.title}</h2>
                <p className="text-muted">{project.summary}</p>
                <span className="text-link">
                  View project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      <noscript>
        <p className="text-muted mt-6">
          All projects are shown. Filters require JavaScript; every project page
          is available above.
        </p>
      </noscript>
    </>
  );
}
