import { Box, Container, Flex, Stack } from "@chakra-ui/react"
import { BiArrowBack } from "react-icons/bi"
import GirlNotFound from "app/not-found-woman"
import { womanType } from "types/womanType"
import EditarMulherForm from "./EditarMulherForm"
import EditarMulherImagem from "./EditarMulherImagem"
import { fetchGuria, fetchGuriaImage, fetchTags } from "../FetchMulherNext"
import IconCircleButton from "../IconCircleButton"

interface paramsProp {
  params: {
    ID: string
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
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
              minH={"100vh"}
              mt={"100px"}
              pt={4}
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
          <Stack position="fixed" top={"125px"} left={"15px"}>
            <Flex direction="column" justifyItems="center" alignItems="center" gap={4}>
              <IconCircleButton
                icon={<BiArrowBack />}
                href={`/materials/mulheres-da-stem/${encodeURIComponent(data.name)}`}
                bgColor="red.100"
                tooltip="Voltar"
              />
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
