import { Box, WrapItem } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

interface womanCardProps {
  name: string
  imageUrl?: string
  tags: string[]
  index: number
}

const WomanCard = ({ name, imageUrl }: womanCardProps) => {
  return (
    <WrapItem key={name} zIndex={1} title={name}>
      <Link href={`/materials/mulheres-da-stem/${name.replaceAll(" ", "-")}`} prefetch={false} className="z-1">
        <Box
          w="300px"
          h="400px"
          borderRadius="xl"
          overflow="hidden"
          position="relative"
          transition="transform 0.2s ease-in-out"
          zIndex="1"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => console.log(name)}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              loading="lazy"
              quality={75}
              fill
              sizes="300px 400px"
              className="object-cover"
            />
          )}
        </Box>
      </Link>
    </WrapItem>
  )
}

export default WomanCard
