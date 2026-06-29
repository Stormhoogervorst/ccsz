"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "Verlies ik mijn zelfstandigheid?",
    answer:
      "Nee. Allen zijn en blijven een zelfstandige organisatie met je eigen identiteit en team. De coöperatie treedt op als contractpartij; jij levert de zorg als onderaannemer.",
  },
  {
    question: "Wat kost het lidmaatschap?",
    answer:
      "De coöperatie is in oprichting en de exacte bijdragen werken we samen met de founding members uit. We bespreken dit graag in een persoonlijk gesprek. Doelstelling is een zo laag mogelijke afdracht door de leden.",
  },
  {
    question: "Voor welke regio geldt dit?",
    answer:
      "In de eerste fase richten we ons op de zeven zorgregio's in Gelderland, met de ambitie daarna uit te breiden.",
  },
  {
    question: "Welke zorgvormen vallen eronder?",
    answer:
      "Het volledige spectrum van cultuursensitieve zorg voor alle leeftijden: begeleiding, behandeling, therapie, thuiszorg, woonzorg, dagbesteding, opvang en meer.",
  },
  {
    question: "Wat wordt er van mij verwacht aan kwaliteit?",
    answer:
      "Je voldoet aan de gangbare kwaliteitskaders zoals IGJ, SKJ en ISO 9001.",
  },
  {
    question: "Wat wordt er van mij verwacht rondom compliance?",
    answer:
      "Je voldoet aan de gangbare compliance-eisen, zoals financiële gezondheid, VOG's, BIBOB, RvT en de gangbare aanbestedingseisen.",
  },
  {
    question: "Kunnen wij elkaar beconcurreren?",
    answer:
      "Doelstelling is een complementair en volledig cultuursensitief aanbod te bieden, ook qua capaciteit. Aanbieders kunnen hetzelfde aanbieden, maar in totale capaciteit moet er voldoende werk zijn en groei mogelijk zijn. De opdrachten die binnenkomen zijn altijd transparant. In het huishoudelijk reglement staat uitgewerkt hoe het werkt bij gelijk aanbod en gelijke vraag.",
  },
];

type FaqProps = {
  items?: FaqItem[];
};

export function Faq({ items = defaultItems }: FaqProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <li
            key={item.question}
            className={`overflow-hidden rounded-card transition-all duration-300 ${
              isOpen
                ? "bg-neutral-surface shadow-card ring-1 ring-forest/20"
                : "bg-neutral-background-alt shadow-sm hover:bg-neutral-surface hover:shadow-card"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8 md:py-6"
              >
                <span
                  className={`text-lg font-semibold tracking-tight transition-colors md:text-xl ${
                    isOpen ? "text-forest" : "text-text-primary"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-pill transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-lila text-text-on-lime"
                      : "bg-lila text-text-on-lime"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-6 pb-6 text-body-lg text-text-secondary md:px-8 md:pb-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
