import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PrimaryButton } from "./components/PrimaryButton";
import { Faq } from "./components/Faq";
import { FallingPills } from "./components/FallingPills";
import { HowItWorks } from "./components/HowItWorks";
import { BenefitsAccordion } from "./components/BenefitsAccordion";

const challenges = [
  {
    title: "Schaal ontbreekt",
    text: "Als kleinere specialistische aanbieder mis je de omvang om zelfstandig te contracteren bij nieuwe aanbestedingen.",
  },
  {
    title: "Administratieve last groeit",
    text: "Kwaliteitseisen en verantwoording kosten steeds meer tijd.",
  },
  {
    title: "Versnippering",
    text: "Je zichtbaarheid voor verwijzers, gemeenten en zorgkantoren maakt dat je gewoonweg niet wordt gevonden.",
  },
];

const floatingLabels = [
  {
    label: "MINDER CONTRACTEN",
    className:
      "left-4 top-8 -rotate-6 bg-forest text-text-on-dark sm:left-8 md:left-6 md:top-10",
  },
  {
    label: "HOGERE LASTEN",
    className:
      "right-3 top-1/2 rotate-6 bg-green text-text-on-dark sm:right-8 md:right-6",
  },
  {
    label: "ZWAKKERE POSITIE",
    className:
      "bottom-8 left-8 rotate-3 bg-lila text-text-on-lime sm:left-14 md:bottom-10 md:left-8",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-neutral-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Het probleem */}
        <section id="aanleiding" className="bg-neutral-background">
          <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-center md:py-28 lg:gap-16">
            <div className="md:col-span-7 lg:col-span-7">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                De uitdaging
              </span>
              <h2 className="mt-6 text-display-h2 text-text-primary">
                De zorg verandert. We bewegen mee.
              </h2>
              <p className="mt-6 text-body-lg text-text-secondary">
                Meedoen met aanbestedingen voor Jeugdwet, Wmo en Wlz wordt
                steeds lastiger. Omdat de zorguitgaven en de controle op zorg
                met de vele aanbieders onbeheersbaar worden, kiezen gemeenten en
                zorgkantoren steeds vaker voor de grote partijen.
              </p>

              <ul className="mt-9 space-y-6">
                {challenges.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center text-lila">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 40 40"
                        className="h-full w-full fill-current"
                      >
                        <polygon points="20 1 24.2 8.8 32.4 5.8 31.1 14.4 39 18 31.5 22.7 35.4 30.6 26.7 30.5 23.6 38.8 17.6 32.4 10.6 37.6 9.1 29 0.5 27.4 5.8 20.4 0.5 13.4 9.1 11.8 10.6 3.2 17.6 8.4" />
                      </svg>
                      <span className="absolute text-sm font-bold text-text-on-lime">
                        ✓
                      </span>
                    </span>
                    <span className="text-text-secondary">
                      <strong className="font-semibold text-text-primary">
                        {item.title}
                      </strong>{" "}
                      — {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative md:col-span-5 lg:col-span-5">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-neutral-surface-muted sm:min-h-[28rem] md:ml-auto md:w-full lg:min-h-[32rem]">
                <Image
                  src="/foto-2.webp"
                  alt="Zorgverlener met aandacht voor een cliënt"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />

                {floatingLabels.map((item) => (
                  <span
                    key={item.label}
                    className={`absolute rounded-pill px-4 py-2 text-xs font-semibold tracking-[0.08em] shadow-card sm:px-5 sm:py-2.5 ${item.className}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* De oplossing */}
        <section className="relative overflow-hidden bg-neutral-background">
          <div className="container-page relative py-20 md:py-28">
            <div className="relative z-10 max-w-4xl">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                De oplossing
              </span>
              <h2 className="mt-6 text-display-h2 text-text-primary">
                Eén coöperatie, alle slagkracht.
              </h2>
              <p className="mt-7 max-w-3xl text-body-lg text-text-secondary">
                De Coöperatie Cultuur Sensitieve Zorg verenigt gespecialiseerde
                aanbieders onder één merk. Wij treden op als contractpartij
                richting opdrachtgevers; jij levert de zorg namens de coöperatie.
                Zo bieden we de slagkracht en aantrekkelijkheid van een
                collectief. Wij behouden onze eigen identiteit en blijven als
                aanbieders geheel zelfstandig en authentiek.
              </p>
            </div>
          </div>
        </section>

        {/* Services — Wat de coöperatie voor je doet */}
        <section
          id="diensten"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 md:py-28">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Wat je krijgt
            </span>

            <h2 className="mt-4 max-w-[16ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-text-primary">
              Wat de coöperatie voor ons doet
            </h2>

            <div className="mt-12 md:mt-16">
              <BenefitsAccordion />
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton
                href="#contact"
                className="inline-flex whitespace-nowrap"
              >
                Word founding member
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* Behoud van eigen identiteit */}
        <section
          id="zelfstandigheid"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 text-center md:py-28">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Waarom aansluiten
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-display-h2 text-text-primary">
              Sterker samen, met je eigen onderneming
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-body-lg text-text-secondary">
              Aansluiten betekent niet dat je opgaat in een groter geheel. Als
              coöperatie U.A. behouden wij onze zelfstandigheid en eigen
              identiteit — wij vormen één aanspreekpunt voor contracten,
              kwaliteit en compliance richting opdrachtgevers.
            </p>

            <FallingPills />
          </div>
        </section>

        {/* Hoe het werkt — drie stappen */}
        <HowItWorks />

        {/* Onze missie — cultuursensitieve zorg (gespiegelde tegenhanger van "De oplossing") */}
        <section
          id="cultuursensitief"
          className="relative overflow-hidden border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page relative py-20 md:py-28">
            <div className="relative z-10 max-w-4xl text-left md:ml-auto md:text-right">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                Onze missie
              </span>
              <h2 className="mt-6 text-display-h2 text-text-primary">
                Waarom dit ertoe doet
              </h2>
              <p className="mt-7 max-w-3xl text-body-lg text-text-secondary md:ml-auto">
                Cultuursensitieve zorg is geen aanvulling op het zorgstelsel —
                het is een voorwaarde voor goede zorg. Mensen herstellen, groeien
                en participeren beter wanneer zorg aansluit bij wie zij zijn: hun
                taal, hun achtergrond, hun gewoonten en waarden. Een zorgstelsel
                dat dit miskent, sluit mensen uit.
                <br />
                <br />
                Wij maken ons sterk voor zorgaanbieders die deze zorg dagelijks
                waarmaken. Door hen structureel te positioneren in de zorginkoop,
                zorgen wij ervoor dat cultuursensitieve zorg niet langer
                afhankelijk is van toeval of gunst — maar een vanzelfsprekend
                onderdeel van een inclusief en rechtvaardig zorgstelsel.
              </p>
            </div>
          </div>
        </section>

        {/* Veelgestelde vragen */}
        <section
          id="faq"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 lg:gap-16">
              <div className="md:sticky md:top-28 md:col-span-5 md:self-start">
                <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                  Goed om te weten
                </span>
                <h2 className="mt-6 text-display-h2 text-text-primary">
                  Veelgestelde vragen
                </h2>
                <p className="mt-6 max-w-sm text-body-lg text-text-secondary">
                  Geen antwoord op je vraag? Laten we in gesprek gaan.
                </p>
              </div>
              <div className="md:col-span-7">
                <Faq />
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section
          id="contact"
          className="relative overflow-hidden bg-forest text-text-on-dark"
        >
          <div className="container-page relative z-10 py-24 text-center md:py-32">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Word founding member
            </span>

            <h2 className="text-display-h2 mx-auto mt-6 max-w-3xl text-text-on-dark">
              Bouw mee als founding member
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-body-lg text-text-on-dark/80">
              We zoeken oprichtende leden die samen het fundament leggen voor
              structurele, contractwaardige cultuursensitieve zorg in Gelderland —
              en daarbuiten.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="tel:+31621349682" onDark>
                Neem contact op
              </PrimaryButton>
              <a
                href="#hoe-het-werkt"
                className="rounded-pill border-[1.5px] border-text-on-dark bg-transparent px-8 py-3.5 font-semibold text-text-on-dark transition-colors hover:bg-text-on-dark hover:text-forest"
              >
                Lees hoe het werkt
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-background">
        <div className="container-page grid gap-12 border-t border-neutral-border py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/CCSZ Logo.png"
              width={1993}
              height={870}
              alt="CCSZ — Coöperatie voor Cultuursensitieve Zorg"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-body-lg text-text-secondary">
              Zorgcoöperatie voor cultuursensitieve zorg. Samen sterker voor
              cliënt, opdrachtgever en lid.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="overline mb-4 text-text-muted">Contact</p>
            <ul className="space-y-2 text-text-secondary">
              <li className="whitespace-nowrap">
                Van Oldenbarneveldtstraat 92-4
              </li>
              <li>6827 AN Arnhem</li>
              <li>info@ccsz.nl</li>
              <li>
                <a className="hover:text-forest" href="tel:+31621349682">
                  +31 6 21349682
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="overline mb-4 text-text-muted">Voor leden</p>
            <ul className="space-y-2 text-text-secondary">
              <li>Lid worden</li>
              <li>Diensten</li>
              <li>Over CCSZ</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="overline mb-4 text-text-muted">Opdrachtgevers</p>
            <ul className="space-y-2 text-text-secondary">
              <li>Gemeenten</li>
              <li>Zorgkantoren</li>
              <li>Samenwerken</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-border">
          <div className="container-page flex flex-col gap-2 py-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} CCSZ. Alle rechten voorbehouden.</p>
            <p>Cultuursensitieve zorg — samen sterker.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
