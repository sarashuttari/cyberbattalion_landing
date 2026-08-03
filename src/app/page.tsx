import CentreOfExcellence from "@/components/CentreOfExcellence";
import Collaborations from "@/components/Collaborations";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <>
      <Hero />
      <Collaborations />
      <Highlights />
      <CentreOfExcellence />
      <ContactSection />
    </>
  );
}
