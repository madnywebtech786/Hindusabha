/**
 * Small centered lotus glyph used as an ornament beneath section eyebrows.
 */
export default function LotusMark({ className = "" }) {
  return (
    <svg viewBox="0 0 60 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lotus-gradient" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ED6528" />
          <stop offset="1" stopColor="#C1262C" />
        </linearGradient>
      </defs>
      <line x1="0" y1="12" x2="20" y2="12" stroke="url(#lotus-gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="12" x2="60" y2="12" stroke="url(#lotus-gradient)" strokeWidth="1" opacity="0.6" />
      <path
        d="M30 6C27 6 24 9 24 12C24 9 21 8 19 10C20 13 23 15 30 16C37 15 40 13 41 10C39 8 36 9 36 12C36 9 33 6 30 6Z"
        fill="url(#lotus-gradient)"
      />
      <circle cx="30" cy="12" r="2" fill="#C89B4A" />
    </svg>
  );
}
