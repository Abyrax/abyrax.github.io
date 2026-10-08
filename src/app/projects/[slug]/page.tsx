import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { projects, projectPath } from "@/content/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return pageMetadata(
    project.title,
    project.summary,
    projectPath(project),
    project.image?.src,
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <div
      className="project-detail"
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <section className="project-intro shell">
        <Link href="/projects/" className="text-link">
          ← Back to projects
        </Link>
        <div className="project-heading-top">
          <p className="label">
            0{index + 1} / {project.categoryLabel}
          </p>
          {project.status && (
            <span className="status-badge">{project.status}</span>
          )}
        </div>
        <h1>{project.title}</h1>
        <p className="project-tagline">{project.tagline}</p>
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-5 mt-7">
            {project.links.map((link) => (
              <a
                className="button button-outline"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </section>
      <figure className="detail-media shell">
        <ProjectVisual project={project} priority sizes="100vw" />
        {project.image && (
          <figcaption>
            {project.shortTitle} / Original project artwork
          </figcaption>
        )}
      </figure>
      <section className="project-story shell">
        <aside className="project-facts">
          <h2 className="label">At a glance</h2>
          <dl>
            <div>
              <dt>Discipline</dt>
              <dd>{project.categoryLabel}</dd>
            </div>
            {project.status && (
              <div>
                <dt>Project status</dt>
                <dd>{project.status}</dd>
              </div>
            )}
            {project.platform && (
              <div>
                <dt>Platform</dt>
                <dd>{project.platform}</dd>
              </div>
            )}
            {project.stack && (
              <div>
                <dt>Technology</dt>
                <dd>
                  {project.stack.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {project.category === "academic" && (
              <div>
                <dt>Recognition</dt>
                <dd>
                  1st Ranking Team
                  <br />
                  CTIS Awards 2024
                </dd>
              </div>
            )}
          </dl>
        </aside>
        <div className="story-copy">
          <p className="label">The idea</p>
          <h2>{project.tagline}</h2>
          <p className="story-lead">{project.idea}</p>
          <div className="feature-list">
            <p className="label">
              {project.category === "tool"
                ? "Directions being explored"
                : project.category === "academic"
                  ? "What was built"
                  : "What we’re building"}
            </p>
            {project.features.map((feature, i) => (
              <div key={feature.title}>
                <span className="label">0{i + 1}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="behind-build">
            <p className="label">Behind the build</p>
            <p>{project.build}</p>
          </div>
        </div>
      </section>
      <section className="project-next shell">
        <p className="label">Keep exploring / Next project</p>
        <Link href={projectPath(next)}>
          <span>{next.title}</span>
          <span aria-hidden="true">↗</span>
        </Link>
        <div className="flex flex-wrap gap-7">
          <Link href="/projects/" className="text-link">
            All projects →
          </Link>
          <Link href="/contact/" className="text-link">
            Talk to the studio →
          </Link>
        </div>
      </section>
    </div>
  );
}
