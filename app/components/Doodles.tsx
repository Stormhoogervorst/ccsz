type DoodleProps = {
  className?: string;
};

/** Loose hand-drawn teal smiley: a curved mouth with two dots above. */
export function TealSmiley({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 50c8 22 32 33 52 31 22-2 38-16 41-38"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M40 18c-2 7-1 13 0 18"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M84 16c1 7 1 13-1 18"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Loose hand-drawn teal brushstroke used to underline a key word. */
export function TealUnderline({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 320 24"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M6 15c54-7 120-10 186-8 38 1 78 3 122 9"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Loose hand-drawn teal heart accent. */
export function TealHeart({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M50 80C20 58 8 40 12 24 15 11 30 8 40 16c5 4 8 9 10 14 2-5 5-10 10-14 10-8 25-5 28 8 4 16-8 34-38 56Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
