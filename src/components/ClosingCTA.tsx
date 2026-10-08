import Link from "next/link";
import { email } from "@/content/projects";

export function ClosingCTA() {
  return (
    <section className="closing-cta shell" id="contact">
      <p className="label">Let’s make something that matters</p>
      <h2>
        Have a world
        <br />
        in mind<span className="text-accent">?</span>
      </h2>
      <div className="closing-bottom">
        <p className="text-muted">
          Let’s build something.
          <br />
          Games, tools, and interesting possibilities.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a
            href={`mailto:${email}?subject=Abyrax%20Studio%20Inquiry`}
            className="button"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <Link href="/projects/" className="text-link">
            Explore the work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
