import { Divider } from "@chakra-ui/react"
import SeeMoreArrow from "components/SeeMoreArrow/SeeMoreArrow"
import { WhatWeDoCardProps } from "types/WhatWeDoCard"
import Image from "next/image"
import { Box, Text } from "@chakra-ui/react"

const WhatWeDoCard = ({ image, title, text, arrowTxt, arrowHref }: WhatWeDoCardProps) => {
  return (
    <Box maxW="sm" overflow="hidden" w={"full"}>
      <Box p="6">
        <Image
          src={image}
          width={200}
          height={150}
          alt={title}
          style={{
            width: "auto",
            maxWidth: "200px",
            height: "auto",
          }}
        />
        <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" fontSize={{ base: "xl", lg: "2xl" }} isTruncated>
          {title}
        </Box>
        <Box mb={4}>
          <Text fontSize={{ base: "sm", lg: "md" }} color="gray.500" height={100} id="text">
            {text}
          </Text>
        </Box>
        <Divider mb={4} />
        <SeeMoreArrow text={arrowTxt} href={arrowHref} />
      </Box>
    </Box>
  )
}

export default WhatWeDoCard
