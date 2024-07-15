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

export const FOUNDER: TeamMemberType = {
  name: "Profª. Drª Fabrícia Damando Santos",
  role: "Coordenadora",
  image: deboraImage,
  href: "http://lattes.cnpq.br/4675873218622076",
}

export const CURRENT_TEAM_MEMBERS: TeamMemberType[] = [
  { name: "Profª. Drª Débora Mota Mattos", role: "Colaboradora", image: deboraImage },
  {
    name: "Profª. Drª Adriane Parraga",
    role: "Colaboradora",
    image: adrianeImage,
    href: "http://lattes.cnpq.br/3179634735781158",
  },
  {
    name: "Profª Drª Letícia Vieira Guimarães",
    role: "Colaboradora",
    image: leticiaImage,
    href: "http://lattes.cnpq.br/3611501530862140",
  },
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
