import { Box, Flex, Grid, Stack } from "@chakra-ui/react"
import { Metadata } from "next"
import Image from "next/image"
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
  SocialMediaCard,
  SubHeadingText,
  SubText,
  TeamForAboutUs,
} from "components"
import IncludeMaterials from "data/materials"
import { AboutUsBanner, ChaComAda, CosturaPost, FacebookPost, IncludeAvatar, IncludeAvatarFace } from "public"
import baseMetadata from "utils/metadata"
import { SocialMediaData } from "utils/socialMedia"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Sobre nós - Include Gurias",
  description: "Conheça mais sobre o projeto Include Gurias e sua equipe!",
}

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <Box className="relative mt-[100px] h-96 w-screen">
        <Image
          priority
          src={AboutUsBanner}
          alt="About Us Banner"
          quality={100}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </Box>

      <Box p={4} className="section">
        <HeadingText text="Nossos valores" align={"start"} />
        <SubText
          text="Nossos valores são a base de tudo o que fazemos. Eles nos ajudam a crescer e a sermos melhores a cada dia."
          align={"start"}
        />
        <AboutUsValues />
      </Box>

      <Box p={4} className="section">
        <HeadingText text="Nossa Missão" align={"start"} />
        <SubText
          text="Nossa missão é empoderar mulheres e meninas através da tecnologia, ciência e inovação."
          align={"start"}
        />
        <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4} className="mt-4">
          {/* array de 3 items do materials */}
          {IncludeMaterials.slice(0, 3).map((material, index) => (
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

      <HeadingText text="Siga-nos nas redes sociais" align={"center"} />

      <Stack direction={"row"} spacing={6} justifyContent="center" mb={4}>
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
      <Flex dir="column" gap={4} justifyContent="space-between" className="section">
        <SocialMediaCard
          text="Chá com Ada Lovelace #fcc# 19SNCT @enigmaprojeto"
          avatarImage={IncludeAvatar}
          name="include.gurias"
          subname="UERGS Guaíba"
          socialMedia="Instagram"
          postImage={ChaComAda}
          delay={0.2}
        />

        <SocialMediaCard
          text="Com esse time de mulheres em prol da ciência, inovação, tecnologia e educacao! #jovemtalentors #premiopesquisadorgaucho"
          avatarImage={IncludeAvatarFace}
          name="Include Gurias"
          subname="450 curtidas • 476 seguidores"
          socialMedia="Facebook"
          postImage={FacebookPost}
          className="mt-16"
          delay={0.4}
        />

        <SocialMediaCard
          text="Temos muito orgulho em sermos Meninas Digitais @meninasdigitaissbc"
          avatarImage={IncludeAvatarFace}
          name="include.gurias"
          subname="450 curtidas • 476 seguidores"
          socialMedia="Facebook"
          postImage={CosturaPost}
          delay={0.6}
        />
      </Flex>

      <Box p={4} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={8}>
        <HeadingText text="Hall da Fama" align={"center"} />
        <SubText text="Aqui estão algumas das pessoas que fizeram parte da nossa história." align={"center"} />
        <AllPartners />
      </Box>
    </div>
  )
}
