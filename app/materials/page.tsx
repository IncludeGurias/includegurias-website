import { Box, Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react"
import { Metadata } from "next"
import { MaterialCard, Reveal } from "components"
import { INCLUDE_MATERIALS } from "data"
import { ConfettiLight } from "public"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Materiais - Include Gurias",
  description: "Conheça os materiais disponíveis para todos criados pela equipe do Include Gurias.",
}

export default function OurMaterials() {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundImage: ConfettiLight,
        backgroundAttachment: "fixed",
      }}
      id="contact"
      m={0}
      pt={100}
    >
      <Box m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }} mt={0}>
            <Reveal animationdirection="bottom">
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Materias do Include Gurias
              </Heading>
            </Reveal>
            <Reveal animationdirection="bottom" delay={0.2}>
              <Text maxW="6xl" fontSize={{ base: "md", md: "lg", lg: "xl" }} textAlign="center">
                Nos da include gurias acreditamos que a tecnologia é uma ferramenta poderosa para transformar a vida das
                pessoas. Por isso, desenvolvemos programas de formação e mentoria para mulheres que desejam ingressar na
                área de tecnologia.
              </Text>
            </Reveal>
            <Reveal animationdirection="bottom" delay={0.4}>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                }}
                gap={4}
              >
                {INCLUDE_MATERIALS.map((material, index) => (
                  <GridItem key={material.title} colSpan={{ base: 1, md: 1 }} h={{ base: "full" }}>
                    <MaterialCard
                      title={material.title}
                      description={material.description}
                      isNew={material.isNew}
                      imageURL={material.imageURL}
                      href={material.href}
                      delay={index * 0.3}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Reveal>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
