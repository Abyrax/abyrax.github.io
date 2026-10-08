"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/projects/", label: "Projects" },
  { href: "/studio/", label: "Studio" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [menuOpen]);

  function close() {
    dialog.current?.close();
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="shell flex items-center justify-between gap-6">
          <Link href="/" className="brand" aria-label="Abyrax Studio home">
            <Image
              src="/brand/logo.png"
              alt=""
              width={38}
              height={38}
              loading="eager"
            />
            <span>
              ABYRAX <span className="brand-sub">STUDIO</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={
                  pathname.startsWith(href.slice(0, -1)) ? "page" : undefined
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/contact/" className="header-cta">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-trigger"
            ref={trigger}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              dialog.current?.showModal();
              setMenuOpen(true);
            }}
          >
            Menu
          </button>
        </div>
        <noscript>
          <nav className="no-script-nav shell" aria-label="Mobile navigation">
            {navigation.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </noscript>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="menu-heading"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls =
            dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClose={() => {
          setMenuOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="flex items-center justify-between">
          <span id="menu-heading" className="label">
            Abyrax Studio · Navigation
          </span>
          <button
            className="icon-button menu-close"
            onClick={close}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <Link
            href="/"
            onClick={close}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home <span aria-hidden="true">↗</span>
          </Link>
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              aria-current={
                pathname.startsWith(href.slice(0, -1)) ? "page" : undefined
              }
            >
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <p className="label">
          Independent by design.
          <br />
          Ankara, Türkiye.
        </p>
      </dialog>
    </>
  );
}
