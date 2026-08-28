import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import OmMark from "@/components/motifs/OmMark";
import CornerOrnament from "@/components/motifs/CornerOrnament";
import KalashMark from "@/components/motifs/KalashMark";
import { OFFICES } from "@/lib/content";

const CANADA = OFFICES.find((o) => o.label === "Canada Office");
const INTERNATIONAL = OFFICES.find((o) => o.label === "International Office");

/**
 * Asymmetric, not twin cards: Calgary is the office people can actually
 * call and visit, so it carries the primary panel with real actions.
 * New Delhi is the seat of the wider mission, referenced rather than
 * phoned — a smaller, quieter card makes that real difference legible
 * instead of implying the two offices are interchangeable.
 */
export default function ContactOffices() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-32 sm:pt-20">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Calgary — primary */}
          <Reveal className="relative overflow-hidden rounded-4xl bg-[linear-gradient(150deg,#2a1810_0%,#3a2416_100%)] p-8 text-white sm:p-12">
            <OmMark
              strokeOnly
              className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 text-white/6"
            />
            <CornerOrnament className="pointer-events-none absolute right-5 top-5 h-7 w-7 rotate-90 text-gold/50" />

            <span className="flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              <OmMark className="h-4 w-4" />
              Canada Office
            </span>

            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-white sm:text-5xl">
              Visit us in Calgary
            </h2>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-10">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="max-w-xs font-body text-base leading-relaxed text-white/80">
                  {CANADA.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${CANADA.phone.replace(/[^+\d]/g, "")}`}
                  className="font-display text-2xl font-medium text-white transition-colors hover:text-primary"
                >
                  {CANADA.phone}
                </a>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={`tel:${CANADA.phone.replace(/[^+\d]/g, "")}`}>
                Call the Office
              </Button>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CANADA.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/50"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          {/* New Delhi — quieter reference card */}
          <Reveal delay={0.12} className="relative flex flex-col justify-between overflow-hidden rounded-4xl border border-primary/12 bg-cream/40 p-8 sm:p-10">
            <div>
              <KalashMark className="h-10 w-10" />
              <span className="mt-5 block font-body text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                International Office
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                New Delhi, India
              </h3>
              <div className="mt-5 flex items-start gap-3 font-body text-sm leading-relaxed text-ink-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{INTERNATIONAL.address}</span>
              </div>
            </div>
            <p className="mt-8 border-t border-primary/10 pt-6 font-body text-sm leading-relaxed text-ink-muted">
              Seat of the Sant Mahasabha&rsquo;s international mission. For
              day-to-day matters in Alberta, the Calgary office is the
              fastest way to reach us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
