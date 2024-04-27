//legacy code - needs to be refactored (o sistema inteiro de gurias pode ser refatorado), rmeover axios possivlemente
import { AspectRatio, Box, Container, Divider, Flex, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { BiArrowBack, BiEdit } from "react-icons/bi"
import GirlNotFound from "app/not-found-woman"
import { AnimatedWavyText, Reveal } from "components"
import { womanType } from "types/womanType"
import { fetchGuria, fetchGuriaImage } from "./FetchMulherNext"
import IconCircleButton from "./IconCircleButton"
import MulherTags from "./Tags"

interface paramsProp {
  params: {
    ID: string
  }
}

export default async function GuriaPage({ params }: paramsProp) {
  const { ID } = params

  var data = (await fetchGuria(ID)) as womanType | null
  var womanImageItem = (await fetchGuriaImage(ID)) as string | null

  return (
    <>
      {data ? (
        <>
          <Stack direction={{ base: "column" }} mt={"110px"}>
            <Container maxW="7xl" flexDirection={"row"} display={"flex"} mt={4} minH={"100vh"} alignItems="flex-start">
              <Flex w={"full"} h={"full"} direction={"column"} maxW={500} mx={8}>
                <AspectRatio ratio={1 / 1} w={500} h={698}>
                  {womanImageItem ? (
                    <Reveal>
                      <Image
                        src={womanImageItem}
                        alt={data.name}
                        priority={true}
                        fill
                        sizes={"(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 500px"}
                        className="h-full rounded-xl object-cover"
                      />
                    </Reveal>
                  ) : (
                    <Text>Imagem não encontrada</Text>
                  )}
                </AspectRatio>
              </Flex>

              <Flex w={"full"} h={"full"} direction={"column"} textAlign={"center"}>
                <AnimatedWavyText
                  line1={data.name}
                  ClassNames={{
                    firstLine: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2",
                    div: "min-h-[80px]",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyItems="flex-start"
                  justifyContent="flex-end"
                  h={"full"}
                >
                  <MulherTags tags={data.tags} />

                  <Divider mt={2} />

                  <div className="my-6 flex h-full flex-col items-start justify-center">
                    {data.birthPlace && (
                      <Reveal>
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

                    {data.birthDate && (
                      <Reveal animationdirection="right" delay={0.3}>
                        <Text fontSize="xl" mt="1">
                          <strong>Data de Nascimento:</strong> {data.birthDate.split("-").join("/")}
                        </Text>
                      </Reveal>
                    )}
                  </div>
                </Box>

                <Divider />

                <Flex h="full" alignItems="center" justifyContent="center">
                  <Reveal>
                    <Text textAlign={"start"} fontSize="lg" mt="6">
                      {data.bio}
                    </Text>
                  </Reveal>
                </Flex>
              </Flex>
            </Container>
          </Stack>
          <Stack position="fixed" top={"125px"} left={"15px"}>
            <Flex direction="column" justifyItems="center" alignItems="center" gap={4}>
              <IconCircleButton
                icon={<BiArrowBack />}
                href="/materials/mulheres-da-stem"
                tooltip="Voltar"
                bgColor="red.100"
              />
              <IconCircleButton
                icon={<BiEdit />}
                href={`/materials/mulheres-da-stem/${encodeURIComponent(data.name)}/edit`}
                tooltip="Editar Página"
                bgColor="blue.200"
              />
            </Flex>
          </Stack>
        </>
      ) : (
        <GirlNotFound girlName={ID} />
      )}
    </>
  )
}
