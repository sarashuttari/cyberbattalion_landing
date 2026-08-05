export type TeamMember = {
  id: string;
  name: string;
  photo: string;
};

// Names as provided by the client (internal review doc, 2026-08-04). No
// roles were given, so the card shows a generic "Cyber Battalion Team" line
// rather than an invented title. Photos: Mohan and Roshan don't have one
// yet — leave `photo` empty (not a guessed path) and TeamPhoto falls back
// to an initials block without attempting a fetch.
export const teamMembers: TeamMember[] = [
  { id: "abdul-sameer", name: "Abdul Sameer", photo: "/team/Team_sameer.jpeg" },
  { id: "zayed-ali", name: "Zayed Ali", photo: "/team/Team_zayed.jpeg" },
  { id: "mohan", name: "Mohan", photo: "" },
  { id: "roshan", name: "Roshan", photo: "" },
  {
    id: "shaik-ubaid-ali",
    name: "Shaik Ubaid Ali",
    photo: "/team/Team_ubed.jpeg",
  },
];
