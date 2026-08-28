/**
 * Kalash — the sacred pot topped with mango leaves and a coconut,
 * symbolising auspicious beginnings. Used on About/Mission sections.
 */
export default function KalashMark({ className = "" }) {
  return (
    <svg viewBox="0 0 60 68" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="kalash-body" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ED6528" />
          <stop offset="1" stopColor="#C1262C" />
        </linearGradient>
      </defs>

      {/* coconut */}
      <circle cx="30" cy="12" r="9" fill="#C89B4A" />
      <path d="M30 4V20M22 12H38" stroke="#96181d" strokeWidth="0.8" opacity="0.5" />

      {/* mango leaves */}
      <path d="M30 18C22 14 14 16 10 22C18 24 24 22 30 18Z" fill="#ED6528" opacity="0.9" />
      <path d="M30 18C38 14 46 16 50 22C42 24 36 22 30 18Z" fill="#C1262C" opacity="0.9" />

      {/* pot */}
      <path
        d="M16 26H44L40 60C40 64 35 67 30 67C25 67 20 64 20 60L16 26Z"
        fill="url(#kalash-body)"
      />
      <rect x="14" y="22" width="32" height="6" rx="2" fill="#C89B4A" />
      <path d="M20 40H40" stroke="#F6D9A6" strokeWidth="1" opacity="0.5" />
      <circle cx="30" cy="48" r="3" fill="#F6D9A6" opacity="0.6" />
    </svg>
  );
}
