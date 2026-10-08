import Image from "next/image";
import Link from "next/link";
import { email, projects, projectPath } from "@/content/projects";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-grid">
        <div>
          <Link href="/" className="brand" aria-label="Abyrax Studio home">
            <Image src="/brand/logo.png" alt="" width={38} height={38} />
            <span>
              ABYRAX{" "}<span className="brand-sub">STUDIO</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-muted">
            Original worlds. Useful tools.
            <br />
            Independent by design.
          </p>
        </div>
        <div>
          <p className="label mb-5">The work</p>
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={projectPath(project)}>{project.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-5">Connect</p>
          <ul>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a
                href="https://github.com/Abyrax"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <Link href="/studio/">The studio</Link>
            </li>
          </ul>
          <p className="label mt-6">Ankara, Türkiye</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abyrax Studio</p>
        <p>No analytics or embedded trackers.</p>
        <a href="#main-content">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
