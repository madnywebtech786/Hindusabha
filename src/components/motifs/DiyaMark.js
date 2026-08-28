export default function DiyaMark({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="diya-flame" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FFD37A" />
          <stop offset="1" stopColor="#ED6528" />
        </linearGradient>
        <linearGradient id="diya-bowl" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#C89B4A" />
          <stop offset="1" stopColor="#96181d" />
        </linearGradient>
      </defs>
      <path
        d="M30 20C34 27 34 33 30 37C26 33 26 27 30 20Z"
        fill="url(#diya-flame)"
      />
      <path
        d="M8 40C8 40 16 46 30 46C44 46 52 40 52 40C50 47 41 52 30 52C19 52 10 47 8 40Z"
        fill="url(#diya-bowl)"
      />
      <ellipse cx="30" cy="40" rx="22" ry="5" fill="none" stroke="#C89B4A" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}
