import {
  adrianeImage,
  deboraImage,
  EduardaImage,
  GabeImage,
  JoaoImage,
  leticiaImage,
  LucasImage,
  MaryImage,
  SaraImage,
} from "public"
import { allMembersMemberType, BolsistaType, TeamMemberType } from "types/teamMembers"

export const CURRENT_TEAM_MEMBERS: TeamMemberType[] = [
  { name: "Profª. Drª Débora Mota Mattos", role: "Colaboradora", image: deboraImage },
  { name: "Profª. Drª Adriane Parraga", role: "Colaboradora", image: adrianeImage },
  { name: "Profª Drª Letícia Vieira Guimarães", role: "Colaboradora", image: leticiaImage },
]

export const CURRENT_BOLSISTAS: BolsistaType[] = [
  {
    name: "Lucas Diniz",
    image: LucasImage,
  },
  { name: "Eduarda Leal", image: EduardaImage },
  { name: "Sara Abreu", image: SaraImage },
  { name: "Maryanna Martins", image: MaryImage },
  { name: "João Henrique", image: JoaoImage },
  { name: "Gabriel Soares", altText: "Bolsista Voluntário", image: GabeImage },
]

export const ALL_TEAM_MEMBERS: allMembersMemberType[] = [
  { name: "Michel F. Dick" },
  { name: "Denifer Da Cruz" },
  { name: "Lucas Santos Monteiro" },
  { name: "Isabela Rennhack" },
  ...CURRENT_BOLSISTAS,
]
