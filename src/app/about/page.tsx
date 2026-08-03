import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — Cyber Battalion",
  description:
    "About Dr. Sara Shuttari — Cybersecurity & Information Technology Professional.",
};

export default function AboutPage() {
  return <About />;
}
