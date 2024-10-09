"use client"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import PartnerSlide from "./partnerSlide"
import { usePartnersStore } from "app/states"
import "./partners.css"

export default function Partners() {
  const [partners] = usePartnersStore((state) => [state.partners])
  const { getPartners } = usePartnersStore((state) => ({
    getPartners: state.getPartners,
  }))

  useEffect(() => {
    getPartners()
  }, [getPartners])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const marquee = document.querySelector(".marquee--8") as HTMLElement
    if (marquee) {
      marquee.style.setProperty("--marquee-items", partners.length.toString())
    }
  }, [])

  return (
    <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
      <div className="marquee marquee--8" id="first-line">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="marquee__item first-row"
            initial={{ scale: 0 }}
            ref={ref}
            animate={{ ...(isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }) }}
          >
            <PartnerSlide imageUrl={partner.imageUrl} name={partner.name} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
