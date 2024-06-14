import { Box, Flex } from "@chakra-ui/react"
import { Metadata } from "next"
import {
  AllPeople,
  BolsistasSection,
  FounderCard,
  MegaTitle,
  SubHeadingText,
  SubText,
  TeamWithNoFounder,
} from "components"
import { FounderImage } from "public"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Nossa Equipe",
  description: "Conheça a equipe do projeto #include <gurias>!",
}

export default function TeamSection() {
  return (
    <div className="mt-[100px] flex min-h-screen w-screen items-center justify-center bg-gray-100">
      <Box p={4} className="section">
        <MegaTitle text="Nossa Equipe" classNames={{ text: "mt-16 text-red-400 mb-4" }} />
        <div className={`mx-auto my-4 w-96 border-2 border-dashed border-rose-400`} />

        <SubText
          text="Nossa equipe é formada por pessoas incríveis que trabalham juntas para fazer a diferença."
          align={"center"}
        />
        <Flex justifyContent={"center"} flexDirection="column" alignItems="center" gap={4} mb={16}>
          <SubHeadingText text="Nossa Fundadora" align={"center"} classNames={{ text: "mt-4" }} />
          <FounderCard
            name="Fabrícia Damando"
            role="Cordernadora"
            image={FounderImage}
            text="“Fabrícia Damando Santos, professora na UERGS, atua no curso de Engenharia de Computação e no Mestrado Profissional em Formação Docente para PPGSTEM. Doutora em Informática na Educação pela UFRGS/PPGIE, bacharel em Ciência da Computação pela PUC-Goiás e mestre em Engenharia Elétrica e de Computação pela UFG. Destacando-se pela criação do Projeto #include <gurias> em 2018, busca incentivar mais garotas a ingressarem na área de Ciências da Computação, reconhecendo a importância da representatividade. Seu trabalho visa ampliar o acesso e promover a diversidade nesse campo.”"
          />

          <SubHeadingText text="Nossa Equipe Atual" align={"center"} classNames={{ text: "mt-16" }} />
          <TeamWithNoFounder />

          <SubHeadingText text="Nossos Bolsistas" align={"center"} classNames={{ text: "mt-16" }} />
          <BolsistasSection />

          <SubHeadingText
            text="Todas as pessoas que já ajudaram o Include"
            align={"center"}
            classNames={{ text: "mt-16" }}
          />
          <AllPeople />
        </Flex>
      </Box>
    </div>
  )
}
