import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Kennismaken",
    text: "We verkennen samen of wij bij elkaar passen.",
    image: {
      src: "/foto-3.jpg",
      alt: "Kennismakingsgesprek tussen zorgaanbieder en de coöperatie",
    },
  },
  {
    number: "02",
    title: "Aansluiten",
    text: "Je sluit je aan als founding member en samen bouwen wij aan compliance- en kwaliteitsinfrastructuur.",
    image: {
      src: "/foto-5.webp",
      alt: "Zorgprofessionals werken samen aan compliance- en kwaliteitsinfrastructuur",
    },
  },
  {
    number: "03",
    title: "Samen groeien",
    text: "Wij winnen nieuwe contracten, breiden ons ledennetwerk uit en groeien uit tot dé partner voor cultuursensitieve zorg.",
    image: {
      src: "/foto-6.jpg",
      alt: "Groeiende samenwerking binnen de coöperatie voor cultuursensitieve zorg",
    },
  },
];

/* Kolom-specifieke klassen voor het hoog-laag-hoog ritme op desktop:
   de middelste kolom start lager (pt) en toont de foto bovenaan. */
const columnClasses = [
  "lg:pr-10 xl:pr-14",
  "lg:border-x lg:border-neutral-border/70 lg:px-10 lg:pt-28 xl:px-14",
  "lg:pl-10 xl:pl-14",
];

export function HowItWorks() {
  return (
    <section
      id="hoe-het-werkt"
      className="border-t border-neutral-border bg-neutral-background"
    >
      <div className="container-page py-20 md:py-28">
        <h2 className="mx-auto max-w-3xl text-center text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-primary">
          Founding member worden in drie stappen
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-center text-body-lg text-text-secondary">
          De coöperatie is in oprichting. We starten zodra de eerste founding
          members zich verbinden — en werken de exacte voorwaarden samen met
          elkaar uit.
        </p>

        <ol className="mt-14 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:mt-20 lg:grid-cols-3 lg:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`flex flex-col gap-10 text-center ${columnClasses[index]}`}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-forest text-sm font-semibold text-text-on-dark"
                >
                  {step.number}
                </span>
                <h3 className="mt-5 text-[1.6rem] font-bold leading-tight text-text-primary">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-base leading-[1.6] text-text-secondary">
                  {step.text}
                </p>
              </div>

              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-card bg-neutral-surface-muted ${
                  index === 1 ? "lg:order-first" : "lg:mt-auto"
                }`}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
