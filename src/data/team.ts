export type TeamMember = {
  id: string;
  name: string;
  photo: string;
};

// Names as provided by the client (internal review doc, 2026-08-04). No
// roles or photos given yet — TeamAvatar falls back to initials, and the
// card shows a generic "Cyber Battalion Team" line rather than an invented
// title.
export const teamMembers: TeamMember[] = [
  { id: "abdul-sameer", name: "Abdul Sameer", photo: "/team/abdul-sameer.jpg" },
  { id: "zayed-ali", name: "Zayed Ali", photo: "/team/zayed-ali.jpg" },
  { id: "mohan", name: "Mohan", photo: "/team/mohan.jpg" },
  { id: "roshan", name: "Roshan", photo: "/team/roshan.jpg" },
  {
    id: "shaik-ubaid-ali",
    name: "Shaik Ubaid Ali",
    photo: "/team/shaik-ubaid-ali.jpg",
  },
];
