import { Button, Container, Flex } from "@chakra-ui/react"
import { Metadata } from "next"
import Link from "next/link"
import { HeadingText } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Eletroino - Arduino",
  description: "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
}

const BitBox = () => {
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
      {/* https://www.instagram.com/p/CqD34LFAUfy/ */}
      <HeadingText text="Página em Desenvolvimento" />
      <Link href="/">
        <Button mt={4} className="rounded-xl bg-rose-500 px-4 py-2 font-bold text-white hover:bg-rose-700" size="lg">
          Voltar para início
        </Button>
      </Link>
    </Container>
  )
}

export default BitBox
