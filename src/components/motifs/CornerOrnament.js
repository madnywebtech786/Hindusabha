/**
 * Small filigree corner flourish — placed at the corners of framed cards
 * and panels to give them a temple-carving quality instead of a plain box.
 */
export default function CornerOrnament({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M2 2V16C2 24 8 30 16 30M2 2H16C24 2 30 8 30 16"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="2.5" fill="currentColor" />
      <circle cx="16" cy="30" r="1.8" fill="currentColor" />
      <circle cx="30" cy="16" r="1.8" fill="currentColor" />
    </svg>
  );
}
