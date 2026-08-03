import Image from "next/image";
import { Award, Briefcase, Building2, GraduationCap, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Credential = {
  icon: LucideIcon;
  text: string;
};

const credentials: Credential[] = [
  { icon: Briefcase, text: "23+ years of industry & academic experience" },
  { icon: GraduationCap, text: "M.Sc., M.Tech., MBA" },
  {
    icon: Award,
    text: "Doctorate from the University of Cambridge for research in Cybersecurity",
  },
  {
    icon: Building2,
    text: "Professor & Visiting Faculty at MANUU, ICFAI University, University of Hyderabad, ASTI Academy Dubai",
  },
  { icon: UserCheck, text: "Consultant, Lords Skill Academy" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-16 sm:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-maroon"
          />
          <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
            <Image
              src="/sara.png"
              alt="Portrait of Dr. Sara Shuttari"
              width={456}
              height={544}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
            About
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
            Dr. Sara Shuttari
          </h2>

          <ul className="mt-8 space-y-5">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-base leading-relaxed text-navy/90">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
