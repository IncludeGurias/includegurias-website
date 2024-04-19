"use client"
import { Grid } from "@chakra-ui/react"
import { TeamCard } from "components"
import { CURRENT_TEAM_MEMBERS } from "data"
import { FounderImage } from "public"
import { TeamMemberType } from "types/teamMembers"

export const TeamForAboutUs = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={{ base: "2em", md: "4em" }}
      px={{ base: "1rem", md: "2rem" }}
      my={12}
    >
      <>
        <TeamCard name="Profª. Drª Fabrícia Damando Santos" image={FounderImage} role="Founder" />
        {CURRENT_TEAM_MEMBERS.map((teamMember: TeamMemberType, index: number) => (
          <TeamCard key={index} name={teamMember.name} image={teamMember.image} role={teamMember.role} />
        ))}
      </>
    </Grid>
  )
}

export const TeamWithNoFounder = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap={{ base: "2em", md: "4em" }}
      px={{ base: "1rem", md: "2rem" }}
      my={12}
    >
      {CURRENT_TEAM_MEMBERS.map((teamMember: TeamMemberType, index: number) => (
        <TeamCard key={index} name={teamMember.name} image={teamMember.image} role={teamMember.role} />
      ))}
    </Grid>
  )
}
