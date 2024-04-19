import { Box, Button, Heading, Link, Text } from "@chakra-ui/react"
import { Metadata } from "next"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "404 Garota não encontrada - Include Gurias",
  description: "Ops! Parece que essa mulher não foi encontrada.",
}

const GirlNotFound = ({ girlName }: { girlName: string }) => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      h={"calc(100vh - 205px)"}
      overflow="hidden"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color={"gray.700"}
    >
      <Heading fontSize="2xl" mb={4}>
        &#34;{girlName}&#34; não encontrada
      </Heading>
      <Text mb={4}>Ops! Parece que essa mulher não foi encontrada.</Text>
      <Box>
        <Link href="/materials/mulheres-da-stem">
          <Button colorScheme="teal" size="md">
            Voltar para a lista de mulheres da STEM
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default GirlNotFound
