"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SITE_PASSWORD = "CCSZ2026";
const STORAGE_KEY = "ccsz-access-granted";

// Subtiele zwevende accent-bollen in de huisstijl, los van de scrollpositie.
const orbs = [
  { className: "left-[8%] top-[14%] h-40 w-40 bg-lime/40 sm:h-56 sm:w-56", delay: "0s", duration: "11s" },
  { className: "right-[10%] top-[18%] h-32 w-32 bg-lila/50 sm:h-44 sm:w-44", delay: "1.2s", duration: "13s" },
  { className: "bottom-[12%] left-[14%] h-36 w-36 bg-green/25 sm:h-48 sm:w-48", delay: "0.6s", duration: "12s" },
  { className: "bottom-[16%] right-[12%] h-28 w-28 bg-forest/15 sm:h-40 sm:w-40", delay: "1.8s", duration: "14s" },
];

export function PasswordGate({ children }: { children: React.ReactNode }) {
  // Pas na mount weten we of sessionStorage toegang heeft; tot dan tonen we niets
  // om een hydration-mismatch en een korte flits van de gate te voorkomen.
  const [mounted, setMounted] = useState(false);
  const [granted, setGranted] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        setGranted(true);
      }
    } catch {
      // sessionStorage niet beschikbaar — gate blijft zichtbaar
    }
    setMounted(true);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value === SITE_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // negeren — toegang geldt dan alleen voor deze render
      }
      setGranted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!mounted) {
    return null;
  }

  if (granted) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-neutral-background px-6 py-12">
      {/* Zwevende accent-bollen */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {orbs.map((orb, index) => (
          <span
            key={index}
            className={`gate-orb absolute rounded-full blur-2xl ${orb.className}`}
            style={{ animationDelay: orb.delay, animationDuration: orb.duration }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-md">
        <div className="rounded-card border border-neutral-border bg-neutral-surface/80 p-8 text-center shadow-card backdrop-blur-md sm:p-10">
          <Image
            src="/CCSZ Logo.png"
            width={1993}
            height={870}
            alt="CCSZ — Coöperatie voor Cultuursensitieve Zorg"
            priority
            className="mx-auto h-12 w-auto"
          />

          <h1 className="mt-8 text-display-h3 font-bold text-text-primary">
            Deze site is in ontwikkeling
          </h1>
          <p className="mt-3 text-text-secondary">
            Voer het wachtwoord in om verder te gaan.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <label htmlFor="site-password" className="sr-only">
              Wachtwoord
            </label>
            <input
              id="site-password"
              type="password"
              autoFocus
              autoComplete="current-password"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) setError(false);
              }}
              placeholder="Wachtwoord"
              aria-invalid={error}
              aria-describedby={error ? "site-password-error" : undefined}
              className="w-full rounded-pill border border-neutral-border bg-neutral-surface px-5 py-3.5 text-center text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-forest focus:ring-2 focus:ring-forest/30"
            />

            <button
              type="submit"
              className="rounded-pill bg-forest px-7 py-3.5 font-semibold text-text-on-dark transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-background"
            >
              Toegang
            </button>
          </form>

          {error && (
            <p
              id="site-password-error"
              role="alert"
              className="mt-4 text-sm font-medium text-green"
            >
              Onjuist wachtwoord, probeer het opnieuw.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
