import { FounderImage } from "public"
import { BolsistaType, TeamMemberType, allMembersMemberType } from "types/teamMembers"

export const ALL_TEAM_MEMBERS: allMembersMemberType[] = [
  { name: "Michel F. Dick" },
  { name: "Denifer Da Cruz" },
  { name: "Sara Abreu" },
  { name: "Lucas Santos Monteiro" },
  { name: "Isabela Rennhack" },
]

export const CURRENT_TEAM_MEMBERS: TeamMemberType[] = [
  { name: "Profª. Drª Débora Mota Mattos", role: "Colaboradora", image: null },
  { name: "Profª. Drª Adriane Parraga", role: "Colaboradora", image: null },
  { name: "Profª Drª Letícia Vieira Guimarães", role: "Colaboradora", image: null },
]

export const CURRENT_BOLSISTAS: BolsistaType[] = [
  {
    name: "Lucas Diniz",
    linkedin: "https://www.linkedin.com/in/brunobc/",
    github: "#",
  },
  { name: "Bolsista 2", image: FounderImage, instagram: "#", linkedin: "#" },
  { name: "Bolsista 3", instagram: "" },
]
