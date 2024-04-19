"use client"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Reveal } from "components"
import { ABOUT_US_VALUES } from "data"

const AboutUsValues = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} justifyItems={"center"}>
      {ABOUT_US_VALUES.map((item) => (
        <Box key={item.id} maxW="300px">
          <Reveal animationdirection="left" delay={0.3}>
            <Flex direction="column" h="full">
              <Image src={item.icon} width={150} height={150} alt={item.title} />
              <Text fontSize="3xl" fontWeight="bold" color={"black"} textAlign="start" mb={4}>
                {item.title}
              </Text>

              <Text fontSize="lg" fontWeight="thin" h="fit-content" textAlign="start" color={"black"}>
                {item.description}
              </Text>
            </Flex>
          </Reveal>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default AboutUsValues
