import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";
import { FallingPills } from "../components/FallingPills";
import { PrimaryButton } from "../components/PrimaryButton";

export const metadata: Metadata = {
  title: "CCSZ — Cultuursensitieve zorg inkopen voor gemeenten & zorgkantoren",
  description:
    "Eén contractpartij, geborgde kwaliteit en een netwerk van gespecialiseerde aanbieders. CCSZ maakt het inkopen van cultuursensitieve zorg eenvoudig, betrouwbaar en toetsbaar.",
};

const challenges = [
  {
    title: "Veel losse contracten",
    text: "Tientallen kleine aanbieders betekenen tientallen contracten, gesprekken en verantwoordingen.",
  },
  {
    title: "Kwaliteit moeilijk te toetsen",
    text: "Zonder uniforme eisen is de kwaliteit per aanbieder ongelijk en lastig te vergelijken.",
  },
  {
    title: "Hoge beheerlast",
    text: "Monitoring, facturatie en verantwoording kosten onevenredig veel tijd.",
  },
];

const floatingLabels = [
  {
    label: "VEEL CONTRACTEN",
    className:
      "left-4 top-8 -rotate-6 bg-forest text-text-on-dark sm:left-8 md:left-6 md:top-10",
  },
  {
    label: "ONGELIJKE KWALITEIT",
    className:
      "right-3 top-1/2 rotate-6 bg-green text-text-on-dark sm:right-8 md:right-6",
  },
  {
    label: "HOGE BEHEERLAST",
    className:
      "bottom-8 left-8 rotate-3 bg-lila text-text-on-lime sm:left-14 md:bottom-10 md:left-8",
  },
];

const benefits = [
  {
    title: "Eén centraal aanspreekpunt",
    description:
      "Geen tientallen losse contracten, maar één contractpartij voor het volledige cultuursensitieve aanbod. Eén aanspreekpunt voor afspraken, vragen en verantwoording.",
  },
  {
    title: "Geborgde, toetsbare kwaliteit",
    description:
      "Aanbieders worden alleen toegelaten als ze aan onze kwaliteitseisen voldoen. We toetsen doorlopend op IGJ-, SKJ- en ISO 9001-niveau, zodat u zeker bent van kwaliteit.",
  },
  {
    title: "Geprofessionaliseerd contact",
    description:
      "Wij professionaliseren de communicatie tussen aanbieders en opdrachtgever: heldere afspraken, uniforme rapportage en korte lijnen.",
  },
  {
    title: "Lagere administratieve last",
    description:
      "Eén factuur, één verantwoordingslijn, één gesprekspartner. Wij nemen het coördinatiewerk uit handen, zodat uw team zich op beleid kan richten.",
  },
];

const steps = [
  {
    title: "Kennismaken",
    text: "We verkennen samen uw inkoopbehoefte en hoe het cultuursensitieve aanbod van CCSZ daarop aansluit.",
  },
  {
    title: "Afspraken maken",
    text: "We leggen heldere afspraken vast over aanbod, kwaliteit, rapportage en verantwoording.",
  },
  {
    title: "Samenwerken",
    text: "U contracteert met één partij; wij coördineren de aangesloten aanbieders en borgen de kwaliteit.",
  },
];

const pillLabels = [
  "Kwaliteit",
  "Eén aanspreekpunt",
  "Toetsbaar",
  "Betrouwbaar",
  "Cultuursensitief",
  "Dekkend",
  "Ontzorgd",
  "Transparant",
];

const faqItems = [
  {
    question: "Met wie sluiten we het contract?",
    answer:
      "Met de Coöperatie Cultuur Sensitieve Zorg U.A. als één contractpartij. Wij coördineren de aangesloten aanbieders en zijn uw centrale aanspreekpunt.",
  },
  {
    question: "Hoe borgt CCSZ de kwaliteit?",
    answer:
      "Aanbieders worden alleen toegelaten als ze aan onze kwaliteitseisen voldoen, en we toetsen doorlopend op kaders als IGJ, SKJ en ISO 9001.",
  },
  {
    question: "Welke zorgvormen biedt CCSZ?",
    answer:
      "Het volledige spectrum van cultuursensitieve zorg voor alle leeftijden: begeleiding, behandeling, therapie, thuiszorg, woonzorg, dagbesteding, opvang en meer.",
  },
  {
    question: "Voor welke regio is CCSZ beschikbaar?",
    answer:
      "In de eerste fase richten we ons op de zorgregio's in Gelderland, met de ambitie daarna uit te breiden.",
  },
  {
    question: "Hoe verloopt de facturatie en verantwoording?",
    answer:
      "Centraal via de coöperatie: één factuurstroom en één verantwoordingslijn, in plaats van losse afhandeling per aanbieder.",
  },
];

export default function Gemeenten() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-neutral-background">
      <Header ctaLabel="Plan een kennismaking" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-background">
          <div className="container-page relative z-10 pt-14 md:pt-20 lg:pt-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                Voor gemeenten &amp; zorgkantoren
              </span>

              <h1 className="mt-7 text-display-h1 text-text-primary">
                Cultuursensitieve zorg inkopen, zonder zorgen
              </h1>

              <p className="mt-7 max-w-xl text-body-lg text-text-secondary">
                Eén contractpartij, geborgde kwaliteit en een netwerk van
                gespecialiseerde aanbieders. CCSZ maakt het inkopen van
                cultuursensitieve zorg eenvoudig, betrouwbaar en toetsbaar.
              </p>

              <div className="mb-16 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:mb-24">
                <PrimaryButton href="#contact" className="inline-flex">
                  Plan een kennismaking
                </PrimaryButton>
                <a
                  href="#diensten"
                  className="rounded-pill border-[1.5px] border-forest bg-transparent px-7 py-3.5 text-center font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
                >
                  Bekijk ons aanbod
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* De uitdaging */}
        <section id="aanleiding" className="bg-neutral-background">
          <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-center md:py-28 lg:gap-16">
            <div className="md:col-span-7 lg:col-span-7">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                De uitdaging
              </span>
              <h2 className="mt-6 text-display-h2 text-text-primary">
                Goede cultuursensitieve zorg inkopen is complex
              </h2>
              <p className="mt-6 text-body-lg text-text-secondary">
                Cultuursensitieve zorg is versnipperd over veel kleine
                aanbieders. Dat maakt inkoop arbeidsintensief, kwaliteit lastig
                te bewaken en contractbeheer ingewikkeld.
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
                Eén aanspreekpunt, geborgde kwaliteit.
              </h2>
              <p className="mt-7 max-w-3xl text-body-lg text-text-secondary">
                CCSZ bundelt gespecialiseerde cultuursensitieve aanbieders onder
                één coöperatie met één kwaliteitskeurmerk. U contracteert met één
                betrouwbare partij; wij regelen de coördinatie, kwaliteit en
                verantwoording achter de schermen. Zo koopt u breed
                cultuursensitief aanbod in, met de eenvoud van één contract.
              </p>
            </div>
          </div>
        </section>

        {/* Wat CCSZ voor u doet */}
        <section
          id="diensten"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-start md:py-28 lg:gap-16">
            <div className="min-w-0 md:sticky md:top-28 md:col-span-5 lg:col-span-5">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                Wat wij bieden
              </span>

              <h2 className="mt-6 text-[clamp(1.85rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text-primary">
                <span className="block whitespace-normal sm:whitespace-nowrap">Wat CCSZ</span>
                <span className="block whitespace-normal sm:whitespace-nowrap">voor u doet</span>
              </h2>

              <div className="mt-9 hidden gap-3 sm:flex-row md:flex md:flex-col lg:flex-row">
                <PrimaryButton
                  href="#contact"
                  className="inline-flex whitespace-nowrap"
                >
                  Plan een kennismaking
                </PrimaryButton>
                <a
                  href="#waarom"
                  className="whitespace-nowrap rounded-pill border-[1.5px] border-forest bg-transparent px-6 py-3 text-center text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
                >
                  Bekijk ons aanbod
                </a>
              </div>
            </div>

            <ol className="grid min-w-0 gap-5 md:col-span-7 lg:col-span-7">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit.title}
                  className="min-w-0 rounded-card bg-neutral-background-alt p-6 shadow-card sm:p-7"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-lila text-lg font-bold text-text-on-lime">
                      {index + 1}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold leading-snug break-words text-text-primary sm:text-display-h3">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-base text-text-secondary sm:text-body-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-3 sm:flex-row md:hidden">
              <PrimaryButton
                href="#contact"
                className="inline-flex whitespace-nowrap"
              >
                Plan een kennismaking
              </PrimaryButton>
              <a
                href="#waarom"
                className="whitespace-nowrap rounded-pill border-[1.5px] border-forest bg-transparent px-6 py-3 text-center text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
              >
                Bekijk ons aanbod
              </a>
            </div>
          </div>
        </section>

        {/* Waarom CCSZ — keyword pills */}
        <section
          id="waarom"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 text-center md:py-28">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Waarom CCSZ
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-display-h2 text-text-primary">
              Betrouwbaar inkopen, breed gedekt
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-body-lg text-text-secondary">
              Met CCSZ koopt u cultuursensitieve zorg in die aansluit bij een
              diverse bevolking — geborgd, gecoördineerd en toetsbaar, zonder dat
              u tientallen losse relaties hoeft te beheren.
            </p>

            <FallingPills labels={pillLabels} />
          </div>
        </section>

        {/* Hoe het werkt — drie stappen */}
        <section
          id="hoe-het-werkt"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 text-center md:py-28">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Hoe het werkt
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-display-h2 text-text-primary">
              Samenwerken in drie stappen
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-body-lg text-text-secondary">
              We denken graag mee over hoe CCSZ aansluit bij uw inkoop- en
              aanbestedingskalender.
            </p>

            <ol className="mt-12 grid gap-6 text-left sm:grid-cols-2 md:mt-16 md:grid-cols-3">
              {steps.map((item, index) => (
                <li
                  key={item.title}
                  className="flex h-full flex-col rounded-card bg-forest p-8 text-text-on-dark shadow-card"
                >
                  <span className="text-stat-number text-lime">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-display-h3 font-bold text-text-on-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-lg text-text-on-dark/80">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Onze missie — gespiegeld */}
        <section
          id="missie"
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
                Een diverse samenleving verdient zorg die aansluit bij ieders
                taal, gewoonten en achtergrond. CCSZ zorgt dat gemeenten en
                zorgkantoren dit aanbod betrouwbaar kunnen inkopen — en dat
                cultuursensitieve aanbieders structureel een plek krijgen in de
                zorginkoop.
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
                  Geen antwoord op uw vraag? We denken graag met u mee in een
                  persoonlijk gesprek.
                </p>
              </div>
              <div className="md:col-span-7">
                <Faq items={faqItems} />
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
              Samenwerken
            </span>

            <h2 className="text-display-h2 mx-auto mt-6 max-w-3xl text-text-on-dark">
              Cultuursensitieve zorg inkopen met vertrouwen?
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-body-lg text-text-on-dark/80">
              We denken graag met u mee over hoe CCSZ aansluit bij uw inkoop- en
              aanbestedingsdoelen. Plan een vrijblijvende kennismaking.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="tel:+31621349682" onDark>
                Plan een kennismaking
              </PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-background">
        <div className="container-page grid gap-12 border-t border-neutral-border py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/CCSZ Logo.png"
              width={1993}
              height={870}
              alt="CCSZ — Coöperatie voor Cultuursensitieve Zorg"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-body-lg text-text-secondary">
              Zorgcoöperatie voor cultuursensitieve zorg. Samen sterker voor
              cliënt, lid en opdrachtgever.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="overline mb-4 text-text-muted">Contact</p>
            <ul className="space-y-2 text-text-secondary">
              <li>Placeholderstraat 1</li>
              <li>0000 AA Plaatsnaam</li>
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
