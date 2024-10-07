import { StaticImageData } from "next/image"

//usado no materials.tsx
export interface Material {
  [key: string]: string | StaticImageData | undefined | boolean
  title: string
  description: string
  isNew?: boolean
  imageURL: StaticImageData | string | undefined
  href: string
}
