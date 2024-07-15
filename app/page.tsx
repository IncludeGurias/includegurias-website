import { Box, Container, Flex, Grid, GridItem, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { Metadata } from "next"
import Link from "next/link"
import { createElement } from "react"
import { IoIosPeople, IoLogoYoutube } from "react-icons/io"
import { MdLocalPhone } from "react-icons/md"
import {
  AnimatedWavyText,
  HeadingText,
  MainVideoArrow,
  MotionBlob,
  NewsSection,
  Partners,
  PrimaryButton,
  Reveal,
  RotateReveal,
  SocialButton,
  SocialMediaCard,
  TestimonialsSection,
  VideoCarousel,
  VideoFrame,
  WhatWeDoSection,
} from "components"
import SOCIALMEDIA_DATA from "data/socialMediaPosts"
import { IncludeAvatar } from "public"
import { contactLinks } from "utils/includeLinks"
import baseMetadata from "utils/metadata"
import { SocialMediaData } from "utils/socialMedia"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Bem-vinda(o) ao Include Gurias",
  description: "Garotas que codam mudam o mundo!",
}

export default function Home() {
  return (
    <Container maxW={{ base: "100%", md: "7xl" }} pt={100}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        mt={8}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} w={{ base: "100%" }}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "4xl", lg: "68px" }}
            textAlign={{ base: "center", sm: "left" }}
          >
            <AnimatedWavyText
              line1="Garotas que codam"
              line2="Mudam o mundo"
              ClassNames={{
                firstLine: "text-red-400 font-bold tracking-tight mb-4 text-shadow-md",
              }}
            />
          </Heading>
          <Reveal>
            <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="justify" id="text">
              Nosso objetivo é divulgar a área da STEM, despertando o interesse de meninas para a área tecnológica e das
              exatas, através do desenvolvimento do pensamento computacional.
            </Text>
          </Reveal>
          <Stack
            spacing={{ base: 8, sm: 20 }}
            direction="row"
            justify="center"
            justifyItems="center"
            alignItems="center"
            display="flex"
            my={2}
            w="full"
          >
            <Link href="/sobre-nos" passHref>
              <PrimaryButton icon={<IoIosPeople size={25} />}>Sobre nós</PrimaryButton>
            </Link>
            <Link href="/contact" passHref>
              <PrimaryButton icon={<MdLocalPhone size={25} />}>Contato</PrimaryButton>
            </Link>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <MotionBlob
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            overflow={"hidden"}
            top={"-20%"}
            left={0}
            color="primary.400"
          />
          <Box maxW={750} boxShadow={"2xl"} rounded={"md"} zIndex={2}>
            <VideoFrame
              loading="eager"
              embedId="ErGaw5yISjc?si"
              title="Projeto Include Gurias"
              allowFullScreen
              className="border-outset relative h-[200px] w-[300px] rounded-2xl border-4 border-red-500 bg-black md:h-[400px] md:w-[600px]"
            />
            <RotateReveal className="bottom-0 left-0 hidden h-[50px] w-full md:absolute md:block">
              <>
                <Icon
                  as={MainVideoArrow}
                  color="gray.400"
                  w={100}
                  position={"absolute"}
                  right={"83%"}
                  bottom={"-100%"}
                />
                <Text
                  fontSize={"lg"}
                  fontFamily={"Caveat"}
                  position={"absolute"}
                  w={"150px"}
                  textAlign={"center"}
                  zIndex={999}
                  right={"95%"}
                  bottom={"-100%"}
                  id="text"
                  transform={"rotate(10deg)"}
                >
                  Assista um video sobre o Include!
                </Text>
              </>
            </RotateReveal>
          </Box>
        </Flex>
      </Stack>

      <Flex w="full">
        <Partners />
      </Flex>

      <WhatWeDoSection />
      <NewsSection />
      <TestimonialsSection />

      <Box p={4} maxW={{ base: "100%", md: "9xl" }} display={"flex"} flexDirection={"column"}>
        <HeadingText text="Siga o #Include" align="center" />
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
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          columnGap={4}
          rowGap={4}
          w="full"
          justifyContent="space-between"
        >
          {SOCIALMEDIA_DATA.map((post, index) => (
            <GridItem w="full" className={"GridItem"} key={index}>
              <SocialMediaCard
                text={post.text}
                avatarImage={IncludeAvatar}
                name={post.name}
                subname={post.subname}
                socialMedia={post.socialMedia}
                classNames={{
                  reveal: `${index === 1 && "mt-8"}`,
                }}
                postImage={post.image}
                delay={index * 0.2}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box p={4} maxW={{ base: "100%", md: "9xl" }} display={"flex"} flexDirection={"column"} mt={8}>
        <HeadingText text="Confira nossos videos" align={"center"} />

        <VideoCarousel />

        <Flex direction="column" alignItems="center" mb={5} id="text">
          <Link href={contactLinks.Youtube} passHref>
            <PrimaryButton recuo={-270} classNames={{ divContainer: "w-[350px]" }} icon={<IoLogoYoutube size={25} />}>
              Veja mais videos
            </PrimaryButton>
          </Link>
        </Flex>
      </Box>
    </Container>
  )
}
