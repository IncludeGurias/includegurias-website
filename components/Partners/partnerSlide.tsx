"use client"
import Image from "next/image"
import getPlaceholderImageIfNone from "utils/getPlaceholderImageIfNone"

type PartnerSlideProps = {
  imageUrl: string
  name: string
}

const PartnerSlide = ({ imageUrl, name }: PartnerSlideProps) => {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center">
      <Image
        src={getPlaceholderImageIfNone(imageUrl, 400, 300)}
        className="h-full w-full object-contain"
        quality={50}
        fill
        sizes="(max-width: 250px) 250px, (max-height: 100px) 100px"
        loading="lazy"
        alt={name + " logo"}
      />
    </div>
  )
}

export default PartnerSlide
