import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import MomentsGallery from "@/components/sections/about/MomentsGallery";
import Symbolism from "@/components/sections/about/Symbolism";
import ContactDonate from "@/components/sections/shared/ContactDonate";

export const metadata = {
  title: "About Us — Sant Mahasabha Society of Alberta",
  description:
    "Learn about the mission, history, values, and symbolism of the Sant Mahasabha Society of Alberta, serving Calgary's Hindu community.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MomentsGallery />
      <Symbolism />
      <ContactDonate />
    </>
  );
}
