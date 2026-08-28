/**
 * Faint radial mandala line-art used as an ambient background accent.
 * Purely decorative, low-opacity, never competes with foreground content.
 */
export default function MandalaBackdrop({ className = "" }) {
  const petals = 16;
  const rings = [60, 100, 140];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      {rings.map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i / petals) * Math.PI * 2;
        const x1 = 200 + Math.cos(angle) * 60;
        const y1 = 200 + Math.sin(angle) * 60;
        const x2 = 200 + Math.cos(angle) * 140;
        const y2 = 200 + Math.sin(angle) * 140;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
        );
      })}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i / petals) * Math.PI * 2;
        const cx = 200 + Math.cos(angle) * 100;
        const cy = 200 + Math.sin(angle) * 100;
        return <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" />;
      })}
    </svg>
  );
}
