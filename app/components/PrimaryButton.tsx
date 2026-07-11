import type { ComponentPropsWithoutRef } from "react";

type PrimaryButtonProps = ComponentPropsWithoutRef<"a"> & {
  /** Compacte variant voor de navbar; "md" is de standaard content-CTA. */
  size?: "sm" | "md";
  /** Zet de focusring op wit voor gebruik op donkere/foto-achtergronden. */
  onDark?: boolean;
  disabled?: boolean;
};

const sizes = {
  sm: {
    root: "gap-2 pl-5 pr-1.5 py-1.5 text-sm",
    circle: "h-8 w-8",
    icon: "h-4 w-4",
  },
  md: {
    root: "gap-4 pl-8 pr-2 py-2 text-base",
    circle: "h-11 w-11",
    icon: "h-5 w-5",
  },
} as const;

/**
 * Gedeelde primaire CTA: witte pill met een zacht-lila cirkel en pijl.
 * Eén bron voor álle primaire knoppen zodat ze consistent blijven.
 */
export function PrimaryButton({
  children,
  className = "inline-flex",
  size = "md",
  onDark = false,
  disabled = false,
  ...props
}: PrimaryButtonProps) {
  const s = sizes[size];

  return (
    <a
      {...props}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      className={[
        "group items-center justify-between rounded-pill border border-black/5 bg-white font-semibold text-text-primary shadow-card",
        "transition-shadow duration-200 ease-out hover:shadow-md",
        "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2",
        onDark ? "focus-visible:outline-white" : "focus-visible:outline-forest",
        disabled ? "pointer-events-none opacity-50" : "",
        s.root,
        className,
      ].join(" ")}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`flex ${s.circle} shrink-0 items-center justify-center rounded-full bg-lila transition-transform duration-200 ease-out group-hover:scale-[1.08]`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`${s.icon} text-text-primary transition-transform duration-200 ease-out group-hover:translate-x-[3px]`}
        >
          <path
            d="M4 12h15m0 0-6-6m6 6-6 6"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
