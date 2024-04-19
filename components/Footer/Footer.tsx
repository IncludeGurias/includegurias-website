import { ProjetoChancelado } from "public"
import { SocialMediaData } from "utils/socialMedia"
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { createElement } from "react"
import { contactLinks } from "utils/includeLinks"
import { SocialButton } from "components"
import "styles/TextHoverAnimation.css"
import { Love } from "components"

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#F28080" }} color={"white"} maxWidth="100wh" overflowX="hidden">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        borderBottom={"1px solid"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex
          direction="column"
          alignItems="center"
          as={Link}
          href={contactLinks["Meninas Digitais"]}
          cursor={"pointer"}
        >
          <Image
            src={ProjetoChancelado}
            alt="Logo"
            height={150}
            className="transition-transform duration-500 hover:scale-105"
          />
          <Text fontWeight={400} letterSpacing={1} className="hover-underline-animation" id="text">
            Projeto chancelado pelo Programa Meninas Digitais
          </Text>
        </Flex>

        <Flex direction="column" gap={4}>
          <Text fontWeight={600} className="tracking-wider" id="text">
            Siga o #Include
          </Text>
          <Stack direction={"row"} spacing={6}>
            {SocialMediaData.map((socialMedia) => (
              <SocialButton
                key={socialMedia.name}
                size={50}
                label={socialMedia.name}
                href={socialMedia.link}
                animation="rotateHover"
                circle={true}
              >
                {createElement(socialMedia.icon, {
                  size: 20,
                  color: "white",
                })}
              </SocialButton>
            ))}
          </Stack>
        </Flex>
      </Container>
      <Container as={Stack} maxW={"6xl"} py={4} direction="row" spacing={4} justify="space-between">
        <Text fontWeight={300} textAlign="center" color={"white"} id="text" fontSize="md">
          &copy; {new Date().getFullYear()}
          <strong> #Include &lt;gurias&gt;</strong> Todos os direitos reservados
        </Text>
        <Flex align="center" gap={1} id="text" fontSize="md">
          Feito com
          <Love />
          por
          <Link href={contactLinks.creatorSite}>
            <strong className="hover-underline-animation">Bots Channel</strong>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
