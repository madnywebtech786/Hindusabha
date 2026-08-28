import PageHero from "@/components/sections/shared/PageHero";
import DonatePlaceholder from "@/components/sections/donate/DonatePlaceholder";

export const metadata = {
  title: "Donate — Sant Mahasabha Society of Alberta",
  description:
    "Support the Sant Mahasabha Society of Alberta's seva, festivals, and community programs.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support our"
        highlight="seva"
        description="Every contribution helps us host festivals, welcome new families, and carry the Sant Mahasabha's mission forward in Alberta."
        shloka="दानं हि परमो धर्मः — Giving is the highest dharma"
      />
      <DonatePlaceholder />
    </>
  );
}
