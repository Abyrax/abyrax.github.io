"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type CSSProperties } from "react";
import { projects, projectPath } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";

export function FeaturedProjectStage() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useReducedMotion();
  const project = projects[active];
  const change = (offset: number) =>
    setActive((index) => (index + offset + projects.length) % projects.length);

  return (
    <section
      className="section shell"
      id="projects"
      aria-labelledby="selected-heading"
    >
      <div className="section-heading">
        <div>
          <p className="label">01 / Selected work</p>
          <h2 id="selected-heading">Worlds in the making.</h2>
        </div>
        <Link href="/projects/" className="text-link">
          All projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div
        className="featured-stage"
        style={{ "--project-accent": project.accent } as CSSProperties}
      >
        <div
          className="stage-list"
          role="group"
          aria-label="Select a featured project"
        >
          {projects.map((item, index) => (
            <button
              key={item.slug}
              className={`stage-selector ${active === index ? "selected" : ""}`}
              aria-pressed={active === index}
              aria-controls="featured-panel"
              onClick={() => setActive(index)}
            >
              <span className="stage-number">0{index + 1}</span>
              <span>
                <span className="stage-name">{item.shortTitle}</span>
                <span className="stage-category">{item.categoryLabel}</span>
              </span>
              <span className="stage-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
          <div className="stage-list-note">
            <span className="tiny-dot" /> Five projects. Two disciplines.
            <br />
            One independent vision.
          </div>
        </div>
        <div
          id="featured-panel"
          className="stage-panel"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            const touch = event.changedTouches[0];
            touchStart.current = null;
            if (
              start &&
              Math.abs(touch.clientX - start.x) > 55 &&
              Math.abs(touch.clientX - start.x) >
                Math.abs(touch.clientY - start.y)
            )
              change(touch.clientX < start.x ? 1 : -1);
          }}
        >
          <motion.div
            key={project.slug}
            initial={false}
            animate={{ opacity: [reducedMotion ? 1 : 0.4, 1] }}
            transition={{ duration: reducedMotion ? 0 : 0.28 }}
            className="stage-presentation"
          >
            <div className="stage-media">
              <ProjectVisual project={project} />
              <span className="media-index label">ABX / 0{active + 1}</span>
            </div>
            <div className="stage-copy">
              <div className="flex items-center gap-3 mb-3">
                <span className="label" style={{ color: project.accent }}>
                  {project.categoryLabel}
                </span>
                {project.status && (
                  <span className="status-badge">{project.status}</span>
                )}
              </div>
              <h3>{project.title}</h3>
              <p className="text-muted">{project.summary}</p>
              <Link href={projectPath(project)} className="text-link">
                Explore {project.shortTitle} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>
          <div className="stage-controls">
            <span className="label">
              0{active + 1} <span className="text-muted">/ 05</span>
            </span>
            <div className="flex gap-2">
              <button
                className="icon-button"
                onClick={() => change(-1)}
                aria-label="Previous featured project"
              >
                ←
              </button>
              <button
                className="icon-button"
                onClick={() => change(1)}
                aria-label="Next featured project"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Featured project {active + 1} of {projects.length}: {project.title}
      </p>
      <noscript>
        <p className="mt-6">
          Discover every project in the{" "}
          <Link href="/projects/" className="text-link">
            project index →
          </Link>
          .
        </p>
      </noscript>
    </section>
  );
}
