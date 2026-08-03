import { collaborations } from "@/data/collaborations";
import ImageWithFallback from "./ImageWithFallback";

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="border-y border-gold/20 bg-gradient-to-b from-gold/[0.07] via-maroon/[0.02] to-transparent px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
          Trusted Partners
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
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
            className="flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
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
            <p className="text-center text-xs font-medium leading-snug text-navy/70">
              {c.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
