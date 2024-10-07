import {
  AdaLovelace,
  BitBoxImage,
  EletroinoAOrigem,
  EletroinoArduino,
  EletroinoProtoboard,
  meninasEmpoderadas,
  OficinaDeSkratch,
} from "public"
import { Material } from "types/data/material"

const IncludeMaterials: Material[] = [
  {
    title: "Mulheres da STEM",
    description:
      "Você é mulher e está no ensino médio? Quer saber mais sobre as mulheres que fazem parte da área de exatas? Então esse programa é para você!",
    imageURL: AdaLovelace,
    isNew: true,
    href: "/materials/mulheres-da-stem",
  },
  {
    title: "GIBI: Meninas Empoderadas",
    description: "Veja nossa história em quadrinhos sobre mulheres na tecnologia e empodere-se!",
    imageURL: meninasEmpoderadas,
    href: "/materials/meninas-empoderadas",
  },
  {
    title: "GIBI: Eletroino - A Origem",
    description: "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
    imageURL: EletroinoAOrigem,
    href: "/materials/eletroino-a-origem",
  },
  {
    title: "GIBI: Eletroino - Protoboard",
    description: "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
    imageURL: EletroinoProtoboard,
    href: "/materials/eletroino-protoboard",
  },
  {
    title: "GIBI: Eletroino - Arduino",
    description: "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
    imageURL: EletroinoArduino,
    href: "/materials/eletroino-arduino",
  },
  {
    title: "Programando com Scratch",
    description: "Aprenda a programar com o Scratch, uma linguagem de programação visual!",
    imageURL: OficinaDeSkratch,
    href: "/materials/programando-com-scratch",
  },
  {
    title: "Bit Box - A Caixa de Bits",
    description: "Jogos armazenados em uma caixa sobre o desenvolvimento do pensamento computacional desplugado.",
    imageURL: BitBoxImage,
    href: "/materials/bit-box",
  },
]

export default IncludeMaterials
