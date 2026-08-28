import { HandHeart, Phone, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CornerOrnament from "@/components/motifs/CornerOrnament";
import OmMark from "@/components/motifs/OmMark";
import { OFFICES } from "@/lib/content";

const CANADA_OFFICE = OFFICES.find((office) => office.phone);

/**
 * Placeholder body for the Donate page: online giving isn't wired up yet,
 * so this is an honest "coming soon" — framed as an invitation to give
 * through the Calgary office in the meantime, not an empty stub.
 */
export default function DonatePlaceholder() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] p-8 text-center text-white sm:p-14">
            <OmMark
              strokeOnly
              className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 text-white/10"
            />
            <CornerOrnament className="pointer-events-none absolute left-3 top-3 h-6 w-6 text-white/40" />
            <CornerOrnament className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rotate-180 text-white/40" />

            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <HandHeart className="h-6 w-6" strokeWidth={1.75} />
            </span>

            <span className="relative mt-6 flex items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Online Giving — Coming Soon
            </span>

            <h2 className="relative mx-auto mt-4 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              We&rsquo;re building a simpler way to give
            </h2>

            <p className="relative mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-white/90">
              Online donations aren&rsquo;t open yet, but your support is
              always welcome. Call or visit our Calgary office and our team
              will gladly help you make a contribution today.
            </p>

            {CANADA_OFFICE ? (
              <a
                href={`tel:${CANADA_OFFICE.phone.replace(/[^+\d]/g, "")}`}
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-body text-sm font-semibold text-secondary shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call {CANADA_OFFICE.phone}
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <Button href="/contact" variant="outline">
            Visit the Calgary Office
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
