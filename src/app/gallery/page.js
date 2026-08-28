import PageHero from "@/components/sections/shared/PageHero";
import PhotoGrid from "@/components/sections/shared/PhotoGrid";
import { GALLERY } from "@/lib/content";

export const metadata = {
  title: "Gallery — Sant Mahasabha Society of Alberta",
  description:
    "Photos from Sant Mahasabha Society of Alberta events, festivals, and community gatherings.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of"
        highlight="devotion"
        description="Satsang, celebration, and seva — glimpses of our community gathered together across festivals and events."
        shloka="सर्वे भवन्तु सुखिनः — May all beings be happy"
      />
      <PhotoGrid photos={GALLERY} />
    </>
  );
}
