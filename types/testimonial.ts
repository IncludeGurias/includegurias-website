import { StaticImageData } from "next/image"

export interface TestimonialType {
  name: string
  sublegend: string
  sublegendHref: string
  color: string
  avatar: StaticImageData | null
  testimonial: string
  className?: string
}
