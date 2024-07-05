import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AnimatedWavyText } from "components"
import { EletroinoAOrigem } from "public"
import { GibisLinks } from "utils/includeLinks"
import baseMetadata from "utils/metadata"
import Test from "./test"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Eletroino - A Origem",
  description: "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
}

const Eletroino1 = () => {
  return (
    <>
      <Container
        as={Flex}
        py={4}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        className="container"
        minH={"90vh"}
        w={"full"}
        h={"full"}
        mt={24}
      >
        <Image src={EletroinoAOrigem} alt="Eletroino A Origem" />
        <Flex direction={"column"} px={4} align="center">
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <AnimatedWavyText
              line1="Elétroino: A Origem"
              ClassNames={{
                firstLine: "text-red-400 font-bold tracking-tight mb-4 text-shadow-md",
              }}
            />
          </Heading>
          <Text mt={4} color={"primary.TEXT"} as={"span"} fontSize={{ base: "xl" }} maxW={{ base: "100%", md: "3xl" }}>
            Elétroino: A Origem é uma série de histórias em quadrinhos que apresenta um super-herói brasileiro que luta
            contra o crime e a injustiça, inspirando outras pessoas a fazerem o mesmo.
          </Text>
          <Link href={GibisLinks.EletroinoVolume1}>
            <Button
              mt={8}
              w={350}
              h={65}
              _hover={{
                bg: "red.400",
                color: "white",
                borderColor: "red.200",
              }}
              border={"2px"}
              borderColor={"red.400"}
              color={"red.400"}
            >
              Ler Quadrinho
            </Button>
          </Link>
        </Flex>
      </Container>
      <Test />
    </>
  )
}

export default Eletroino1
