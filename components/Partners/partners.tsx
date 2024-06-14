"use client"
import "./partners.css"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import PARTNERS_LIST from "data/partnersList"
import PartnerSlide from "./partnerSlide"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const marquee = document.querySelector(".marquee--8") as HTMLElement
    if (marquee) {
      marquee.style.setProperty("--marquee-items", PARTNERS_LIST.length.toString())
    }
  }, [])

  return (
    <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
      <div className="marquee marquee--8" id="first-line">
        {PARTNERS_LIST.map((partner, index) => (
          <motion.div
            key={index}
            className="marquee__item first-row"
            initial={{ scale: 0 }}
            ref={ref}
            animate={{ ...(isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }) }}
          >
            <PartnerSlide
              image={partner.image}
              name={partner.name}
              key={partner.name + " " + index}
              delay={index * 0.2}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
