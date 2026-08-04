import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import CentreOfExcellence from "@/components/CentreOfExcellence";
import Collaborations from "@/components/Collaborations";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <AnnouncementMarquee />
      <Hero />
      <Collaborations />
      <Highlights />
      <GallerySection />
      <TestimonialsSection />
      <CentreOfExcellence />
      <ContactSection />
    </>
  );
}
