import { StaticImageData } from "next/image"

export interface TeamMemberType {
  name: string
  role?: string
  image?: StaticImageData | null
  href?: string
}

// usado no all team members component
export interface allMembersMemberType {
  name: string
  role?: string
  image?: StaticImageData
}

// usado no bolsistas component
export interface BolsistaType {
  name: string
  image?: StaticImageData
  altText?: string
}
