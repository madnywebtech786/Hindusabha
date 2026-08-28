/**
 * Slim repeating paisley/kalash border strip — used as a hairline accent
 * along section edges where a full toran would be too heavy.
 */
export default function DecorativeBorder({ className = "", flip = false }) {
  const units = 24;

  return (
    <div
      className={`h-2.5 w-full sm:h-3 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 480 20" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="border-gradient" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ED6528" />
            <stop offset="0.5" stopColor="#C1262C" />
            <stop offset="1" stopColor="#ED6528" />
          </linearGradient>
        </defs>
        {Array.from({ length: units }).map((_, i) => {
          const cx = (480 / units) * (i + 0.5);
          return (
            <path
              key={i}
              d={`M${cx} 2C${cx + 6} 2 ${cx + 8} 10 ${cx} 18C${cx - 8} 10 ${cx - 6} 2 ${cx} 2Z`}
              fill="url(#border-gradient)"
              opacity="0.85"
            />
          );
        })}
      </svg>
    </div>
  );
}
