export type TeamMember = {
  id: string;
  name: string;
  photo: string;
};

// Names as provided by the client (internal review doc, 2026-08-04). No
// roles were given, so the card shows a generic "Cyber Battalion Team" line
// rather than an invented title. Mohan doesn't have a photo yet — leave
// `photo` empty (not a guessed path) and TeamPhoto falls back to an
// initials block without attempting a fetch.
export const teamMembers: TeamMember[] = [
  { id: "abdul-sameer", name: "Abdul Sameer", photo: "/images/team/Team_sameer.jpeg" },
  { id: "zayed-ali", name: "Zayed Ali", photo: "/images/team/Team_zayed.jpeg" },
  { id: "mohan", name: "Mohan", photo: "" },
  { id: "roshan", name: "Roshan", photo: "/images/team/Team_roshan.jpeg" },
  {
    id: "shaik-ubaid-ali",
    name: "Shaik Ubaid Ali",
    photo: "/images/team/Team_ubed.jpeg",
  },
];
