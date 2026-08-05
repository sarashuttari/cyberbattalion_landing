"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type Options = {
  // Whether the dialog is currently open. Lightbox's parent unmounts it
  // entirely on close, so it can just pass `true`; components that manage
  // their own open state internally (return null instead of unmounting —
  // see WelcomeModal) MUST pass their real open state here, since a `null`
  // render does not unmount the component or re-run a mount-only effect.
  active: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

// Shared modal a11y behavior: focus the dialog on open, trap Tab within it,
// Escape (and optionally ArrowLeft/ArrowRight) to navigate/close, lock body
// scroll, and restore focus to whatever was focused before opening. Used by
// Lightbox and WelcomeModal — keep both in sync with this rather than
// re-duplicating the logic.
export function useDialogBehavior<T extends HTMLElement>({
  active,
  onClose,
  onPrev,
  onNext,
}: Options) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!active) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && onPrev) {
        e.preventDefault();
        onPrev();
        return;
      }
      if (e.key === "ArrowRight" && onNext) {
        e.preventDefault();
        onNext();
        return;
      }
      if (e.key === "Tab") {
        const container = ref.current;
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return ref;
}
