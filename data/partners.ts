import {
  BotsChannel,
  BritishCouncil,
  CarlosChagas,
  KingsCollageLondon,
  MeninasDigitais,
  SBC,
  STEMConnectionHub,
  UERGS,
} from "public"
import partnerType from "types/partnerType"

export const CURRENT_PARTNERS: partnerType[] = [
  {
    name: "SBC",
    href: "https://www.sbc.org.br/",
    image: SBC,
  },
  {
    name: "British Council",
    href: "https://www.britishcouncil.org.br/",
    image: BritishCouncil,
  },
  {
    name: "Meninas Digitais",
    href: "https://meninasdigitais.org/",
    image: MeninasDigitais,
  },
  {
    name: "STEM Connection Hub",
    href: "https://www.stemconnectionhub.org/",
    image: STEMConnectionHub,
  },
  {
    name: "UERGS",
    href: "https://www.uergs.rs.gov.br/",
    image: UERGS,
  },
  {
    name: "Fundaçao Carlos Chagas",
    href: "https://www.fcc.org.br/",
    image: CarlosChagas,
  },
  {
    name: "Kings Collage London",
    href: "https://www.kcl.ac.uk/",
    image: KingsCollageLondon,
  },
]

export const ALL_PARTNERS: partnerType[] = [
  ...CURRENT_PARTNERS,
  {
    name: "Bots Channel",
    image: BotsChannel,
    href: "https://www.botschannel.com/",
  },
]
