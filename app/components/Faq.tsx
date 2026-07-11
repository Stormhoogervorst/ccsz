"use client";

import { Accordion, type AccordionItem } from "./Accordion";

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
  const accordionItems: AccordionItem[] = items.map((item) => ({
    heading: item.question,
    body: item.answer,
  }));

  return <Accordion items={accordionItems} idPrefix="faq" />;
}
