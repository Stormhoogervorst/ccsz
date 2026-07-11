"use client";

import { Accordion, type AccordionItem } from "./Accordion";

const benefits: AccordionItem[] = [
  {
    heading: "Samen aanbestedingen winnen",
    body: "Wij dienen gezamenlijk in op aanbestedingen van gemeenten en zorgkantoren. Met de schaal en het aanbod die wij als individuele aanbieder missen, maken wij nu grote kans op contracten. Op basis van je aanbod van zorg en de beschikbaarheid ervan matcht de coöperatie de zorgvraag — zowel actief als doordat je zelf reageert. Transparant.",
  },
  {
    heading: "Kwaliteit en compliance garantie",
    body: "Als coöperatie staan wij garant voor de kwaliteit van ons collectief, en dat vraagt iets van elk lid. Leden zijn zelf verantwoordelijk voor het naleven van de kwaliteitseisen; ons team Kwaliteit & Compliance ondersteunt hen daarbij met kwaliteitsborging, interne audits en het voldoen aan IGJ-, SKJ- en ISO 9001-eisen. Regelmatige audits maken kwaliteit tot een doorlopend proces. De wederzijdse rechten en plichten staan in het huishoudelijk reglement, dat zowel de coöperatie als elk lid beschermt.",
  },
  {
    heading: "Begeleiding bij compliance en audits",
    body: "We loodsen je door certificeringstrajecten en audits, met experts die de eisen van opdrachtgevers door en door kennen.",
  },
];

export function BenefitsAccordion() {
  return <Accordion items={benefits} idPrefix="benefit" />;
}
