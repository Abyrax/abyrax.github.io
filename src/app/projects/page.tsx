import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ClosingCTA } from "@/components/ClosingCTA";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "The Work",
  "Explore BØTHUN, Project ALKUT, Project Amelos, Seshat: Narrative Scriptor, and Knight of the Alliance. Original games, creator tools, and academic foundations.",
  "/projects/",
);

export default function Projects() {
  return (
    <>
      <section className="page-intro shell">
        <p className="label">Abyrax Studio / Projects</p>
        <h1>
          The work<span className="text-accent">.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Original worlds.
            <br />
            Tools for the people who create them.
          </p>
          <span className="label">Games / Software / Foundations</span>
        </div>
      </section>
      <section
        className="shell projects-section"
        aria-label="Project collection"
      >
        <ProjectExplorer />
      </section>
      <ClosingCTA />
    </>
  );
}
