import mine2 from "../assets/Mines/mine2.png";
import TL1 from "../assets/Mines/TL1.png";
import CT from "../assets/Mines/CT.png";
import MP from "../assets/Mines/MP.png";
import OD from "../assets/Mines/OD.png";
import GJ from "../assets/Mines/GJ.png";

export interface Site {
  id: string;
  clientName: string;
  name: string;
  duration: string;
  projectValue: string;
  OB_work: string;
  Coal_work: string;
  location: string;
  state: string;
  description: string;
  image: string;
}
export const LOCATION_DATA: Record<string, Site[]> = {
  INGJ: [
    {
      id: "guj-1",
      clientName: "Gujarat Mineral Development Corporation Ltd.",
      name: "Lignite Mines Project",
      duration: "4 Years",
      projectValue: "659.97",
      OB_work: "986",
      Coal_work: "70.00",
      location: "Tadkeshwar",
      state: "Gujarat",
      description:
        "A major lignite mining project contributing significantly to the region's energy needs with sustainable mining practices.",
      image: GJ,
    },
  ],

  INOR: [
    {
      id: "odi-1",
      clientName: "NLC India Limited",
      name: "Talabira OC-II & III Area",
      duration: "10 Years",
      projectValue: "885.00",
      OB_work: "882",
      Coal_work: "940",
      location: "Talabira",
      state: "Odisha",
      description:
        "One of the key opencast coal mining projects in Odisha, utilizing advanced technology for operational efficiency.",
      image: OD,
    },
  ],

  INTG: [
    {
      id: "tel-1",
      clientName: "Singareni Collieries Company Limited (SCCL)",
      name: "PK OC (OC-VI Section)",
      duration: "4 Years",
      projectValue: "1417.00",
      OB_work: "1148.55",
      Coal_work: "61.13",
      location: "Manuguru",
      state: "Telangana",
      description:
        "Part of the expansive Manuguru mining area, known for its high-quality output and safety standards.",
      image: TL1,
    },
    {
      id: "tel-2",
      clientName: "Singareni Collieries Company Limited (SCCL)",
      name: "PK OC (OC-II Section)",
      duration: "6 Years",
      projectValue: "1918.00",
      OB_work: "1245.91",
      Coal_work: "0.00",
      location: "Manuguru",
      state: "Telangana",
      description:
        "Another critical section of the PK Opencast mine, supporting the robust coal requirements of the state.",
      image: mine2,
    },
  ],

  INCT: [
    {
      id: "cht-1",
      clientName: "Adani Enterprises Ltd.",
      name: "Parsa East & Kante Basan",
      duration: "10 Years",
      projectValue: "1060.08",
      OB_work: "2350",
      Coal_work: "0.00",
      location: "Surguja",
      state: "Chhattisgarh",
      description:
        "A significant coal block project in Surguja, playing a vital role in fueling thermal power generation.",
      image: CT,
    },
  ],

  INMP: [
    {
      id: "mp-1",
      clientName: "Mahan Energen Ltd.",
      name: "Dhirauli Coal Mine",
      duration: "7 Years",
      projectValue: "776.15",
      OB_work: "1773.00",
      Coal_work: "220.00",
      location: "Dhirauli",
      state: "Madhya Pradesh",
      description:
        "Located in the mineral-rich belt of Madhya Pradesh, this mine focuses on sustainable coal extraction.",
      image: MP,
    },
  ],
};
