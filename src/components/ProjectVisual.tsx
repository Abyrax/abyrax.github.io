import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";

export function ProjectVisual({
  project,
  priority = false,
  sizes = "(max-width: 767px) 100vw, 70vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image)
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="project-image"
      />
    );
  const amelos = project.slug === "amelos";
  return (
    <div
      className={`concept-art ${amelos ? "concept-spaces" : "concept-stories"}`}
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <svg viewBox="0 0 800 500" aria-hidden="true" className="concept-svg">
        {amelos ? (
          <>
            <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".2">
              {[100, 180, 260, 340, 420].map((y) => (
                <path key={y} d={`M0 ${y} L800 ${y}`} />
              ))}
              {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x) => (
                <path key={x} d={`M${x} 0 L${x} 500`} />
              ))}
            </g>
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M170 300 400 170 630 300 400 430Z" opacity=".3" />
              <path d="M280 230 400 160 520 230 400 300Z M280 230V370L400 440 520 370V230 M400 300V440" />
              <path
                d="M400 160V90M520 230 595 185M280 370 205 415"
                strokeDasharray="4 8"
              />
              <circle cx="400" cy="90" r="5" />
              <circle cx="595" cy="185" r="5" />
              <circle cx="205" cy="415" r="5" />
            </g>
            <path
              d="M400 285V315M385 300H415"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <g stroke="currentColor" fill="none">
              <ellipse
                cx="400"
                cy="250"
                rx="265"
                ry="155"
                strokeDasharray="2 10"
                opacity=".25"
              />
              <circle cx="400" cy="250" r="100" opacity=".2" />
              <path
                d="m140 285 125-145 135 110 115-130 135 145-150 115-100-130-115 135-145-100 M265 140l20 245M515 120l-15 260M140 285l510-20"
                opacity=".45"
              />
            </g>
            {[
              [140, 285],
              [265, 140],
              [400, 250],
              [515, 120],
              [650, 265],
              [500, 380],
              [285, 385],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={i === 2 ? 17 : 7}
                  fill="currentColor"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={i === 2 ? 30 : 15}
                  stroke="currentColor"
                  fill="none"
                  opacity=".35"
                />
              </g>
            ))}
          </>
        )}
      </svg>
      <span className="concept-corner label">
        {amelos
          ? "Space / Structure / Possibility"
          : "Character / Place / Connection"}
      </span>
      <span className="concept-word" aria-hidden="true">
        {amelos ? "Amelos" : "Seshat"}
      </span>
      <span className="concept-caption">
        Editorial concept illustration · Not a product screenshot
      </span>
    </div>
  );
}
