"use client";

import { useState } from "react";

export type AccordionItem = {
  heading: string;
  body: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Prefix used to build unique, stable ids for buttons and panels. */
  idPrefix: string;
  /** Index that is open on first render. Pass null to start fully collapsed. */
  defaultOpenIndex?: number | null;
};

export function Accordion({
  items,
  idPrefix,
  defaultOpenIndex = 0,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <ul className="min-w-0 border-t border-neutral-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <li
            key={item.heading}
            className={`border-b border-neutral-border transition-colors duration-200 motion-reduce:transition-none ${
              isOpen
                ? "bg-neutral-background-alt"
                : "bg-transparent hover:bg-neutral-background-alt/60"
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
                className="flex w-full items-center gap-5 px-5 py-6 text-left md:px-6 md:py-7"
              >
                <span className="w-8 shrink-0 text-sm font-medium tabular-nums text-text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 text-lg leading-snug tracking-tight text-text-primary md:text-xl ${
                    isOpen ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.heading}
                </span>

                <span
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-250 ease-out motion-reduce:transition-none ${
                    isOpen ? "rotate-45 text-text-primary" : "text-text-muted"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="2"
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
              className={`grid transition-all duration-250 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-7 pl-[4.5rem] text-base leading-relaxed text-text-secondary md:px-6 md:pl-[4.75rem] md:text-body-lg">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
