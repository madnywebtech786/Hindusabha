import PageHero from "@/components/sections/shared/PageHero";
import PhotoGrid from "@/components/sections/shared/PhotoGrid";
import { IN_NEWS } from "@/lib/content";

export const metadata = {
  title: "In the News — Sant Mahasabha Society of Alberta",
  description:
    "Press coverage and news clippings featuring the Sant Mahasabha Society of Alberta and Swami Chakrapani Ji Maharaj.",
};

export default function InTheNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="In the News"
        title="Carried across"
        highlight="the press"
        description="Coverage of the Sant Mahasabha's gatherings, honours, and public events from newspapers and press across the community."
        shloka="सत्यमेव जयते — Truth alone triumphs"
      />
      <PhotoGrid photos={IN_NEWS} />
    </>
  );
}
