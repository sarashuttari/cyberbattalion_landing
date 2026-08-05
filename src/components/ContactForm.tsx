"use client";

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
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
  "w-full rounded-lg border border-navy/15 bg-bg px-4 py-2.5 text-sm text-navy placeholder:text-muted focus:border-maroon focus:outline-none focus:ring-1 focus:ring-maroon";

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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Reason for contact
          </label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select one...
            </option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about your query..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maroon-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={16} aria-hidden="true" />
          )}
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p
            role="status"
            className="inline-flex items-center gap-1.5 text-sm text-navy/80"
          >
            <CheckCircle2 size={16} className="text-maroon" aria-hidden="true" />
            Message sent — we&rsquo;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="inline-flex items-center gap-1.5 text-sm text-navy/80"
          >
            <AlertCircle size={16} className="text-maroon" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
