import { AspectRatio, Box, Link, Stack, Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import { Reveal } from "components"
import { ALL_PARTNERS } from "data"
import partnerType from "types/partnerType"

const PartnerImage = ({ name, href, image }: partnerType) => {
  return (
    <AspectRatio ratio={1} minW="150px" minH="100px" maxH={150} overflow="hidden" p={4}>
      <Tooltip label={name} aria-label={name}>
        <Link href={href || "#"}>
          <Box
            position="relative"
            width="100%"
            height="100%"
            cursor="pointer"
            transition="filter 0.3s ease-in-out"
            filter={"grayscale(100%)"}
            scale={0.9}
            _hover={{
              filter: "grayscale(0%)",
              transition: "filter 0.3s ease-in-out",
              scale: 1,
            }}
          >
            <Image
              src={image}
              fill
              alt={name}
              className="scale-90 object-contain transition-all duration-300 ease-in-out hover:scale-95"
            />
          </Box>
        </Link>
      </Tooltip>
    </AspectRatio>
  )
}

const AllPartners = () => {
  return (
    <Stack direction={"row"} spacing={6} justifyContent="center" mb={4} display="flex" flexWrap="wrap">
      {ALL_PARTNERS.map((partner: partnerType, index: number) => (
        <Reveal key={partner.name} delay={index * 0.1} className="mb-4">
          <PartnerImage name={partner.name} href={partner.href} image={partner.image} />
        </Reveal>
      ))}
    </Stack>
  )
}

export default AllPartners
