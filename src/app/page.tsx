import Image from "next/image";
import Link from "next/link";
import { FeaturedProjectStage } from "@/components/FeaturedProjectStage";
import { ClosingCTA } from "@/components/ClosingCTA";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "Games & Creative Software",
    "Abyrax Studio builds original games and creative tools for game developers, writers, and worldbuilders. Independent by design, based in Ankara, Türkiye.",
    "/",
    "/projects/bothun.webp",
  ),
  title: { absolute: "Abyrax Studio — Games & Creative Software" },
};

export default function Home() {
  return (
    <>
      <section className="hero" id="welcome" aria-labelledby="hero-heading">
        <div className="hero-art">
          <Image
            src="/projects/bothun.webp"
            alt="BØTHUN concept artwork: a warrior beneath the northern lights in a snowy world."
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="hero-shade" />
        </div>
        <div className="shell hero-content">
          <div className="hero-topline">
            <p className="label">
              <span className="tiny-dot" /> Independent game & creative software
              studio
            </p>
            <span className="label hero-location">
              Ankara, Türkiye
              <br />
              Independent by design
            </span>
          </div>
          <h1 id="hero-heading">
            We build
            <br />
            <span>worlds.</span>
            <span className="hero-second">And the tools behind them.</span>
          </h1>
          <p className="hero-description">
            Original games. Thoughtful creative software.
            <br />
            Built with equal parts imagination and engineering.
          </p>
          <div className="flex flex-wrap items-center gap-7">
            <Link href="/projects/" className="button">
              Explore projects <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/studio/" className="text-link">
              The studio <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-bottom">
            <a href="#projects" className="label">
              Discover the work <span aria-hidden="true">↓</span>
            </a>
            <Link href="/projects/bothun/" className="label hero-featured">
              Featured world / BØTHUN <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <FeaturedProjectStage />
      <section
        className="disciplines section"
        aria-labelledby="disciplines-heading"
      >
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="label">02 / Two disciplines, one vision</p>
              <h2 id="disciplines-heading">Imagination, engineered.</h2>
            </div>
            <p className="text-muted max-w-sm">
              We create experiences to step into.
              <br />
              And tools to bring your own worlds to life.
            </p>
          </div>
          <div className="discipline-grid">
            <Link href="/projects/?category=game" className="discipline worlds">
              <span className="label">01 / Original games</span>
              <h3>
                Worlds<span aria-hidden="true">↗</span>
              </h3>
              <p>
                Stories to step into. Systems to master. Worlds shaped through
                design and engineering.
              </p>
              <span className="discipline-projects">
                BØTHUN · Project ALKUT
              </span>
            </Link>
            <Link href="/projects/?category=tool" className="discipline tools">
              <span className="label">02 / Creative software</span>
              <h3>
                Tools<span aria-hidden="true">↗</span>
              </h3>
              <p>
                Design spaces. Organize ideas. Connect stories. Software shaped
                around the work of creating.
              </p>
              <span className="discipline-projects">
                Project Amelos · Seshat
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="section shell"
        id="about"
        aria-labelledby="process-heading"
      >
        <div className="section-heading">
          <div>
            <p className="label">03 / From an idea to something real</p>
            <h2 id="process-heading">A considered process.</h2>
          </div>
          <Link href="/studio/" className="text-link">
            Inside the studio <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol className="process-grid">
          <li>
            <span className="label">01</span>
            <h3>Design</h3>
            <p>
              Start with a world, a story, or a workflow. Give the idea a clear
              purpose and a shape worth exploring.
            </p>
          </li>
          <li>
            <span className="label">02</span>
            <h3>Engineer</h3>
            <p>
              Connect imagination with systems. Build gameplay and tooling
              through practical, deliberate engineering.
            </p>
          </li>
          <li>
            <span className="label">03</span>
            <h3>Iterate</h3>
            <p>
              Prototype, test, and refine. Let what works in practice guide the
              next step.
            </p>
          </li>
        </ol>
      </section>
      <section
        className="recognition shell"
        aria-labelledby="recognition-heading"
      >
        <p className="label" id="recognition-heading">
          Selected foundations
        </p>
        <div className="recognition-grid">
          <div>
            <span className="recognition-mark" aria-hidden="true">
              ↗
            </span>
            <h3>Bilkent Cyberpark</h3>
            <p>
              Our original game projects contributed to Abyrax Studio’s
              acceptance into Bilkent Cyberpark’s incubation program.
            </p>
          </div>
          <div>
            <span className="recognition-mark" aria-hidden="true">
              01
            </span>
            <h3>CTIS Awards 2024</h3>
            <p>
              Knight of the Alliance’s academic project team received 1st
              Ranking Team / Best Senior Project recognition.
            </p>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
