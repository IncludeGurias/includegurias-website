import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Metadata } from "next";
import Image from "next/image";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import GirlNotFound from "app/not-found-woman";
import { AnimatedWavyText, Reveal } from "components";
import { womanType } from "types/woman";
import { fetchGuria, fetchGuriaImage } from "./FetchMulherNext";
import IconCircleButton from "./IconCircleButton";
import MulherTags from "./Tags";

interface paramsProp {
  params: {
    ID: string;
  };
}

export async function generateMetadata({
  params,
}: paramsProp): Promise<Metadata> {
  const { ID } = params;
  //@TODO remove need for double fetch
  const data = (await fetchGuria(ID)) as womanType | null;
  const womanImageItem = (await fetchGuriaImage(ID)) as string | null;

  return {
    title: data?.name + " - Include Gurias" || "Mulher não encontrada",
    openGraph: {
      images: [
        {
          url: womanImageItem || "",
          alt: data?.name,
        },
      ],
    },
  };
}

export default async function GuriaPage({ params }: paramsProp) {
  const { ID } = params;

  const data = (await fetchGuria(ID)) as womanType | null;
  const womanImageItem = (await fetchGuriaImage(ID)) as string | null;

  return (
    <>
      {data ? (
        <Stack direction="column" spacing={8} py="110px">
          <Container
            maxW="7xl"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            {/* Responsive Image & Content Layout */}
            <Flex
              w="full"
              h="full"
              flexDirection="column"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <AspectRatio
                ratio={1 / 1}
                w={{ base: "full", md: 500 }}
                h={{ base: 450, md: 698 }}
              >
                {womanImageItem ? (
                  <Reveal>
                    <Image
                      src={womanImageItem}
                      alt={data.name}
                      priority={true}
                      fill
                      sizes="(max-width: 640px) 100vw, 100%"
                      className="h-full rounded-xl object-cover"
                    />
                  </Reveal>
                ) : (
                  <Text>Imagem não encontrada</Text>
                )}
              </AspectRatio>
            </Flex>
            <Flex
              w="full"
              h="full"
              flexDirection="column"
              justifyContent="center"
              mt={{ base: 4, md: 0 }}
              ml={{ base: 0, md: 8 }}
            >
              <AnimatedWavyText
                line1={data.name}
                ClassNames={{
                  firstLine:
                    "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-2",
                  div: "min-h-[80px]",
                }}
              />
              <Box display="flex" flexDirection="column" mt={4}>
                <MulherTags tags={data.tags} />
                <Divider mt={2} />
                <div className="flex flex-col items-start justify-center">
                  {data.birthPlace && (
                    <Reveal>
                      <Text fontSize="xl">
                        <strong>Local de Nascimento:</strong> {data.birthPlace}
                      </Text>
                    </Reveal>
                  )}
                  {data.birthDate && (
                    <Reveal>
                      <Text fontSize="xl">
                        <strong>Data de Nascimento:</strong> {data.birthDate}
                      </Text>
                    </Reveal>
                  )}
                  {data.job && (
                    <Reveal>
                      <Text fontSize="xl">
                        <strong>Profissão:</strong> {data.job}
                      </Text>
                    </Reveal>
                  )}
                </div>
                <Divider mt={4} />
                <Flex h="full" alignItems="center" justifyContent="center">
                  <Reveal>
                    <Text textAlign="start" fontSize="lg" mt={6}>
                      {data.bio}
                    </Text>
                  </Reveal>
                </Flex>
              </Box>
            </Flex>
          </Container>
          {/* Fixed & Responsive Action Buttons */}
          <Stack
            direction="row"
            justifySelf="flex-start"
            position="fixed"
            bottom="15px"
            left="15px"
            zIndex="100"
          >
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
          </Stack>
        </Stack>
      ) : (
        <GirlNotFound girlName={ID} />
      )}
    </>
  );
}
