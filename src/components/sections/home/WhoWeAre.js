import Image from "next/image";
import { Compass, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import OmMark from "@/components/motifs/OmMark";
import CornerOrnament from "@/components/motifs/CornerOrnament";
import DiyaMark from "@/components/motifs/DiyaMark";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <DiyaMark className="pointer-events-none absolute -left-6 top-10 h-28 w-28 text-primary/10 sm:h-40 sm:w-40" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        {/* Photo collage */}
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] border border-gold/30 shadow-[0_30px_60px_-24px_rgba(42,24,16,0.35)]">
            <Image
              src="/images/swami-chakrapani-ji-maharaj.webp"
              alt="Swami Chakrapani Ji Maharaj, President International"
              fill
              sizes="(max-width: 1024px) 400px, 460px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
          </div>

          {/* overlapping second photo */}
          <div className="absolute -bottom-8 -right-6 h-32 w-32 overflow-hidden rounded-2xl border-4 border-white shadow-[0_18px_40px_-16px_rgba(42,24,16,0.4)] sm:h-40 sm:w-40">
            <Image
              src="/images/pawan-kumar-sharma.webp"
              alt="Pawan Kumar Sharma, Prabhari, Canada"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>

          {/* stat badge — placeholder, replace before launch */}
          <div className="absolute -left-5 -top-5 flex flex-col items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] px-5 py-4 text-white shadow-[0_16px_32px_-12px_rgba(193,38,44,0.55)] sm:-left-7 sm:-top-7">
            <span className="font-display text-3xl font-semibold leading-none sm:text-4xl">
              10+
            </span>
            <span className="mt-1 text-center font-body text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]">
              Years of Service
            </span>
          </div>

          <CornerOrnament className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 rotate-[-90deg] text-gold/70" />
        </Reveal>

        {/* Copy + mission/vision cards */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2 rounded-full border border-primary/25 bg-cream px-4 py-1.5 w-fit">
              <OmMark className="h-4 w-4" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Who We Are
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
              A spiritual home for{" "}
              <span className="text-gradient italic">every Hindu family</span>{" "}
              in Alberta
            </h2>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-ink-muted sm:text-lg">
              The Sant Mahasabha Society of Alberta is the Canadian chapter
              of the Sant Mahasabha, carrying forward the spiritual guidance
              of Swami Chakrapani Ji Maharaj. From our Calgary office, we
              bring together the Hindu community across generations —
              through worship, festivals, and seva.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-primary/12 bg-cream/50 p-6">
                <CornerOrnament className="absolute right-2 top-2 h-5 w-5 rotate-90 text-primary/40" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                  <Target className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Our Mission
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  To nurture dharma, preserve heritage, and serve the
                  community with an open heart.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-primary/12 bg-cream/50 p-6">
                <CornerOrnament className="absolute right-2 top-2 h-5 w-5 rotate-90 text-primary/40" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                  <Compass className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Our Vision
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  A united Hindu community in Alberta, rooted in tradition
                  and thriving across every generation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
