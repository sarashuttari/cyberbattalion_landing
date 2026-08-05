import { Sparkles } from "lucide-react";

// Google Form for the weekend Cyber Security batch at LSA — provided by
// the user 2026-08-05. Distinct from the Dubai internship promo in
// WelcomeModal.tsx; don't reuse this link there.
const REGISTER_HREF = "https://forms.gle/8j9k9VQKTuxggxr7A";
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
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-max motion-safe:animate-[marquee_36s_linear_infinite] motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:justify-center"
      >
        <MarqueeSet />
        <MarqueeSet ariaHidden />
      </a>
    </div>
  );
}
