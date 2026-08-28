import { HandHeart, Landmark, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CornerOrnament from "@/components/motifs/CornerOrnament";
import RangoliPattern from "@/components/motifs/RangoliPattern";

const PILLARS = [
  {
    icon: Landmark,
    title: "Spiritual Guidance",
    description:
      "Satsang, discourse, and observance of Hindu festivals rooted in the teachings carried forward by our sants.",
  },
  {
    icon: Users,
    title: "Community & Culture",
    description:
      "Gatherings, celebrations, and traditions that keep our heritage alive for every generation in Alberta.",
  },
  {
    icon: HandHeart,
    title: "Seva & Service",
    description:
      "Selfless service to the community, guided by the values of compassion, unity, and dharma.",
  },
];

export default function MissionPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <RangoliPattern className="pointer-events-none absolute -right-36 -bottom-28 h-96 w-96 text-primary/6" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Purpose"
            title="Rooted in tradition, serving our community"
            description="The Sant Mahasabha Society of Alberta exists to nurture the spiritual, cultural, and social wellbeing of the Hindu community in Calgary — a home away from home."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="relative flex h-full flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-cream/50 px-6 py-10 text-center transition-colors hover:border-primary/30">
                <CornerOrnament className="absolute left-2 top-2 h-6 w-6 text-primary/50" />
                <CornerOrnament className="absolute bottom-2 right-2 h-6 w-6 rotate-180 text-primary/50" />
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ED6528_0%,#C1262C_100%)] text-white shadow-[0_10px_24px_-10px_rgba(193,38,44,0.5)]">
                  <pillar.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
