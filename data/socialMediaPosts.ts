import { StaticImageData } from "next/image"
import { AdaLoveCard, FacebookPost, InstagramPost } from "public"
import generateTimestampByDate from "utils/generateTimestampByDate"

type socialMediaType = "Facebook" | "Instagram" | "Twitter" | "Linkedin" | "Youtube"

interface socialMediaPost {
  text: string
  name: string
  subname: string
  image: StaticImageData
  href?: string
  date?: number
  showInTimeline?: boolean
  socialMedia: socialMediaType
}

const SOCIALMEDIA_DATA: socialMediaPost[] = [
  {
    text: "Ada Lovelace Day! ✨ Celebrado anualmente na segunda terça feira de outubro, o evento tem como objetivo homenagear e destacar as conquistas das mulheres na ciência, tecnologia, engenharia e matemática. O dia leva o nome de Ada Lovelace matemática e escritora britânica do século XIX e a primeira programadora da história 👩🏻‍💻💕 #tech #technology #tecnologia #computer #science #women #womenintech #programming #programmer #programadora #university #universidade #uergs #rs #poa #guaiba #brazil #fy #fypage #fypシ",
    socialMedia: "Instagram",
    name: "include.gurias",
    subname: "UERGS Guaíba",
    image: AdaLoveCard,
    date: generateTimestampByDate("2023-09-11"),
  },
  {
    text: "Com esse time de mulheres em prol da ciência, inovação, tecnologia e educacao! #jovemtalentors #premiopesquisadorgaucho",
    name: "Include Gurias",
    subname: "450 curtidas • 476 seguidores",
    socialMedia: "Facebook",
    image: FacebookPost,
  },
  {
    text: "O #include <gurias> é um projeto de empoderamento de meninas e mulheres nas exatas através da aprendizagem criativa, pensamento computacional, espaço maker e clube de eletrônica. #fy #fyp #women #tech #womenintech #technology #science #math #programming #meninasdigitais #uergs #br #rs #guaiba #poa #inclusao #empoderamento",
    name: "include.gurias",
    subname: "UERGS Guaíba",
    socialMedia: "Instagram",
    image: InstagramPost,
    date: generateTimestampByDate("2023-08-04"),
  },
]

export default SOCIALMEDIA_DATA
