import Link from "next/link";
import { email } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  `Talk to Abyrax Studio about games, creative software, or collaboration. Contact ${email}. Based in Ankara, Türkiye.`,
  "/contact/",
);

export default function Contact() {
  return (
    <section className="contact-page shell">
      <p className="label">Abyrax Studio / Contact</p>
      <h1>
        Let’s talk
        <br />
        about what’s
        <br />
        <span className="text-accent">next.</span>
      </h1>
      <div className="contact-grid">
        <div>
          <p className="text-muted max-w-md mb-8">
            Building something interesting? Have a question about a project, or
            an idea for a collaboration? We’d love to hear about it.
          </p>
          <a
            href={`mailto:${email}?subject=Abyrax%20Studio%20Inquiry`}
            className="contact-email"
          >
            {email} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-aside">
          <div>
            <span className="label">Based in</span>
            <p>Ankara, Türkiye</p>
          </div>
          <div>
            <span className="label">Elsewhere</span>
            <p>
              <a
                href="https://github.com/Abyrax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                GitHub ↗
              </a>
            </p>
          </div>
          <div>
            <span className="label">Start with the work</span>
            <p>
              <Link href="/projects/" className="text-link">
                Explore projects ↗
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
