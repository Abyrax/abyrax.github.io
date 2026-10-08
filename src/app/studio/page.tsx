import Link from "next/link";
import { ClosingCTA } from "@/components/ClosingCTA";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "The Studio",
  "Meet Abyrax Studio, an independent game and creative-software venture founded by Ahmet Burak Yuksel in Ankara, Türkiye.",
  "/studio/",
);

export default function Studio() {
  return (
    <>
      <section className="page-intro shell">
        <p className="label">Abyrax Studio / Independent by design</p>
        <h1>
          Imagination.
          <br />
          With intention<span className="text-accent">.</span>
        </h1>
        <div className="intro-bottom">
          <p>We build worlds — and the tools to create them.</p>
          <span className="label">Ankara, Türkiye</span>
        </div>
      </section>
      <section className="studio-manifesto shell" id="about">
        <p className="label">
          A small studio.
          <br />A considered vision.
        </p>
        <div>
          <h2>
            Good worlds invite you in.
            <br />
            <span className="text-muted">Good tools help you make them.</span>
          </h2>
          <p>
            Abyrax Studio is an independent creative technology venture
            developing original games and software for creators. Game
            development and creator tooling inform one another: building worlds
            reveals the tools we wish existed.
          </p>
          <p>
            We work through worldbuilding, practical engineering, and iterative
            prototyping. Creative ownership, useful software, and narrative
            craft shape the direction.
          </p>
        </div>
      </section>
      <section className="founder-section shell">
        <div>
          <p className="label">The person behind the work</p>
          <h2>
            Ahmet Burak
            <br />
            Yuksel<span className="text-accent">.</span>
          </h2>
          <span className="label">Founder / Independent developer</span>
        </div>
        <div className="founder-copy">
          <p>
            A software and game developer with a background in Unreal Engine,
            C++, and Blueprints. His work connects gameplay engineering,
            interactive storytelling, and practical tools for creative
            workflows.
          </p>
          <p>
            He studied Computer Technology & Information Systems at Bilkent
            University, with international academic experience at Metropolia
            University of Applied Sciences in Helsinki. His professional
            foundations include simulation software, C++/Qt tooling, and
            technical testing at Simsoft Technologies.
          </p>
          <p>
            Abyrax Studio began as an independent development venture in
            September 2024. Today its direction spans BØTHUN and ALKUT,
            alongside the creator-software projects Amelos and Seshat.
          </p>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="label">Selected foundations</p>
            <h2>Experience behind the ideas.</h2>
          </div>
        </div>
        <div className="studio-foundations">
          <article>
            <span className="label">01 / Academic work</span>
            <h3>Knight of the Alliance</h3>
            <p>
              The academic project team received 1st Ranking Team / Best Senior
              Project at CTIS Awards 2024, recognized by Bilkent University in
              consultation with Havelsan.
            </p>
            <Link
              href="/projects/knight-of-the-alliance/"
              className="text-link"
            >
              Explore the project ↗
            </Link>
          </article>
          <article>
            <span className="label">02 / Studio development</span>
            <h3>Incubation acceptance</h3>
            <p>
              BØTHUN and ALKUT contributed to Abyrax Studio’s acceptance into
              Bilkent Cyberpark’s incubation program.
            </p>
          </article>
          <article>
            <span className="label">03 / Engineering practice</span>
            <h3>Simulation & tooling</h3>
            <p>
              Software development and technical testing experience at Simsoft,
              with Best CTIS Intern recognition at CTIS Awards 2024.
            </p>
          </article>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
