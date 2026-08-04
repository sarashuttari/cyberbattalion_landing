import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialAvatar from "./TestimonialAvatar";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
            Expert Reviews
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
            Testimonials
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <Quote
                size={22}
                className="text-gold"
                aria-hidden="true"
                fill="currentColor"
                strokeWidth={0}
              />
              <p className="flex-1 text-sm italic leading-relaxed text-navy/70">
                {t.quote || "Testimonial coming soon."}
              </p>
              <div className="flex items-center gap-3 border-t border-navy/10 pt-4">
                <TestimonialAvatar src={t.photo} name={t.name} />
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.designation || "Designation pending"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
