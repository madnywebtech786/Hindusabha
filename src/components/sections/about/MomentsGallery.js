import Reveal from "@/components/ui/Reveal";
import DiyaMark from "@/components/motifs/DiyaMark";
import KalashMark from "@/components/motifs/KalashMark";
import ToranDivider from "@/components/motifs/ToranDivider";
import OmMark from "@/components/motifs/OmMark";
import SwastikMark from "@/components/motifs/SwastikMark";

const MOMENTS = [
  {
    Mark: DiyaMark,
    title: "Diwali evenings",
    description:
      "Rows of diyas lit at the Calgary office, welcoming every family for the festival of lights.",
    span: "lg:col-span-2",
    tone: "bg-cream-deep",
  },
  {
    Mark: OmMark,
    title: "Satsang & discourse",
    description: "Weekly gatherings for prayer, chanting, and teaching.",
    tone: "bg-white",
  },
  {
    Mark: SwastikMark,
    title: "Auspicious beginnings",
    description: "Every gathering opens the way tradition asks it to.",
    tone: "bg-white",
  },
];

const FEATURED_MOMENT = {
  Mark: KalashMark,
  title: "Seva in practice",
  description:
    "Volunteers preparing prasad, welcoming newcomers, and keeping the doors open for anyone seeking a spiritual home — the quiet, ongoing work that carries the Society's mission forward every week.",
  tone: "bg-cream-deep",
};

/**
 * Community life rendered through the site's own iconography rather
 * than stock photography — an honest gallery for an organization whose
 * archive is still growing, tied to specific practices, not decoration.
 */
export default function MomentsGallery() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Life at the Society
          </span>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            Moments that carry the mission
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink-muted">
            A community is built in its gatherings — worship, festivals, and
            the quiet work of seva that rarely makes it into a photograph.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MOMENTS.map((moment, i) => (
            <Reveal
              key={moment.title}
              delay={i * 0.08}
              className={`group relative flex h-80 flex-col justify-end overflow-hidden rounded-[1.75rem] border border-primary/10 p-8 ${moment.tone} ${moment.span ?? ""}`}
            >
              <moment.Mark className="pointer-events-none absolute -right-6 -top-8 h-44 w-44 text-primary/[0.14] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:text-primary/20 sm:h-52 sm:w-52" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {moment.title}
                </h3>
                <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                  {moment.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Featured, full-width: glyph as a large panel beside the text
              rather than a corner watermark, so it earns the extra width */}
          <Reveal
            delay={0.24}
            className={`group relative flex flex-col items-center gap-8 overflow-hidden rounded-[1.75rem] border border-primary/10 p-8 sm:col-span-2 sm:flex-row sm:p-10 lg:col-span-4 ${FEATURED_MOMENT.tone}`}
          >
            <FEATURED_MOMENT.Mark className="h-28 w-28 shrink-0 text-primary transition-transform duration-700 ease-out group-hover:scale-110 sm:h-32 sm:w-32" />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {FEATURED_MOMENT.title}
              </h3>
              <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-ink-muted">
                {FEATURED_MOMENT.description}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <ToranDivider />
        </Reveal>
      </div>
    </section>
  );
}
