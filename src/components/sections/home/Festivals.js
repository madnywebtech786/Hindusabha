import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DiyaMark from "@/components/motifs/DiyaMark";
import OmMark from "@/components/motifs/OmMark";

const CARD_GRADIENT = "linear-gradient(135deg, #F3854F 0%, #ED6528 45%, #C1262C 100%)";

const FESTIVALS = [
  {
    name: "Holi",
    season: "Spring",
    description: "A joyous celebration of colour marking the arrival of spring.",
  },
  {
    name: "Janmashtami",
    season: "Summer",
    description: "Celebrating the birth of Lord Krishna with prayer and community gatherings.",
  },
  {
    name: "Navratri",
    season: "Autumn",
    description: "Nine nights of devotion, dance, and worship of the Divine Mother.",
  },
  {
    name: "Diwali",
    season: "Autumn",
    description: "The festival of lights, celebrating the triumph of light over darkness.",
  },
];

export default function Festivals() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Celebrated Together"
            title="Festivals & Observances"
            description="Throughout the year, our community gathers in Calgary to celebrate the festivals that connect us to home and to each other."
          />
        </Reveal>

        {/* Vertical timeline: the spine runs down the year, festivals
            alternate left/right on desktop; on mobile the spine sits on
            the left with every card indented to the right of it. Text
            aligns toward each card's own outer edge — left cards read
            left-aligned, right cards read right-aligned. */}
        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-[linear-gradient(180deg,transparent_0%,#C89B4A_6%,#C89B4A_94%,transparent_100%)] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-14 sm:gap-16">
            {FESTIVALS.map((festival, i) => {
              const onRight = i % 2 === 1;
              return (
                <Reveal
                  key={festival.name}
                  delay={i * 0.1}
                  className="relative flex items-start sm:grid sm:grid-cols-2 sm:items-center sm:gap-12"
                >
                  {/* marker on the spine */}
                  <span
                    className="absolute left-6 top-1.5 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-white shadow-[0_10px_24px_-10px_rgba(200,155,74,0.6)] sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2"
                  >
                    <DiyaMark className="h-8 w-8" />
                  </span>

                  <div
                    className={`group relative ml-16 overflow-hidden rounded-2xl p-7 shadow-[0_20px_44px_-20px_rgba(42,24,16,0.45)] transition-transform duration-500 hover:-translate-y-1 sm:col-start-1 sm:ml-0 sm:p-8 sm:text-left ${
                      onRight ? "sm:col-start-2 sm:text-right" : ""
                    }`}
                    style={{ background: CARD_GRADIENT }}
                  >
                    <OmMark
                      strokeOnly
                      className={`pointer-events-none absolute -bottom-4 h-24 w-24 text-white/10 transition-transform duration-700 group-hover:scale-110 ${
                        onRight ? "-left-4" : "-right-4"
                      }`}
                    />

                    <span className="relative font-body text-[11px] font-semibold uppercase tracking-[0.26em] text-white/75">
                      {festival.season}
                    </span>
                    <h3 className="relative mt-1 font-display text-3xl font-semibold text-white sm:text-4xl">
                      {festival.name}
                    </h3>
                    <p className="relative mt-3 font-body text-[15px] leading-relaxed text-white/85">
                      {festival.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
