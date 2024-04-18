"use client"

import { EmblaOptionsType } from "embla-carousel"
import EmblaCarousel from "./EmblaCarousel"
import { testimonials } from "data/testimonialsData"
import "./embla.css"

const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: "auto" }
const SLIDES = testimonials

const TestimonialsCarousel = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />
}

export default TestimonialsCarousel
