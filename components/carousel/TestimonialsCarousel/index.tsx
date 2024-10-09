"use client"

import { Spinner } from "@chakra-ui/react"
import { EmblaOptionsType } from "embla-carousel"
import { useEffect } from "react"
import { useTestimonialsStore } from "app/states"
import EmblaCarousel from "./EmblaCarousel"
import "./embla.css"

const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: "auto" }

const TestimonialsCarousel = () => {
  const [testimonials] = useTestimonialsStore((state) => [state.testimonials])
  const { getTestimonials, loading } = useTestimonialsStore((state) => ({
    getTestimonials: state.getTestimonials,
    loading: state.testimonial_loading,
  }))

  useEffect(() => {
    getTestimonials()
  }, [getTestimonials])

  // return <EmblaCarousel slides={testimonials} options={OPTIONS} />
  return <>{loading ? <Spinner /> : <EmblaCarousel slides={testimonials} options={OPTIONS} />}</>
}

export default TestimonialsCarousel
