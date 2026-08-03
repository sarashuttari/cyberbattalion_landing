import About from "@/components/About";
import CentreOfExcellence from "@/components/CentreOfExcellence";
import Collaborations from "@/components/Collaborations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Collaborations />
        <About />
        <Highlights />
        <CentreOfExcellence />
      </main>
      <Footer />
    </>
  );
}
