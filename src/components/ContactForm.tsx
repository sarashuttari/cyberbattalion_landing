"use client";

import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { useState, type FormEvent } from "react";

const FALLBACK_EMAIL = "info@cyberbattalion.in";

const reasons = [
  "Workshop / Session Request",
  "Project / Internship Registration",
  "Collaboration Inquiry",
  "Media / Press",
  "General Question",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-bg/80 px-4 py-3 text-sm text-navy placeholder:text-muted transition-colors focus:border-maroon focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon/20";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Couldn't send that automatically. Please email us directly at ${FALLBACK_EMAIL}.`
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/80"
          >
            <User size={14} className="text-maroon" />
            <span>Your Name <span className="text-maroon">*</span></span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Dr. Ramesh Kumar"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/80"
          >
            <Mail size={14} className="text-maroon" />
            <span>Email Address <span className="text-maroon">*</span></span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@institution.edu"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/80"
          >
            <Phone size={14} className="text-maroon" />
            <span>Phone Number <span className="text-muted font-normal text-[11px]">(optional)</span></span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/80"
          >
            <MessageSquare size={14} className="text-maroon" />
            <span>Reason for Contact <span className="text-maroon">*</span></span>
          </label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              required
              defaultValue=""
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select inquiry topic...
              </option>
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/50"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/80"
        >
          <MessageSquare size={14} className="text-maroon" />
          <span>Your Message <span className="text-maroon">*</span></span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your workshop request, collaboration proposal, or general query..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-navy/10 pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2.5 rounded-full bg-maroon px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-maroon/20 transition-all hover:bg-maroon-dark hover:shadow-lg hover:shadow-maroon/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
          <span>{status === "submitting" ? "Submitting..." : "Send Message"}</span>
        </button>

        {status === "success" && (
          <div
            role="status"
            className="inline-flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-800"
          >
            <CheckCircle2 size={18} className="text-green-600 shrink-0" aria-hidden="true" />
            <span>Message sent — we&rsquo;ll respond within 24 hours.</span>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="inline-flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-800"
          >
            <AlertCircle size={18} className="text-red-600 shrink-0" aria-hidden="true" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </form>
  );
}
