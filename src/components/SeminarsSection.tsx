import {
  seminarInstitutions,
  seminarListIsPartial,
} from "@/data/seminarInstitutions";

export default function SeminarsSection() {
  return (
    <section id="seminars" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
          Seminars &amp; Sessions
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          Institutions We&rsquo;ve Worked With
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {seminarInstitutions.map((name) => (
            <span
              key={name}
              className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-navy/80"
            >
              {name}
            </span>
          ))}
          {seminarListIsPartial && (
            <span className="rounded-full px-4 py-1.5 text-sm font-medium italic text-muted">
              and more...
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
