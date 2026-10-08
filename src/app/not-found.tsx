import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="label">404 / Uncharted territory</p>
      <h1>
        This world
        <br />
        isn’t here<span className="text-accent">.</span>
      </h1>
      <p className="text-muted">
        The page may have moved, or the link may be incomplete.
      </p>
      <div className="flex flex-wrap gap-6 mt-8">
        <Link href="/projects/" className="button">
          Explore the work ↗
        </Link>
        <Link href="/" className="text-link">
          Back to the studio →
        </Link>
      </div>
    </section>
  );
}
