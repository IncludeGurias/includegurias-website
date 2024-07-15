"use client"
import { AspectRatio, Box, Flex } from "@chakra-ui/react"
import Avatar from "boring-avatars"
import Image from "next/image"
import Link from "next/link"
import { CounterMap } from "public"
import { BolsistaType, TeamMemberType } from "types/teamMembers"
import S from "./cardTeam.module.css"

type CardTeamProps = {
  title: string
  children: React.ReactNode
  href: string
}

export const BaseTeamCard = ({ title, children, href }: CardTeamProps) => (
  <Link href={href} passHref>
    <Box className={S.__TeamCardMain}>
      <Image src={CounterMap} alt="Contour Line" fill className={S.__CountourLineSvg} />
      <Box p="6" bg={"var(--primary-300)"} className={S.__TeamCard}>
        <Box className={S.__TeamCardTitle}>{title}</Box>
        {children}
      </Box>
    </Box>
  </Link>
)

export const BaseBolsistaCard = ({ title, children }: CardTeamProps) => (
  <Box className={S.__BolsistaCardMain}>
    <Image src={CounterMap} alt="Contour Line" fill className={S.__CountourLineSvg} />
    <Box p="6" bg={"var(--primary-300)"} className={S.__BolsistaCard}>
      <Box className={S.__TeamCardTitle}>{title}</Box>
      {children}
    </Box>
  </Box>
)

export const TeamCard = ({ name, image, role, href }: TeamMemberType) => {
  return (
    <BaseTeamCard title={name} href={href ?? "#"}>
      <Flex justifyContent="space-between" direction="column" h={"90%"}>
        <Flex justify="center" align="center">
          {image ? (
            <AspectRatio ratio={1} w="300px" mb={4} className={S.__CardTeamImage}>
              <Image
                src={image}
                alt={name}
                fill
                className="h-full rounded-lg object-cover shadow-lg"
                sizes="315px, 315px, 315px"
              />
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
  )
}

export const BolsistaCard = ({ name, image, altText }: BolsistaType) => {
  return (
    <BaseBolsistaCard title={name}>
      <Flex justifyContent="space-between" direction="column" h={"90%"}>
        <Flex justify="center" align="center">
          {image ? (
            <AspectRatio ratio={1} w="150px" mb={4} className={S.__CardTeamImage}>
              <Image
                src={image}
                alt={name}
                fill
                className="h-full rounded-lg object-cover shadow-lg"
                sizes={"155px, 155px, 155px"}
              />
            </AspectRatio>
          ) : (
            <Box mb={4} className={`${S.__CardTeamImage} shadow-lg`}>
              <Avatar
                name={name}
                variant="beam"
                square={true}
                size={"150"}
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </Box>
          )}
        </Flex>
        <Flex direction="column" align="center" justify="center" h="100%">
          <Box fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
            {altText ?? "Bolsista"}
          </Box>
        </Flex>
      </Flex>
    </BaseBolsistaCard>
  )
}
