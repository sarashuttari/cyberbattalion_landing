import { Sparkles } from "lucide-react";

// TODO: replace with the real registration link/form once it's available.
const REGISTER_HREF = "#contact";
const MESSAGE =
  "Registrations open for the upcoming weekend batch in Cyber Security at LSA — Register through this link";
const REPEAT = 4;

function MarqueeSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-3 py-2.5 pr-8 text-sm font-semibold tracking-wide text-white motion-reduce:pr-0"
    >
      {Array.from({ length: REPEAT }, (_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3">
          <Sparkles size={14} className="text-gold" aria-hidden="true" />
          {MESSAGE}
          <span className="text-gold" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </span>
  );
}

export default function AnnouncementMarquee() {
  return (
    <div className="overflow-hidden border-b border-gold/30 bg-maroon">
      <a
        href={REGISTER_HREF}
        className="flex w-max motion-safe:animate-[marquee_36s_linear_infinite] motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:justify-center"
      >
        <MarqueeSet />
        <MarqueeSet ariaHidden />
      </a>
    </div>
  );
}
