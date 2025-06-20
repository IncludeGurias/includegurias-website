import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWavyText } from "components";
import { BitBoxImage2 } from "public";
import { GibisLinks } from "utils/includeLinks";
import baseMetadata from "utils/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "BitBox",
  description:
    "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
};

const BitBox = () => {
  return (
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
      mt={12}
    >
      <Image src={BitBoxImage2} alt="BitBox" />
      <Flex direction={"column"} px={4} align="center">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <AnimatedWavyText
            line1="BitBox: Desenvolvimento do pensamento computacional"
            ClassNames={{
              firstLine:
                "text-red-400 font-bold tracking-tight mb-4 text-shadow-md mb-0",
            }}
          />
        </Heading>
        <Text
          mt={4}
          color={"primary.TEXT"}
          as={"span"}
          fontSize={{ base: "xl" }}
          maxW={{ base: "100%", md: "3xl" }}
        >
          Este Produto Educacional (PE) apresenta um conjunto de 5 jogos
          educativos que visam auxiliar educadores na introdução da Computação
          na Educação Básica através do Pensamento Computacional. Os jogos,
          denominados `&quot;Bits`&quot;, abordam conceitos como decomposição,
          reconhecimento de padrões, abstração e algoritmo.
        </Text>
        <Link href={GibisLinks.BitBox}>
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
            Ver Material
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default BitBox;
