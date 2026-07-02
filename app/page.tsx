import Image from "next/image";
import { Header } from "./components/Header";
import { Faq } from "./components/Faq";
import { FallingPills } from "./components/FallingPills";

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

const benefits = [
  {
    title: "Samen aanbestedingen winnen",
    description:
      "Wij dienen gezamenlijk in op aanbestedingen van gemeenten en zorgkantoren. Met de schaal en het aanbod die wij als individuele aanbieder missen, maken wij nu grote kans op contracten. Op basis van je aanbod van zorg en de beschikbaarheid ervan matcht de coöperatie de zorgvraag — zowel actief als doordat je zelf reageert. Transparant.",
  },
  {
    title: "Kwaliteit en compliance garantie",
    description:
      "Als coöperatie staan wij garant voor de kwaliteit van ons collectief, en dat vraagt iets van elk lid. Leden zijn zelf verantwoordelijk voor het naleven van de kwaliteitseisen; ons team Kwaliteit & Compliance ondersteunt hen daarbij met kwaliteitsborging, interne audits en het voldoen aan IGJ-, SKJ- en ISO 9001-eisen. Regelmatige audits maken kwaliteit tot een doorlopend proces. De wederzijdse rechten en plichten staan in het huishoudelijk reglement, dat zowel de coöperatie als elk lid beschermt.",
  },
  {
    title: "Begeleiding bij compliance en audits",
    description:
      "We loodsen je door certificeringstrajecten en audits, met experts die de eisen van opdrachtgevers door en door kennen.",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-neutral-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-background">
          <div className="container-page relative z-10 py-14 md:py-20 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(36rem,42rem)_minmax(16rem,1fr)] lg:gap-8 xl:grid-cols-[minmax(38.75rem,42.5rem)_minmax(18rem,1fr)] xl:gap-16">
              <div className="w-full max-w-[42.5rem]">
                <span className="inline-flex items-center rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                  Coöperatie Cultuur Sensitieve Zorg
                </span>

                <h1 className="mt-7 text-[clamp(1.75rem,8.75vw,4.5rem)] font-bold leading-none tracking-[-0.02em] text-text-primary sm:text-display-h1">
                  <span className="block whitespace-nowrap">
                    Samen leveren we
                  </span>
                  <span className="block whitespace-nowrap">de beste zorg</span>
                </h1>

                <p className="mt-7 max-w-xl text-body-lg text-text-secondary">
                  Wij brengen gespecialiseerde aanbieders van cultuursensitieve zorg
                  samen, zodat cliënten worden gematcht met een zorgverlener die hun
                  taal spreekt en achtergrond begrijpt. Eén aanspreekpunt voor
                  verwijzers, zorg die écht aansluit voor de cliënt.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="rounded-pill bg-forest px-7 py-3.5 text-center font-semibold text-text-on-dark transition-colors hover:bg-forest-dark"
                  >
                    Word founding member
                  </a>
                  <a
                    href="#hoe-het-werkt"
                    className="rounded-pill bg-lila px-7 py-3.5 text-center font-semibold text-text-on-lime transition-colors hover:bg-lila/90"
                  >
                    Lees hoe het werkt
                  </a>
                </div>
              </div>

              <div className="hidden justify-end lg:flex">
                <Image
                  src="/icoontje.svg"
                  width={2000}
                  height={2000}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[24rem] lg:max-w-[28.75rem]"
                  priority
                />
              </div>
            </div>
          </div>

        </section>

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
          <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-start md:py-28 lg:gap-16">
            <div className="min-w-0 md:sticky md:top-28 md:col-span-5 lg:col-span-5">
              <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
                Wat je krijgt
              </span>

              <h2 className="mt-6 text-[clamp(1.85rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text-primary">
                <span className="block whitespace-normal sm:whitespace-nowrap">Wat de coöperatie</span>
                <span className="block whitespace-normal sm:whitespace-nowrap">voor ons doet</span>
              </h2>

              <div className="mt-9 hidden gap-3 sm:flex-row md:flex md:flex-col lg:flex-row">
                <a
                  href="#contact"
                  className="whitespace-nowrap rounded-pill bg-forest px-6 py-3 text-center text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-dark"
                >
                  Word founding member
                </a>
                <a
                  href="#hoe-het-werkt"
                  className="whitespace-nowrap rounded-pill border-[1.5px] border-forest bg-transparent px-6 py-3 text-center text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
                >
                  Lees hoe het werkt
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
              <a
                href="#contact"
                className="whitespace-nowrap rounded-pill bg-forest px-6 py-3 text-center text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-dark"
              >
                Word founding member
              </a>
              <a
                href="#hoe-het-werkt"
                className="whitespace-nowrap rounded-pill border-[1.5px] border-forest bg-transparent px-6 py-3 text-center text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
              >
                Lees hoe het werkt
              </a>
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
        <section
          id="hoe-het-werkt"
          className="border-t border-neutral-border bg-neutral-background"
        >
          <div className="container-page py-20 text-center md:py-28">
            <span className="inline-flex rounded-pill bg-lime px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.08em] text-text-on-lime">
              Hoe het werkt
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-display-h2 text-text-primary">
              Founding member worden in drie stappen
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-body-lg text-text-secondary">
              De coöperatie is in oprichting. We starten zodra de eerste founding
              members zich verbinden — en werken de exacte voorwaarden samen met
              elkaar uit.
            </p>

            <ol className="mt-12 grid gap-6 text-left sm:grid-cols-2 md:mt-16 md:grid-cols-3">
              {[
                {
                  title: "Kennismaken",
                  text: "We verkennen samen of wij bij elkaar passen.",
                },
                {
                  title: "Aansluiten",
                  text: "Je sluit je aan als founding member en samen bouwen wij aan compliance- en kwaliteitsinfrastructuur.",
                },
                {
                  title: "Samen groeien",
                  text: "Wij schrijven in op opdrachten en halen nieuwe contracten binnen, vergroten ons aantal complementaire leden en groeien uit tot een zichtbare, toonaangevende partner voor cultuursensitieve zorg.",
                },
              ].map((item, index) => (
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
              <a
                href="tel:+31621349682"
                className="rounded-pill bg-lila px-8 py-3.5 font-semibold text-text-on-lime transition-colors hover:bg-lila/90"
              >
                Neem contact op
              </a>
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
