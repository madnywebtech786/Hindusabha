import LeaderCard from "@/components/ui/LeaderCard";
import { LEADERS } from "@/lib/content";

/**
 * Same leadership card treatment as the homepage's "Guided By" preview
 * (LeaderCard) — full-bleed portrait with name/title/bio on a gradient
 * scrim — shown here as the complete, canonical leadership listing.
 */
export default function LeadershipShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream/50 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {LEADERS.map((leader, i) => (
            <LeaderCard key={leader.slug} leader={leader} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
