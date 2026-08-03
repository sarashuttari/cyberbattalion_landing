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

      <div className="relative mt-14 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max motion-reduce:w-full motion-safe:animate-[marquee_40s_linear_infinite] motion-safe:hover:[animation-play-state:paused]">
          <ul className="flex shrink-0 items-center gap-12 pr-12 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8">
            {collaborations.map((c) => (
              <li
                key={c.name}
                className="relative h-12 w-28 shrink-0 md:h-14 md:w-32"
              >
                <ImageWithFallback
                  src={c.logo}
                  alt={c.name}
                  fallbackSrc="/collaborations/_placeholder.svg"
                  fill
                  sizes="128px"
                  className="object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center gap-12 pr-12 motion-reduce:hidden"
          >
            {collaborations.map((c) => (
              <li
                key={`dup-${c.name}`}
                className="relative h-12 w-28 shrink-0 md:h-14 md:w-32"
              >
                <ImageWithFallback
                  src={c.logo}
                  alt=""
                  fallbackSrc="/collaborations/_placeholder.svg"
                  fill
                  sizes="128px"
                  className="object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
