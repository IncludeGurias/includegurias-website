"use client"
import { videoList } from "data/videoList"
import { EmblaOptionsType } from "embla-carousel"
import EmblaCarousel from "./EmblaCarousel"

const VideosCarousel: React.FC = (props) => {
  const OPTIONS: EmblaOptionsType = { loop: true, active: true }
  const SLIDES = videoList

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />
}

export default VideosCarousel
