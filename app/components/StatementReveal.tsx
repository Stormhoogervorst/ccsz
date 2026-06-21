"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const STATEMENT =
  "De Coöperatie Cultuur Sensitieve Zorg verenigt gespecialiseerde aanbieders onder één kwaliteitskeurmerk. Wij treden op als contractpartij richting opdrachtgevers; jij levert de zorg onder de vlag van de coöperatie. Zo krijg je de schaal van een grote organisatie, met behoud van je eigen team en aanpak.";

type RevealColors = { muted: string; primary: string };

function readToken(styles: CSSStyleDeclaration, name: string) {
  return styles.getPropertyValue(name).trim();
}

function RevealWord({
  word,
  progress,
  start,
  end,
  colors,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  colors: RevealColors;
}) {
  const color = useTransform(progress, [start, end], [colors.muted, colors.primary]);

  return (
    <motion.span style={{ color }} className="transition-none">
      {word}
    </motion.span>
  );
}

export function StatementReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [colors, setColors] = useState<RevealColors | null>(null);

  // Read colours from the design-system CSS variables so nothing is hardcoded.
  // Done after mount to keep the server/hydration render identical (plain,
  // readable text) and only then enhance it with the scroll-driven colour map.
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setColors({
      muted: readToken(styles, "--color-text-muted"),
      primary: readToken(styles, "--color-text-primary"),
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="grid min-h-[90vh] grid-cols-1 border-t border-neutral-border md:grid-cols-2"
    >
      {/* Left: full-bleed portrait */}
      <div className="relative min-h-[60vh] w-full md:min-h-[90vh]">
        <Image
          src="/Foto-1.jpeg"
          alt="Zorgverlener in gesprek met een cliënt"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Right: statement with scroll-driven word reveal */}
      <div className="flex flex-col bg-neutral-background px-[var(--container-px)] py-12 md:py-20">
        <div className="flex flex-1 items-center">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = (index + 1) / words.length;

              return (
                <span key={`${word}-${index}`}>
                  {colors ? (
                    <RevealWord
                      word={word}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                      colors={colors}
                    />
                  ) : (
                    word
                  )}
                  {index < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
