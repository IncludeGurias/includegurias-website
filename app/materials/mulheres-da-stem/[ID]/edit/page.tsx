import { Box, Container, Flex, Stack } from "@chakra-ui/react"
import { Metadata } from "next"
import GirlNotFound from "app/not-found-woman"
import { womanType } from "types/womanType"
import ConfirmLeaveModal from "./ConfirmLeaveModal"
import EditarMulherForm from "./EditarMulherForm"
import EditarMulherImagem from "./EditarMulherImagem"
import { fetchGuria, fetchGuriaImage, fetchTags } from "../FetchMulherNext"

interface paramsProp {
  params: {
    ID: string
  }
}

export async function generateMetadata({ params }: paramsProp): Promise<Metadata> {
  const { ID } = params
  //@TODO remove need for double fetch
  const data = (await fetchGuria(ID)) as womanType | null
  const womanImageItem = (await fetchGuriaImage(ID)) as string | null

  return {
    title: "Editar " + data?.name + " - Include Gurias" || "Mulher não encontrada",
    openGraph: {
      images: [
        {
          url: womanImageItem || "",
          alt: data?.name,
        },
      ],
    },
  }
}
export default async function GuriaEditPage({ params }: paramsProp) {
  const { ID } = params

  var data = (await fetchGuria(ID)) as womanType | null
  var womanImageItem = (await fetchGuriaImage(ID)) as string | null
  var allTags = (await fetchTags()) as string[] | null
  return (
    <>
      {data ? (
        <>
          <Stack direction={{ base: "column" }}>
            <Container
              maxW="7xl"
              flexDirection={{ base: "column", md: "row" }}
              gap={4}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
              minH={"100vh"}
              py={"110px"}
            >
              <>
                {/* Image section with error handling */}
                <EditarMulherImagem womanImageItem={womanImageItem} />
                {/* Content section with well-structured layout */}
                <Flex w={"full"} h={"full"} direction={"column"} textAlign={"center"}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyItems="flex-start"
                    h={"full"}
                    justifyContent="flex-start"
                  >
                    <EditarMulherForm data={data} allTags={allTags} />
                  </Box>
                </Flex>
              </>
            </Container>
          </Stack>
          <Stack direction="row" justifySelf="flex-start" position="fixed" bottom="15px" left="15px" zIndex="100">
            <Flex direction="column" justifyItems="center" alignItems="center" gap={4}>
              <ConfirmLeaveModal url={`/materials/mulheres-da-stem/${encodeURIComponent(data.name)}`} />
            </Flex>
          </Stack>
        </>
      ) : (
        <>
          <GirlNotFound girlName={ID} />
        </>
      )}
    </>
  )
}
