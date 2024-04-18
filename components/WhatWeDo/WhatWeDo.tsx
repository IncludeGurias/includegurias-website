"use client"
import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { HeadingText, Reveal, SeeMoreArrow, WhatWeDoCard } from "components"
import { Clubs, College, workshops } from "public"

const WhatWeDoCards = [
  {
    image: workshops,
    title: "Oficinas Inspiradoras",
    text: "esmistificamos a computação, inspirando garotas com oficinas criativas.",
    arrowTxt: "Explore as oficinas",
    arrowHref: "/materials/mulheres-da-stem",
  },
  {
    image: Clubs,
    title: "Educação Inclusiva",
    text: "Criamos materiais que promovem igualdade e inspiração na tecnologia.",
    arrowTxt: "Conheça mais",
    arrowHref: "/materials/meninas-empoderadas",
  },
  {
    image: College,
    title: "Ciência para Todos",
    text: "Compartilhamos ciência de forma acessível, motivando jovens mulheres.",
    arrowTxt: "Inspire-se conosco",
    arrowHref: "/ciencia-para-todos",
  },
]

const WhatWeDoSection = () => {
  return (
    <Box p={4} maxW={{ base: "100%", md: "9xl" }} display={"flex"} flexDirection={"column"} alignItems={"start"}>
      <Flex direction="column" gap={4} my={8}>
        <HeadingText text="O que nós fazemos?" align="start" />
        <Reveal animationdirection="left" delay={0.3}>
          <Text fontSize={{ base: "lg", lg: "xl" }} maxW={{ base: "100%", md: "2xl" }} textAlign="justify" id="text">
            Nós promovemos a participação de meninas na área STEM, incentivando o interesse pela tecnologia e ciências
            exatas. Oferecemos oficinas de programação, robótica e olimpíadas de aplicativos, visando ampliar o acesso e
            a representatividade feminina nessas áreas. Parceiros do Programa Meninas Digitais da Sociedade Brasileira
            de Computação.
          </Text>
        </Reveal>
        <SeeMoreArrow text="Sobre nós" href="/about-us" delay={0.5} />
      </Flex>

      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={"4em"} px={"2rem"}>
        {WhatWeDoCards.map((card, index) => (
          <Reveal key={index} animationdirection="bottom" delay={index * 0.2}>
            <WhatWeDoCard
              image={card.image}
              title={card.title}
              text={card.text}
              arrowTxt={card.arrowTxt}
              arrowHref={card.arrowHref}
            />
          </Reveal>
        ))}
      </Grid>
    </Box>
  )
}

export default WhatWeDoSection
