/**
 * A denser, more elaborate radial rangoli pattern — layered petals and
 * dotted rings — used as a large ambient backdrop where a section needs
 * more visual weight than the plain MandalaBackdrop provides.
 */
export default function RangoliPattern({ className = "" }) {
  const petals = 12;

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" strokeWidth="1" />

      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i / petals) * Math.PI * 2;
        const x1 = 200 + Math.cos(angle) * 70;
        const y1 = 200 + Math.sin(angle) * 70;
        const x2 = 200 + Math.cos(angle) * 150;
        const y2 = 200 + Math.sin(angle) * 150;
        const midAngle = angle + Math.PI / petals;
        const px = 200 + Math.cos(midAngle) * 110;
        const py = 200 + Math.sin(midAngle) * 110;

        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.75" />
            <path
              d={`M${x1} ${y1} Q${px} ${py} ${x2} ${y2}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>
        );
      })}

      {Array.from({ length: petals * 2 }).map((_, i) => {
        const angle = (i / (petals * 2)) * Math.PI * 2;
        const cx = 200 + Math.cos(angle) * 190;
        const cy = 200 + Math.sin(angle) * 190;
        return <circle key={i} cx={cx} cy={cy} r="2.5" fill="currentColor" />;
      })}

      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i / petals) * Math.PI * 2;
        const cx = 200 + Math.cos(angle) * 70;
        const cy = 200 + Math.sin(angle) * 70;
        return <circle key={i} cx={cx} cy={cy} r="3.5" fill="currentColor" />;
      })}
    </svg>
  );
}
