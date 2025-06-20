"use client";
import { Reveal, TestimonialsCard } from "components";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import TestimonialType from "types/data/testimonial";
import { NextButton, PrevButton, usePrevNextButtons } from "../EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";

type PropType = {
  slides: TestimonialType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((testimonial, index) => (
            <div
              className="embla__slide"
              key={index}
            >
              <Reveal
                className="size-full"
                animationdirection={index % 2 === 0 ? "top" : "bottom"}
                delay={0.3}
              >
                <TestimonialsCard testimonial={testimonial} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
