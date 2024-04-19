"use client"
import { AspectRatio, Box, Flex, Icon, Stack } from "@chakra-ui/react"
import Avatar from "boring-avatars"
import Image from "next/image"
import { SocialButton } from "components"
import Reveal from "components/Animations/Reveal"
import { CounterMap } from "public"
import { TeamMemberType } from "types/teamMembers"
import getIcon from "utils/getSocialMediaIcon"
import S from "./cardTeam.module.css"

type CardTeamProps = {
  title: string
  children: React.ReactNode
}

export const BaseTeamCard = ({ title, children }: CardTeamProps) => (
  <Box className={S.__TeamCardMain}>
    <Image src={CounterMap} alt="Contour Line" fill className={S.__CountourLineSvg} />
    <Box p="6" bg={"var(--primary-300)"} className={S.__TeamCard}>
      <Box className={S.__TeamCardTitle}>{title}</Box>
      {children}
    </Box>
  </Box>
)

export const TeamCard = ({ name, image, role }: TeamMemberType) => {
  return (
    <Reveal animationdirection="bottom" delay={0.1}>
      <BaseTeamCard title={name}>
        <Flex justifyContent="space-between" direction="column" h={"90%"}>
          <Flex justify="center" align="center">
            {image ? (
              <AspectRatio ratio={1} w="300px" mb={4} className={S.__CardTeamImage}>
                <Image src={image} alt={name} fill className="h-full rounded-lg object-cover shadow-lg" />
              </AspectRatio>
            ) : (
              <Box mb={4} className={`${S.__CardTeamImage} shadow-lg`}>
                <Avatar
                  name={name}
                  variant="beam"
                  square={true}
                  size={300}
                  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
              </Box>
            )}
          </Flex>
          <Flex direction="column" align="center" justify="center" h="100%">
            <Box fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
              {role}
            </Box>
          </Flex>
        </Flex>
      </BaseTeamCard>
    </Reveal>
  )
}

export const BolsistaCard = ({ name, image, github, linkedin, instagram }: TeamMemberType) => {
  return (
    <Reveal animationdirection="bottom" delay={0.1}>
      <BaseTeamCard title={name}>
        <Flex justifyContent="space-between" direction="column" h={"90%"}>
          <Flex justify="center" align="center">
            {image ? (
              <AspectRatio ratio={1} w="300px" mb={4} className={S.__CardTeamImage}>
                <Image src={image} alt={name} fill className="h-full rounded-lg object-cover shadow-lg" />
              </AspectRatio>
            ) : (
              <Box mb={4} className={`${S.__CardTeamImage} shadow-lg`}>
                <Avatar
                  name={name}
                  variant="beam"
                  square={true}
                  size={"300"}
                  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
              </Box>
            )}
          </Flex>
          <Stack direction={"row"} spacing={6} justifyContent="center" mb={4} className={S.__CardTeamSocialMedia}>
            {linkedin && (
              <SocialButton
                key={linkedin}
                size={45}
                label={`Linkedin`}
                href={linkedin}
                animation="rotateHover"
                delay={0.1}
              >
                <Icon as={getIcon("linkedin")} color="white" size={25} />
              </SocialButton>
            )}
            {github && (
              <SocialButton key={github} size={45} label={"Github"} href={github} animation="rotateHover" delay={0.1}>
                <Icon as={getIcon("github")} color="white" size={25} />
              </SocialButton>
            )}
            {instagram && (
              <SocialButton
                key={instagram}
                size={45}
                label={"Instagram"}
                href={instagram}
                animation="rotateHover"
                delay={0.1}
              >
                <Icon as={getIcon("instagram")} color="white" size={25} />
              </SocialButton>
            )}
          </Stack>
        </Flex>
      </BaseTeamCard>
    </Reveal>
  )
}
