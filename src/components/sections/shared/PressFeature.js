import { ArrowUpRight, Newspaper } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PRESS_FEATURE } from "@/lib/content";

/**
 * A dated, sourced press clipping — not a testimonial card. Shared by any
 * page that wants to corroborate the Society's story with outside press
 * coverage (About, Leadership).
 */
export default function PressFeature({ tone = "bg-cream/40", className = "" }) {
  return (
    <div className={`${tone} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <a
            href={PRESS_FEATURE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-6 rounded-3xl border border-primary/12 bg-white p-7 transition-colors hover:border-primary/25 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-9"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-secondary">
              <Newspaper className="h-5 w-5" strokeWidth={1.75} />
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span>{PRESS_FEATURE.publication}</span>
                <span className="text-primary/40">&middot;</span>
                <span className="text-ink-muted normal-case tracking-normal">
                  {PRESS_FEATURE.date}
                </span>
              </div>
              <p className="mt-3 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                &ldquo;{PRESS_FEATURE.quote}&rdquo;
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                {PRESS_FEATURE.context} — {PRESS_FEATURE.headline}
              </p>
            </div>

            <span className="flex items-center gap-2 font-body text-sm font-semibold text-secondary sm:flex-col sm:items-end sm:gap-1 sm:text-right">
              Read the article
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
