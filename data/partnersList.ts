import { StaticImageData } from "next/image"
import {
  BritishCouncil,
  CarlosChagas,
  KingsCollageLondon,
  MeninasDigitais,
  SBC,
  STEMConnectionHub,
  UERGS,
} from "public"

type Partner = {
  name: string
  image: StaticImageData
}

const PARTNERS_LIST: Partner[] = [
  {
    name: "SBC",
    image: SBC,
  },
  {
    name: "British Council",
    image: BritishCouncil,
  },
  {
    name: "Meninas Digitais",
    image: MeninasDigitais,
  },
  {
    name: "STEM Connection Hub",
    image: STEMConnectionHub,
  },
  {
    name: "UERGS",
    image: UERGS,
  },
  {
    name: "Fundaçao Carlos Chagas",
    image: CarlosChagas,
  },
  {
    name: "Kings Collage London",
    image: KingsCollageLondon,
  },
]

export default PARTNERS_LIST
