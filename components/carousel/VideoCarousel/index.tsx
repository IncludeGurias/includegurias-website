"use client"
import { EmblaOptionsType } from "embla-carousel"
import { MAIN_PAGE_VIDEO_LIST } from "data"
import EmblaCarousel from "./EmblaCarousel"

const VideosCarousel: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }

  return <EmblaCarousel slides={MAIN_PAGE_VIDEO_LIST} options={OPTIONS} />
}

export default VideosCarousel
