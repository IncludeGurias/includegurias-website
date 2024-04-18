import { StaticImageData } from "next/image"

export interface NewsItem {
  title: string
  description: string
  image: StaticImageData | null
  href?: string
  date?: number
}
