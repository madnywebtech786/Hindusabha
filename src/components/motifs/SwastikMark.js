/**
 * The Swastik — an auspicious Hindu symbol of wellbeing, used sparingly
 * and small, as a corner or accent mark rather than a dominant motif.
 */
export default function SwastikMark({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 6V17M20 6H28M20 34V23M20 34H12M6 20H17M6 20V12M34 20H23M34 20V28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}
