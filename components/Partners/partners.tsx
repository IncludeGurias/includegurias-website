import {
  BritishCouncil,
  CarlosChagas,
  KingsCollageLondon,
  MeninasDigitais,
  SBC,
  STEMConnectionHub,
  UERGS,
} from "public"
import "./partners.css"
import { StaticImageData } from "next/image"
import PartnerSlide from "./partnerSlide"

type Partner = {
  name: string
  image: StaticImageData
}

const PartnersList: Partner[] = [
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

export default function Partners() {
  return (
    <div className="scroller" data-direction="left" data-speed="fast" data-animated={true}>
      <div className="scroller__inner">
        {PartnersList.map((partner, index) => (
          <PartnerSlide
            image={partner.image}
            name={partner.name}
            key={partner.name + " " + index}
            delay={index * 0.2}
          />
        ))}
        {PartnersList.map((partner, index) => (
          <PartnerSlide
            image={partner.image}
            name={partner.name}
            delay={index * 0.2}
            key={partner + " " + index * 10}
          />
        ))}
      </div>
    </div>
  )
}
