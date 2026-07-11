import Image from "next/image";
import { Nunito } from "next/font/google";
import heroPhoto from "@/public/Foto-1.jpeg";
import { PrimaryButton } from "./PrimaryButton";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
});

export function Hero() {
  return (
    <section className={`${nunito.className} hero relative flex overflow-hidden`}>
      <style>{`
        .hero {
          min-height: 100vh;
          min-height: 100svh;
        }
        .hero-overlay {
          background: linear-gradient(
            75deg,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.12) 55%,
            rgba(0, 0, 0, 0.35) 100%
          );
        }
        @media (max-width: 640px) {
          .hero-overlay {
            background: linear-gradient(
              75deg,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.3) 55%,
              rgba(0, 0, 0, 0.45) 100%
            );
          }
        }
      `}</style>

      <Image
        src={heroPhoto}
        alt="Vrouwen in kleurrijke traditionele kleding in een warm gesprek tijdens een ontmoeting"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="hero-overlay absolute inset-0" />

      {/* Content, anchored lower-left */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col justify-end p-[clamp(1.5rem,5vw,5rem)] pb-[clamp(3rem,8vh,6rem)]">
        <h1 className="max-w-[13ch] text-[clamp(2.1rem,7vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-0.02em] text-white">
          <span className="block whitespace-nowrap">Samen leveren we</span>
          <span className="block whitespace-nowrap">de beste zorg</span>
        </h1>

        <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-[1.6] text-white/85">
          Wij verbinden cliënten met zorgverleners die hun taal spreken en
          achtergrond begrijpen. Eén aanspreekpunt voor verwijzers, zorg die
          écht aansluit.
        </p>

        <div className="mt-9">
          <PrimaryButton href="#contact" onDark>
            Neem deel
          </PrimaryButton>
        </div>
      </div>

      {/* Hand-drawn asterisk, bleeding off the bottom-right corner */}
      <svg
        viewBox="0 0 140 140"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-4 z-10 w-20 sm:-bottom-7 sm:-right-7 sm:w-[140px]"
      >
        <g stroke="#7BDCA2" strokeWidth={11} strokeLinecap="round">
          <path d="M70 70 C 68 48, 72 26, 69 9" />
          <path d="M70 70 C 88 60, 108 48, 124 39" />
          <path d="M70 70 C 90 78, 108 90, 123 102" />
          <path d="M70 70 C 72 92, 67 114, 71 131" />
          <path d="M70 70 C 52 80, 32 92, 17 100" />
          <path d="M70 70 C 50 62, 30 50, 16 40" />
        </g>
      </svg>
    </section>
  );
}
