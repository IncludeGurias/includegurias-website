import { StaticImageData } from "next/image";
import { MeninasDigitaisIcon, founderImage } from "@/public/images";
import { contactLinks } from "@/utils/includeLinks";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export interface TeamMemberType {
  name: string;
  role?: string;
  image?: StaticImageData | null;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface historyMember {
  name: string;
  role?: string;
  image?: StaticImageData;
}

export const AllTeamMembersHistory: historyMember[] = [
  { name: "Michel F. Dick" },
  { name: "Denifer Da Cruz" },
  { name: "Sara Abreu" },
  { name: "Lucas Santos Monteiro" },
  { name: "Isabela Rennhack" },
];

export const CurrentTeamMembers: TeamMemberType[] = [
  { name: "Profª. Drª Débora Mota Mattos", role: "Colaboradora", image: null },
  { name: "Profª. Drª Adriane Parraga", role: "Colaboradora", image: null },
  { name: "Profª Drª Letícia Vieira Guimarães", role: "Colaboradora", image: null },
];

export interface BolsistaType {
  name: string;
  image?: StaticImageData;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export const bolsistasData: BolsistaType[] = [
  {
    name: "Lucas Diniz",
    linkedin: "https://www.linkedin.com/in/brunobc/",
    github: "#",
  },
  { name: "Bolsista 2", image: founderImage, instagram: "#", linkedin: "#" },
  { name: "Bolsista 3", instagram: "" },
];
