import { StaticImageData } from "next/image"

export interface TimelineItemProps {
  id: number
  title: string
  description: string
  image?: StaticImageData
  date: number
  href?: string
}
