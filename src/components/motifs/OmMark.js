export default function OmMark({ className = "", strokeOnly = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 62c0-9 7-15 15-15 7 0 12 5 12 11 0 5-3 8-8 8-4 0-6-2-6-5 0-3 2-4 4-4M20 62c0 10 8 18 19 18 12 0 20-9 20-20 0-9-6-15-14-16 7-2 11-8 11-15 0-9-8-16-18-16-9 0-16 6-17 15M56 20c6 3 9 8 9 14 0 4-2 7-5 9M70 22c8 6 13 16 13 27 0 17-13 31-30 32"
        stroke={strokeOnly ? "currentColor" : "url(#om-gradient)"}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 16c3 3 5 6 5 6"
        stroke={strokeOnly ? "currentColor" : "url(#om-gradient)"}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle
        cx="80"
        cy="10"
        r="3.2"
        fill={strokeOnly ? "currentColor" : "url(#om-gradient)"}
      />
      <path
        d="M78 24c4 0 7 3 7 7s-3 7-7 7"
        stroke={strokeOnly ? "currentColor" : "url(#om-gradient)"}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="om-gradient" x1="20" y1="10" x2="85" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ED6528" />
          <stop offset="1" stopColor="#C1262C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
