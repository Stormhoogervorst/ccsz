"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const items: FaqItem[] = [
  {
    question: "Verlies ik mijn zelfstandigheid?",
    answer:
      "Nee. Je blijft een zelfstandige organisatie met je eigen identiteit en team. De coöperatie treedt op als contractpartij; jij levert de zorg als onderaannemer onder ons keurmerk.",
  },
  {
    question: "Wat kost het lidmaatschap?",
    answer:
      "De coöperatie is in oprichting en de exacte bijdragen werken we samen met de founding members uit. We bespreken dit graag in een persoonlijk gesprek.",
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
      "Je voldoet (of werkt toe) aan de gangbare kwaliteitskaders zoals IGJ, SKJ en ISO 9001. Daar krijg je onze ondersteuning bij.",
  },
];

export function Faq() {
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
