import { HandHeart, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CornerOrnament from "@/components/motifs/CornerOrnament";
import MandalaBackdrop from "@/components/motifs/MandalaBackdrop";
import OmMark from "@/components/motifs/OmMark";
import { OFFICES } from "@/lib/content";

export default function ContactDonate() {
  return (
    <section className="relative overflow-hidden bg-cream/40 py-20 sm:py-28">
      <MandalaBackdrop className="pointer-events-none absolute -left-40 bottom-0 h-115 w-115 text-primary/6" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get Involved"
            title="Visit us, or lend a hand"
            description="Whether you'd like to join us for worship, ask a question, or support our seva through a donation, our Calgary office welcomes you."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Contact card */}
          <Reveal>
            <div className="relative flex h-full flex-col gap-5 rounded-3xl border border-primary/12 bg-white p-8 sm:p-10">
              <CornerOrnament className="pointer-events-none absolute right-3 top-3 h-6 w-6 rotate-90 text-primary/40" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">
                Contact the Calgary Office
              </h3>
              {OFFICES.map((office) => (
                <div key={office.label} className="flex flex-col gap-1.5 border-t border-primary/10 pt-4 first-of-type:border-t-0 first-of-type:pt-0">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {office.label}
                  </span>
                  <div className="flex items-start gap-2.5 font-body text-sm text-ink-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{office.address}</span>
                  </div>
                  {office.phone ? (
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2.5 font-body text-sm text-ink-muted transition-colors hover:text-primary"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      {office.phone}
                    </a>
                  ) : null}
                </div>
              ))}
              <Button href="/contact" variant="outline" className="mt-2 w-fit">
                Full Contact Details
              </Button>
            </div>
          </Reveal>

          {/* Donate card */}
          <Reveal delay={0.12}>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] p-8 text-white sm:p-10">
              <OmMark
                strokeOnly
                className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 text-white/10"
              />
              <CornerOrnament className="pointer-events-none absolute right-3 top-3 h-6 w-6 rotate-90 text-white/40" />
              <div className="flex flex-col gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                  <HandHeart className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-2xl font-semibold">
                  Support Our Seva
                </h3>
                <p className="font-body text-sm leading-relaxed text-white/90 sm:text-base">
                  Your generosity helps us host festivals, welcome new
                  families, and carry the Sant Mahasabha&rsquo;s mission
                  forward in Alberta. To make a donation, please call or
                  visit our Calgary office &mdash; our team will be glad to
                  assist you.
                </p>
              </div>
              <a
                href="tel:+14036812889"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-secondary shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call 403-681-2889
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
