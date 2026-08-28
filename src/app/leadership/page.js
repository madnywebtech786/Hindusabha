import LeadershipHero from "@/components/sections/leadership/LeadershipHero";
import LeadershipShowcase from "@/components/sections/leadership/LeadershipShowcase";
import PressFeature from "@/components/sections/shared/PressFeature";

export const metadata = {
  title: "Leadership — Sant Mahasabha Society of Alberta",
  description:
    "Meet the spiritual and organizational leadership of the Sant Mahasabha Society of Alberta.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <LeadershipShowcase />
      <PressFeature tone="border-t border-primary/10 bg-cream/50" className="pb-24 sm:pb-32" />
    </>
  );
}
