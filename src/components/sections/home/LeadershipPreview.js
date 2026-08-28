import SectionHeading from "@/components/ui/SectionHeading";
import LeaderCard from "@/components/ui/LeaderCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MandalaBackdrop from "@/components/motifs/MandalaBackdrop";
import { LEADERS } from "@/lib/content";

export default function LeadershipPreview() {
  return (
    <section className="relative overflow-hidden bg-cream/50 py-24 sm:py-32">
      <MandalaBackdrop className="pointer-events-none absolute -right-40 top-0 h-120 w-120 text-primary/6" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Guided By"
            title="Our Leadership"
            description="Spiritual and organizational leadership carrying the Sant Mahasabha's mission from New Delhi to Calgary."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {LEADERS.map((leader, i) => (
            <LeaderCard key={leader.slug} leader={leader} delay={i * 0.12} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Button href="/leadership" variant="outline">
            Meet the Full Leadership
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
