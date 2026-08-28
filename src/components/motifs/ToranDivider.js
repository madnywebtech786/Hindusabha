/**
 * Ornamental toran (door valance) divider — a string of mango-leaf style
 * pendants with hanging tassels and bells, echoing the bandanwar hung
 * across mandir and home entrances during festivals.
 */
export default function ToranDivider({ className = "" }) {
  const leaves = 11;
  const spacing = 700 / leaves;

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 700 86" className="h-16 w-full sm:h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="toran-leaf" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#ED6528" />
            <stop offset="1" stopColor="#C1262C" />
          </linearGradient>
        </defs>

        {/* suspension cord */}
        <line x1="0" y1="4" x2="700" y2="4" stroke="#C89B4A" strokeWidth="2" />

        {Array.from({ length: leaves }).map((_, i) => {
          const cx = spacing * (i + 0.5);
          const drop = i % 2 === 0 ? 0 : 10;
          return (
            <g key={i} transform={`translate(${cx} ${4 + drop})`}>
              <line x1="0" y1="0" x2="0" y2="10" stroke="#C89B4A" strokeWidth="1.5" />
              {/* mango-leaf pendant */}
              <path
                d="M0 10C-11 18 -11 34 0 46C11 34 11 18 0 10Z"
                fill="url(#toran-leaf)"
              />
              <path d="M0 14V42" stroke="#F6D9A6" strokeWidth="1" opacity="0.7" />
              {/* tassel + bell */}
              <line x1="0" y1="46" x2="0" y2="60" stroke="#C89B4A" strokeWidth="1.2" />
              <circle cx="0" cy="65" r="4.5" fill="#C89B4A" />
              <circle cx="0" cy="65" r="4.5" fill="none" stroke="#96181d" strokeWidth="0.6" opacity="0.4" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
