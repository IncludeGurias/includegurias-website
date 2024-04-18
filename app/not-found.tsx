import { Box, Heading, Text, Button, Link } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 Página não encontrada - Include Gurias",
  description: "Ops! Parece que essa página não foi encontrada.",
}

export default function NotFound() {
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
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Não encontramos a página que você está procurando
      </Text>
      <Text color={"gray.500"} mb={6}>
        Parece que a página que você está procurando não existe.
      </Text>
      <Link href="/">
        <Button
          colorScheme="red"
          bgGradient="linear(to-r, red.400, red.500, red.600)"
          color="white"
          leftIcon={<FaHome />}
          variant="solid"
        >
          Voltar para a página inicial
        </Button>
      </Link>
    </Box>
  )
}
