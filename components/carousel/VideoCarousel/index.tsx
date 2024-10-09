"use client"
import { EmblaOptionsType } from "embla-carousel"
import { useEffect } from "react"
import { usePrimaryPageVideosStore } from "app/states"
import EmblaCarousel from "./EmblaCarousel"

const VideosCarousel: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const [PrimaryPageVideos] = usePrimaryPageVideosStore((state) => [state.primaryPageVideos])
  const { getPrimaryPageVideos } = usePrimaryPageVideosStore((state) => ({
    getPrimaryPageVideos: state.getPrimaryPageVideos,
  }))

  useEffect(() => {
    getPrimaryPageVideos()
  }, [getPrimaryPageVideos])

  return <EmblaCarousel slides={PrimaryPageVideos} options={OPTIONS} />
}

export default VideosCarousel
