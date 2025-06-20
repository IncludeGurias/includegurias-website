"use client";
import { Box, Flex, Grid, Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { TbBook } from "react-icons/tb";
import { useMaterialsStore, useSocialMediaStore } from "app/states";
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
} from "components";
import Material from "types/data/material";
import getSocialmediaIcon from "utils/getSocialMediaIcon";

export default function AboutUs() {
  const [materials] = useMaterialsStore((state) => [state.materials]);
  const { getMaterials, loading } = useMaterialsStore((state) => ({
    getMaterials: state.getMaterials,
    loading: state.materials_loading,
  }));

  const [SocialMediaData] = useSocialMediaStore((state) => [state.socialMedia]);
  const { getSocialMedia } = useSocialMediaStore((state) => ({
    getSocialMedia: state.getSocialMedia,
  }));

  useEffect(() => {
    getMaterials();
  }, [getMaterials]);

  useEffect(() => {
    getSocialMedia();
  }, [getSocialMedia]);

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
        <Stack
          direction={"row"}
          spacing={6}
          justifyContent={{ base: "center", lg: "start" }}
          mb={4}
        >
          {SocialMediaData.map((socialMedia, index) => (
            <SocialButton
              key={socialMedia.name + index}
              size={45}
              label={socialMedia.name}
              href={socialMedia.href}
              animation="rotateHover"
              delay={index * 0.1}
            >
              {getSocialmediaIcon({
                socialMedia: socialMedia.name,
                props: { size: 25, color: "white" },
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
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={4}
          className="mt-4"
        >
          {/* array de 3 items do materials */}
          {loading ? (
            <Spinner />
          ) : (
            materials
              .slice(0, 3)
              .map((material: Material) => (
                <MaterialCard
                  key={material.title}
                  title={material.title}
                  description={material.description}
                  isNew={material.isNew}
                  imageUrl={material.imageUrl}
                  href={material.href}
                />
              ))
          )}
        </Grid>
        <Flex justifyContent={"center"} mt={6}>
          <PrimaryButton
            recuo={-255}
            classNames={{ divContainer: "w-[325px]" }}
            icon={<TbBook size={25} />}
          >
            Ver todos os materiais
          </PrimaryButton>
        </Flex>
      </Box>

      <Box p={4} className="section">
        <HeadingText
          text="Nossa Equipe"
          align={"start"}
          classNames={{ text: "mt-16" }}
        />
        <SubText
          text="Nossa equipe é formada por pessoas incríveis que trabalham juntas para fazer a diferença."
          align={"start"}
        />
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
        >
          <SubHeadingText
            text="Nossa Equipe Atual"
            align={"center"}
            classNames={{ text: "mt-16" }}
          />
          <TeamForAboutUs />

          <SubHeadingText
            text="Nossas Bolsistas"
            align={"center"}
            classNames={{ text: "mt-16" }}
          />
          <BolsistasSection />

          <SubHeadingText
            text="Todas as pessoas que já ajudaram o Include"
            align={"center"}
            classNames={{ text: "mt-16" }}
          />
          <AllPeople />
        </Flex>
      </Box>

      <Box
        p={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={8}
      >
        <HeadingText text="Parceiros" align={"center"} />
        <SubText
          text="Aqui estão algumas das Empresas, Entidades e pessoas que nos apoiam."
          align={"center"}
        />
        <AllPartners />
      </Box>
    </div>
  );
}
