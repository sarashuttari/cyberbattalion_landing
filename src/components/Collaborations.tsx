import { collaborations } from "@/data/collaborations";
import ImageWithFallback from "./ImageWithFallback";

export default function Collaborations() {
  return (
    <section id="collaborations" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          Collaborations
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <p className="mt-4 text-muted">
          Institutions, industry bodies and academic partners
        </p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-5">
        {collaborations.map((c) => (
          <li
            key={c.name}
            className="flex items-center justify-center rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-20 w-full sm:h-24">
              <ImageWithFallback
                src={c.logo}
                alt={c.name}
                fallbackSrc="/collaborations/_placeholder.svg"
                fill
                sizes="(max-width: 640px) 40vw, 200px"
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
