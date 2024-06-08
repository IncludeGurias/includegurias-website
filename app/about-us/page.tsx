import { Box, Flex, Grid, Stack } from "@chakra-ui/react"
import { Metadata } from "next"
import { createElement } from "react"
import { TbBook } from "react-icons/tb"
import {
  AboutUsValues,
  AllPartners,
  AllPeople,
  BolsistasSection,
  HeadingText,
  MaterialCard,
  PrimaryButton,
  SocialButton,
  SubHeadingText,
  SubText,
  TeamForAboutUs,
} from "components"
import { INCLUDE_MATERIALS } from "data"
import baseMetadata from "utils/metadata"
import { SocialMediaData } from "utils/socialMedia"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Sobre nós - Include Gurias",
  description: "Conheça mais sobre o projeto Include Gurias e sua equipe!",
}

export default function AboutUs() {
  return (
    <div className="mt-[200px] flex flex-col items-center">
      <Box p={4} className="section">
        <HeadingText text="Quem somos" align={"start"} />
        <SubText
          text="O Projeto Include Gurias foi criado desde 2016 pela profª. Drª Fabrícia Damando Santos, docente da UERGS. O projeto está vinculado ao Curso de Engenharia de Computação - na unidade em Guaíba/RS."
          align={"start"}
          classNames={{
            span: "mb-8",
          }}
        />
        <AboutUsValues />

        <SubHeadingText
          text="Quer ficar por dentro de tudo? siga o include!"
          align={"start"}
          classNames={{ text: "mt-8" }}
        />
        <Stack direction={"row"} spacing={6} justifyContent="start" mb={4}>
          {SocialMediaData.map((socialMedia, index) => (
            <SocialButton
              key={socialMedia.name + index}
              size={45}
              label={socialMedia.name}
              href={socialMedia.link}
              animation="rotateHover"
              delay={index * 0.1}
            >
              {createElement(socialMedia.icon, {
                color: "white",
                size: 25,
              })}
            </SocialButton>
          ))}
        </Stack>
      </Box>

      <Box p={4} className="section">
        <HeadingText text="Nossos Materias" align={"start"} />
        <SubText
          text="Nossa missão é empoderar mulheres e meninas através da tecnologia, ciência e inovação."
          align={"start"}
        />
        <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4} className="mt-4">
          {/* array de 3 items do materials */}
          {INCLUDE_MATERIALS.slice(0, 3).map((material, index) => (
            <MaterialCard
              key={material.title + index}
              title={material.title}
              description={material.description}
              isNew={material.isNew} // Isso é opcional, dependendo se você quer usar a propriedade isNew ou não.
              imageURL={material.imageURL}
              href={material.href}
              delay={index * 0.1}
            />
          ))}
        </Grid>
        <Flex justifyContent={"center"} mt={6}>
          <PrimaryButton recuo={-255} classNames={{ divContainer: "w-[325px]" }} icon={<TbBook size={25} />}>
            Ver todos os materiais
          </PrimaryButton>
        </Flex>
      </Box>

      <Box p={4} className="section">
        <HeadingText text="Nossa Equipe" align={"start"} classNames={{ text: "mt-16" }} />
        <SubText
          text="Nossa equipe é formada por pessoas incríveis que trabalham juntas para fazer a diferença."
          align={"start"}
        />
        <Flex justifyContent={"center"} flexDirection="column" alignItems="center">
          <SubHeadingText text="Nossa Equipe Atual" align={"center"} classNames={{ text: "mt-16" }} />
          <TeamForAboutUs />

          <SubHeadingText text="Nossas Bolsistas" align={"center"} classNames={{ text: "mt-16" }} />
          <BolsistasSection />

          <SubHeadingText text="Todos os Membros da Equipe" align={"center"} classNames={{ text: "mt-16" }} />
          <AllPeople />
        </Flex>
      </Box>

      <Box p={4} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={8}>
        <HeadingText text="Parceiros" align={"center"} />
        <SubText text="Aqui estão algumas das pessoas que fizeram parte da nossa história." align={"center"} />
        <AllPartners />
      </Box>
    </div>
  )
}
