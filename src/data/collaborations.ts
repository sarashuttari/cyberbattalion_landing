export type Collaborator = {
  name: string;
  logo: string;
  category: string;
  url?: string;
};

export const collaborations: Collaborator[] = [
  {
    name: "Lords Skill Academy",
    logo: "/images/collaborations/lords-skill-academy.png",
    category: "Skills & Training Partner",
    url: "https://lordsskillacademy.com/",
  },
  {
    name: "ASTI Academy, Dubai",
    logo: "/images/collaborations/asti-academy.png",
    category: "International Academic Partner",
    url: "https://astiacademy.ac.ae/",
  },
  {
    name: "HMA CyberTech",
    logo: "/images/collaborations/hma.png",
    category: "Cybersecurity Industry Partner",
  },
  {
    name: "Cyverra Global Technologies",
    logo: "/images/collaborations/cyverra.png",
    category: "Technology & Research Partner",
  },
  {
    name: "HCLTech",
    logo: "/images/collaborations/hcltech.png",
    category: "Enterprise Tech Leader",
    url: "https://www.hcltech.com/",
  },
  {
    name: "MANUU",
    logo: "/images/collaborations/manuu.png",
    category: "Central University Partner",
    url: "https://manuu.edu.in/",
  },
];
