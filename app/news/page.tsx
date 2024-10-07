import { Button, Container, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { HeadingText } from "components"

const News = () => {
  return (
    <Container
      as={Flex}
      py={4}
      direction={{ base: "column" }}
      align="center"
      justify="center"
      className="container"
      minH={"90vh"}
      w={"full"}
      h={"full"}
      mt={24}
    >
      <HeadingText text="Página em Desenvolvimento" />
      <Link href="/">
        <Button mt={4} className="rounded-xl bg-rose-500 px-4 py-2 font-bold text-white hover:bg-rose-700" size="lg">
          Voltar para início
        </Button>
      </Link>
    </Container>
  )
}

export default News
