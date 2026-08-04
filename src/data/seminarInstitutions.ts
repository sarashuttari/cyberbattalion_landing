// Institution names as provided by the client (WhatsApp, 2026-08-04), a
// partial list — her message was truncated by WhatsApp's "Read more" and
// the full list hasn't been received yet. "MANUU" appeared twice in her
// numbered list; de-duplicated here for display (a name shown twice in a
// tag list reads as a bug, not two separate visits) — nothing lost, this
// is just presentation.
export const seminarInstitutions: string[] = [
  "Avinash College",
  "MANUU",
  "St. Paul's",
  "St. Joseph's",
  "Sadhana",
  "Megha",
  "Anurag",
  "Sridevi",
  "ACBA",
  "Sphoorthy",
  "TRR",
  "TGMFC",
  "LIET",
];

// True until the client sends the rest of her (currently truncated) list.
export const seminarListIsPartial = true;
