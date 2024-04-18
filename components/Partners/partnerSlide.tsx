"use client"
import Image, { StaticImageData } from "next/image"
import { Reveal } from "components"

type PartnerSlideProps = {
  image: StaticImageData
  name: string
  ariaLabel?: boolean
  delay?: number
  key?: string
}

const PartnerSlide = ({ image, name, ariaLabel, delay, key }: PartnerSlideProps) => {
  return (
    <Reveal
      delay={delay}
      className="relative h-[100px] w-[250px] overflow-hidden"
      {...(key && { key: key })}
      {...(ariaLabel && { "aria-label": "true" })}
    >
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <Image
          src={image}
          className="h-full w-full object-contain"
          quality={50}
          fill
          sizes="(max-width: 250px) 250px, (max-height: 100px) 100px"
          loading="lazy"
          alt={name + " logo"}
        />
      </div>
    </Reveal>
  )
}

export default PartnerSlide
