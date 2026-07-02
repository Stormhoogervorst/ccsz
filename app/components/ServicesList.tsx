"use client";

import Image from "next/image";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  linkLabel: string;
  icon?: string;
  iconAlt?: string;
};

const services: Service[] = [
  {
    title: "Samen aanbestedingen winnen",
    description:
      "Wij dienen gezamenlijk in op aanbestedingen van gemeenten en zorgkantoren. Met de schaal en rechtspersoonlijkheid die je als individuele aanbieder mist, maak je nu wél kans op contracten.",
    linkLabel: "Meer over aanbestedingen",
    icon: "/icon-1.png",
    iconAlt: "Icoon voor samen aanbestedingen winnen",
  },
  {
    title: "Kwaliteitsmanagers tot je beschikking",
    description:
      "Onze kwaliteitscommissie ondersteunt je bij kwaliteitsborging, interne audits en het voldoen aan IGJ-, SKJ- en ISO 9001-eisen.",
    linkLabel: "Meer over kwaliteit",
    icon: "/icon-1.png",
    iconAlt: "Icoon voor kwaliteitsmanagement",
  },
  {
    title: "Begeleiding bij compliance en audits",
    description:
      "We loodsen je door certificeringstrajecten en audits, met experts die de eisen van opdrachtgevers door en door kennen.",
    linkLabel: "Meer over compliance",
    icon: "/icon-2.png",
    iconAlt: "Icoon voor compliance en audits",
  },
];

export function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <ul className="border-t border-neutral-border">
      {services.map((service, index) => {
        const isActive = active === index;
        return (
          <li
            key={service.title}
            className={`border-b transition-colors duration-300 ${
              isActive
                ? "border-forest bg-forest text-text-on-dark"
                : "border-neutral-border text-text-primary"
            }`}
            onMouseEnter={() => setActive(index)}
            onFocusCapture={() => setActive(index)}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-expanded={isActive}
              className="container-page flex w-full items-center gap-6 py-8 text-left md:py-10"
            >
              <span
                className={`overline shrink-0 ${
                  isActive ? "text-text-on-dark/70" : "text-text-muted"
                }`}
              >
                {`Ø${index + 1}`}
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center md:h-12 md:w-12">
                {service.icon && (
                  <Image
                    src={service.icon}
                    width={48}
                    height={48}
                    alt={service.iconAlt ?? service.title}
                    className="h-full w-full object-contain"
                  />
                )}
              </span>

              <span className="flex flex-1 flex-col gap-3">
                <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.title}
                </span>

                <span
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="block max-w-2xl pt-1 text-base leading-relaxed text-text-on-dark/80">
                      {service.description}
                    </span>
                  </span>
                </span>
              </span>

              <span
                className={`hidden shrink-0 items-center gap-2 text-sm font-semibold md:flex ${
                  isActive ? "text-text-on-dark" : "text-text-primary"
                }`}
              >
                {service.linkLabel}
                <span aria-hidden="true">→</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
