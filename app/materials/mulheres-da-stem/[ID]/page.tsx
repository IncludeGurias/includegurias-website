import {
  AspectRatio,
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"
import GirlNotFound from "app/not-found-woman"
import { AnimatedWavyText, Reveal } from "components"
import { env } from "env.mjs" // On server
import { womanType } from "types/womanType"
import { tagColors } from "utils/getTagColors"
import { toCamelCase } from "utils/stringFunctions"
import { fetchImage } from "utils/webService"

interface paramsProp {
  params: {
    ID: string
  }
}

export default async function GuriaPage({ params }: paramsProp) {
  const name = toCamelCase(params.ID)
  const guriaUrl = `${env.SITE_URL}/api/gurias?guria=${name}`
  const staticData = await fetch(guriaUrl, {
    cache: "force-cache",
  })

  if (!staticData.ok) {
    return <GirlNotFound girlName={name} />
  }

  const womanImage = await fetchImage(name)

  if (!womanImage.ok) {
    return <GirlNotFound girlName={name} />
  }

  const data = (await staticData.json()) as womanType
  const womanImageItem = (await womanImage.json()) as string

  return (
    <>
      {data ? (
        <>
          <Stack direction={{ base: "column" }}>
            <Container
              maxW="7xl"
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={4}
              minH={"100vh"}
            >
              <Flex w={"full"} h={"full"} direction={"column"} alignItems="center" maxW={500} mx={8}>
                <AspectRatio ratio={1 / 1} w={400} h={600}>
                  {womanImageItem ? (
                    <Reveal>
                      <Image
                        src={womanImageItem}
                        alt={data.name}
                        loading="lazy"
                        fill
                        className="h-full rounded-xl object-cover"
                      />
                    </Reveal>
                  ) : null}
                </AspectRatio>
              </Flex>

              <Flex w={"full"} h={"full"} direction={"column"} textAlign={"center"}>
                <AnimatedWavyText
                  line1={data.name}
                  ClassNames={{
                    firstLine: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyItems="flex-start"
                  justifyContent="flex-end"
                  h={"full"}
                >
                  <Wrap py={4} display="flex" flexDirection="column" alignItems="center">
                    {data.tags.map((tag, index) => (
                      <WrapItem key={index}>
                        <Reveal delay={index * 0.2}>
                          <Badge
                            size="lg"
                            fontSize="md"
                            colorScheme={tagColors[tag as keyof typeof tagColors] || "teal"}
                          >
                            {tag}
                          </Badge>
                        </Reveal>
                      </WrapItem>
                    ))}
                  </Wrap>

                  <Divider mt={2} />

                  <div className="my-6 flex h-full flex-col items-start justify-center">
                    {data.birthPlace && (
                      <Reveal animationdirection="right" delay={0.1}>
                        <Text fontSize="xl">
                          <strong>Local de Nascimento:</strong> {data.birthPlace}
                        </Text>
                      </Reveal>
                    )}

                    {data.job && (
                      <Reveal animationdirection="right" delay={0.2}>
                        <Text fontSize="xl" mt="1">
                          <strong>Profissão:</strong> {data.job}
                        </Text>
                      </Reveal>
                    )}
                  </div>
                </Box>

                <Divider />

                <Flex h="full" alignItems="center" justifyContent="center">
                  <Reveal animationdirection="right">
                    <Text textAlign={"start"} fontSize="lg" mt="6">
                      {data.bio}
                    </Text>
                  </Reveal>
                </Flex>
              </Flex>
            </Container>
          </Stack>

          <Link href="/materials/mulheres-da-stem">
            <Tooltip label="Voltar" aria-label="Voltar">
              <Card
                position="fixed"
                top={"125px"}
                left={"15px"}
                borderRadius="15rem"
                boxShadow="lg"
                transition={"all 0.2s ease-in-out"}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  zIndex: 1,
                }}
              >
                <CardBody>
                  <Text>
                    <BiArrowBack />
                  </Text>
                </CardBody>
              </Card>
            </Tooltip>
          </Link>
        </>
      ) : (
        <GirlNotFound girlName={name} />
      )}
    </>
  )
}
