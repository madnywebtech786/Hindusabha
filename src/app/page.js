import Hero from "@/components/sections/home/Hero";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import MissionPreview from "@/components/sections/home/MissionPreview";
import ToranDivider from "@/components/motifs/ToranDivider";
import Festivals from "@/components/sections/home/Festivals";
import ShlokaBanner from "@/components/sections/home/ShlokaBanner";
import LeadershipPreview from "@/components/sections/home/LeadershipPreview";
import ContactDonate from "@/components/sections/shared/ContactDonate";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionPreview />
      <ToranDivider className="bg-white" />
      <Festivals />
      <ShlokaBanner />
      <LeadershipPreview />
      <ContactDonate />
    </>
  );
}
