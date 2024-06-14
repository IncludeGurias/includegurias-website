import { StaticImageData } from "next/image"

export interface NewsItem {
  id: number
  title: string
  description: string
  image: StaticImageData | null
  href: string | null
  date: number
  showInTimeline?: boolean
}
