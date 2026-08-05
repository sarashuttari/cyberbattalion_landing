import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import CentreOfExcellence from "@/components/CentreOfExcellence";
import Collaborations from "@/components/Collaborations";
import ContactSection from "@/components/ContactSection";
import EventRegistrationCTA from "@/components/EventRegistrationCTA";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SeminarsSection from "@/components/SeminarsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WelcomeModal from "@/components/WelcomeModal";

export default function Home() {
  return (
    <>
      <WelcomeModal />
      <AnnouncementMarquee />
      <Hero />
      <EventRegistrationCTA />
      <Collaborations />
      <Highlights />
      <SeminarsSection />
      <GallerySection />
      <TestimonialsSection />
      <TeamSection />
      <CentreOfExcellence />
      <ContactSection />
    </>
  );
}
