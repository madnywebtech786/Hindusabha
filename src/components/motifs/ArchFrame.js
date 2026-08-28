/**
 * Mandir-arch portrait frame: a rounded-top arch built with plain
 * border-radius (top corners = 50%, square base), wrapped in a
 * gradient border and a thin gold trim line. No clip-path math —
 * border-radius always matches the element's real rendered size.
 */
export default function ArchFrame({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-t-full bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] p-1.25 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-t-full ring-1 ring-inset ring-gold/50">
        {children}
      </div>
    </div>
  );
}
