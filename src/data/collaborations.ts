export type Collaborator = {
  name: string;
  logo: string;
  url?: string;
};

export const collaborations: Collaborator[] = [
  {
    name: "Lords Skill Academy",
    logo: "/images/collaborations/lords-skill-academy.png",
    url: "https://lordsskillacademy.com/",
  },
  {
    name: "ASTI Academy, Dubai",
    logo: "/images/collaborations/asti-academy.png",
    // Best-match candidate — a near-identical "astidubai.ac.ae" also
    // exists, so double-check this is the right one before relying on it.
    url: "https://astiacademy.ac.ae/",
  },
  // No confidently-verified official site found — confirm with the client
  // before adding a url here.
  { name: "HMA CyberTech", logo: "/images/collaborations/hma.png" },
  // No confidently-verified official site found (name collides with
  // several unrelated companies) — confirm with the client.
  {
    name: "Cyverra Global Technologies LLP",
    logo: "/images/collaborations/cyverra.png",
  },
  { name: "HCLTech", logo: "/images/collaborations/hcltech.png", url: "https://www.hcltech.com/" },
  {
    name: "MANUU",
    logo: "/images/collaborations/manuu.png",
    url: "https://manuu.edu.in/",
  },
];
