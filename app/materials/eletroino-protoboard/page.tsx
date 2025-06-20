import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWavyText } from "components";
import { EletroinoProtoboard } from "public";
import { GibisLinks } from "utils/includeLinks";
import baseMetadata from "utils/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Eletroino - Protoboard",
  description:
    "Leia nossa história em quadrinhos sobre o Eletroino e descubra como tudo começou!",
};

const Eletroino2 = () => {
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
      mt={24}
      h={"full"}
    >
      <Image src={EletroinoProtoboard} alt="Eletroino Protoboard" />
      <Flex direction={"column"} px={4} align="center">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <AnimatedWavyText
            line1="Elétroino: Protoboard"
            ClassNames={{
              firstLine:
                "text-red-400 font-bold tracking-tight mb-4 text-shadow-md",
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
          Elétroino: Protoboard é uma série de histórias em quadrinhos que
          ensina eletrônica básica de uma maneira divertida e acessível,
          apresentando conceitos como circuitos, componentes eletrônicos e
          programação.
        </Text>
        <Link href={GibisLinks.EletroinoVolume2}>
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
  );
};

export default Eletroino2;
