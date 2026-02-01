export interface Site {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  image: string;
}

export const LOCATION_DATA: Record<string, Site[]> = {
  INGJ: [
    {
      id: "guj-1",
      name: "Lignite Mines Project",
      location: "Tadkeshwar",
      state: "Gujarat",
      description:
        "A major lignite mining project contributing significantly to the region's energy needs with sustainable mining practices.",
      image:
        "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "guj-2",
      name: "Damlai Lignite Mines Project",
      location: "Damlai",
      state: "Gujarat",
      description:
        "Focused on efficient lignite extraction while ensuring environmental compliances and community development.",
      image:
        "https://images.unsplash.com/photo-1620325867502-221cfb5fa5f2?q=80&w=800&auto=format&fit=crop",
    },
  ],
  INOR: [
    {
      id: "odi-1",
      name: "Talabira OC-II & III Area",
      location: "Talabira",
      state: "Odisha",
      description:
        "One of the key opencast coal mining projects in Odisha, utilizing advanced technology for operational efficiency.",
      image:
        "https://images.unsplash.com/photo-1678732684877-38435d070557?q=80&w=800&auto=format&fit=crop", // Coal mine representative
    },
    {
      id: "odi-2",
      name: "Baitarni Lignite Mines Project (Stood L1)",
      location: "Baitarni",
      state: "Odisha",
      description:
        "A strategic lignite mining project poised to enhance the raw material security for downstream industries.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4ec73303b?q=80&w=800&auto=format&fit=crop",
    },
  ],
  INTG: [
    {
      id: "tel-1",
      name: "PK OC (OC-VI Section)",
      location: "Manuguru",
      state: "Telangana",
      description:
        "Part of the expansive Manuguru mining area, known for its high-quality output and safety standards.",
      image:
        "https://images.unsplash.com/photo-1616110935147-38d507b949c8?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "tel-2",
      name: "PK OC (OC-II Section)",
      location: "Manuguru",
      state: "Telangana",
      description:
        "Another critical section of the PK Opencast mine, supporting the robust coal requirements of the state.",
      image:
        "https://images.unsplash.com/photo-1595246140625-573b715d1128?q=80&w=800&auto=format&fit=crop",
    },
  ],
  INCT: [
    {
      id: "cht-1",
      name: "Parsa East & Kante Basan",
      location: "Surguja",
      state: "Chhattisgarh",
      description:
        "A significant coal block project in Surguja, playing a vital role in fueling thermal power generation.",
      image:
        "https://images.unsplash.com/photo-1605218427306-022ba951dd0c?q=80&w=800&auto=format&fit=crop",
    },
  ],
  INMP: [
    {
      id: "mp-1",
      name: "Dhirauli Coal Mine",
      location: "Dhirauli",
      state: "Madhya Pradesh",
      description:
        "Located in the mineral-rich belt of Madhya Pradesh, this mine focuses on sustainable coal extraction.",
      image:
        "https://images.unsplash.com/photo-1629805407005-7284643b9df7?q=80&w=800&auto=format&fit=crop",
    },
  ],
};
