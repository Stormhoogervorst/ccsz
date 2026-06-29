"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Over CCSZ", href: "#aanleiding" },
  { label: "Diensten", href: "#diensten" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
];

type HeaderProps = {
  ctaLabel?: string;
};

export function Header({ ctaLabel = "Neem deel" }: HeaderProps = {}) {
  const [open, setOpen] = useState(false);

  // Eén gedeelde scrolllogica voor alle in-page ankers. Korte secties (die in
  // de beschikbare schermhoogte passen) worden verticaal gecentreerd met
  // navbar-compensatie; lange secties landen bovenaan onder de navbar.
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector<HTMLElement>(href);
    if (!el) return;

    event.preventDefault();
    const navbarOffset = 110;
    const beschikbaar = window.innerHeight - navbarOffset;
    const top = el.getBoundingClientRect().top + window.scrollY;
    let doel;
    if (el.offsetHeight <= beschikbaar) {
      doel = top - (beschikbaar - el.offsetHeight) / 2 - navbarOffset / 2;
    } else {
      doel = top - navbarOffset;
    }
    window.scrollTo({ top: Math.max(0, doel), behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 rounded-pill border border-neutral-border bg-neutral-surface/80 py-2.5 pl-3 pr-2.5 shadow-card backdrop-blur-md sm:pl-4 sm:pr-3">
          {/* Logo + nav (left of center) */}
          <div className="flex items-center gap-8 lg:gap-10">
            <a href="#top" className="flex shrink-0 items-center">
              <Image
                src="/CCSZ Logo.png"
                width={1993}
                height={870}
                alt="CCSZ — Coöperatie voor Cultuursensitieve Zorg"
                priority
                className="h-10 w-auto"
              />
            </a>

            <nav className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Primary CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-pill bg-forest px-5 py-2.5 text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-dark sm:inline-flex"
            >
              {ctaLabel}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="main-menu"
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-pill text-text-primary transition-colors hover:bg-neutral-surface-muted md:hidden"
            >
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span
                  className={`block h-[2px] w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            id="main-menu"
            className="mt-2 rounded-card border border-neutral-border bg-neutral-surface p-3 shadow-card md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      scrollToSection(event, link.href);
                      setOpen(false);
                    }}
                    className="block rounded-md px-3 py-3 text-lg font-semibold tracking-tight text-text-primary transition-colors hover:bg-neutral-surface-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 px-1">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-pill bg-forest px-5 py-3 text-center text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-dark"
                >
                  {ctaLabel}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
