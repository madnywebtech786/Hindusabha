import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import OmMark from "@/components/motifs/OmMark";

/**
 * Full-bleed portrait panel with name/title overlaid on a gradient scrim —
 * a "hall of leadership" diptych rather than a photo-then-caption card,
 * so the pairing reads as one composed piece instead of a repeated unit.
 */
export default function LeaderCard({ leader, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group relative aspect-3/4 w-full overflow-hidden rounded-3xl sm:aspect-4/5">
      <Image
        src={leader.photo}
        alt={leader.name}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(42,24,16,0.92)_0%,rgba(42,24,16,0.55)_28%,rgba(42,24,16,0)_58%)]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-6 sm:p-8">
        <span className="flex items-center gap-1.5 rounded-full border border-gold/50 bg-black/20 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-deep backdrop-blur-sm">
          <OmMark className="h-3 w-3" />
          {leader.title}
        </span>
        <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          {leader.name}
        </h3>
        {leader.phone ? (
          <a
            href={`tel:${leader.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 font-body text-sm text-white/85 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {leader.phone}
          </a>
        ) : null}
        {leader.bio ? (
          <p className="mt-1 max-w-sm font-body text-sm leading-relaxed text-white/75">
            {leader.bio}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
