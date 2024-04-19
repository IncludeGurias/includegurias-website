"use client"
import { HeadingText, Reveal, TestimonialsCarousel } from "components"

const TestimonialsSection = () => {
  return (
    <div className="section min-h-[600px]">
      <div className="relative mx-auto mt-8 max-w-screen-xl px-8 py-16 text-gray-900 md:px-12 lg:px-16 xl:px-32">
        <div className="hero-pattern absolute bottom-0 right-0 h-56 w-64" />
        <HeadingText text="Testemunhos" align="center" />
        <Reveal animationdirection="left" delay={0.3}>
          <div className="text-center text-xl font-light text-gray-700">
            Empoderando Mulheres na Tecnologia. Veja o que estão falando sobre nós!
          </div>
        </Reveal>
      </div>
      <TestimonialsCarousel />
    </div>
  )
}

export default TestimonialsSection
