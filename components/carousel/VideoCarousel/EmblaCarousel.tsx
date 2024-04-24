import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { VideoType } from "types/videoType"
import S from "./embla.module.css"
import VideoFrameCarousel from "./VideoFrameCarousel"
import { NextButton, PrevButton, usePrevNextButtons } from "../EmblaCarouselArrowButtons"

type PropType = {
  slides: VideoType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [activeSlide, setActiveSlide] = useState(0)

  // Set active slide on select
  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", () => {
      setActiveSlide(emblaApi.selectedScrollSnap())
    })

    emblaApi.slideNodes().forEach((slideNode, index) => {
      slideNode.classList.toggle(`${S.is__active}`, index === activeSlide)
    })
  }, [emblaApi, activeSlide])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick,
    setActiveSlide
  )

  return (
    <section className={S.embla}>
      <div className={S.embla__viewport} ref={emblaRef}>
        <div className={S.embla__container}>
          {slides.map((video, index) => (
            <div className={S.embla__slide} key={index}>
              <VideoFrameCarousel videoList={video} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[55%] w-full">
        {/* <div className="embla__buttons"> */}
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className={`${S.embla__button} ${S.prev}`} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className={`${S.embla__button} ${S.next}`} />
        {/* </div> */}
      </div>
    </section>
  )
}

export default EmblaCarousel
