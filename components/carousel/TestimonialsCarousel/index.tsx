"use client"

import { EmblaOptionsType } from "embla-carousel"
import { TESTIMONIALS } from "data"
import EmblaCarousel from "./EmblaCarousel"
import "./embla.css"

const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: "auto" }

const TestimonialsCarousel = () => {
  return <EmblaCarousel slides={TESTIMONIALS} options={OPTIONS} />
}

export default TestimonialsCarousel
