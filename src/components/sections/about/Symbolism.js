import Reveal from "@/components/ui/Reveal";
import OmMark from "@/components/motifs/OmMark";
import SwastikMark from "@/components/motifs/SwastikMark";

const SYMBOLS = [
  {
    Mark: OmMark,
    devanagari: "ॐ",
    title: "Om",
    description:
      "The primordial sound, representing the universe and the essence of the ultimate reality — at the heart of our identity, as in our emblem.",
  },
  {
    Mark: SwastikMark,
    devanagari: "卐",
    title: "Swastik",
    description:
      "An ancient symbol of wellbeing and good fortune, invoked at the start of worship and every auspicious occasion.",
  },
  {
    swatch: "saffron",
    devanagari: "भगवा",
    title: "Saffron Flag",
    description:
      "Bhagwa, the colour of sacrifice and renunciation, carried atop our emblem as a symbol of spiritual courage and service.",
  },
  {
    swatch: "globe",
    devanagari: "विश्व",
    title: "The Globe",
    description:
      "Our emblem's globe reflects a mission that reaches beyond borders — from New Delhi to Calgary and every home in between.",
  },
];

/**
 * Symbolism as a museum index: mark, Devanagari name, English name, and
 * meaning read across hairline-divided columns — a labelled reading of
 * the emblem rather than a row of interchangeable icon cards.
 */
export default function Symbolism() {
  return (
    <section className="relative bg-cream/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl border-b border-primary/15 pb-12">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Our Emblem
          </span>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            What our symbols mean
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink-muted">
            Every mark in our identity carries meaning passed down through
            generations of tradition.
          </p>
        </Reveal>

        <div className="grid divide-y divide-primary/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {SYMBOLS.map((symbol, i) => (
            <Reveal
              key={symbol.title}
              delay={i * 0.08}
              className="flex flex-col gap-6 py-10 sm:px-8 sm:py-14 lg:px-10"
            >
              <span className="font-devanagari text-7xl leading-none text-secondary">
                {symbol.devanagari}
              </span>
              <div className="flex items-center gap-2.5">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {symbol.title}
                </h3>
                {symbol.Mark ? (
                  <symbol.Mark className="h-4 w-4 shrink-0 text-primary/40" />
                ) : symbol.swatch === "saffron" ? (
                  <span className="h-3.5 w-3 shrink-0 rounded-[1px] bg-[linear-gradient(180deg,#ED6528_0%,#C1262C_100%)]" />
                ) : (
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary/40" />
                )}
              </div>
              <p className="max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                {symbol.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
