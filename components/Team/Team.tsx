"use client"
import { Grid } from "@chakra-ui/react"
import { TeamCard } from "components"
import { CURRENT_TEAM_MEMBERS, FOUNDER } from "data"
import { TeamMemberType } from "types/teamMembers"

export const TeamForAboutUs = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
      gap={{ base: "2em", md: "4em" }}
      my={12}
    >
      <>
        <TeamCard name={FOUNDER.name} image={FOUNDER.image} role={FOUNDER.role} href={FOUNDER.href} />
        {CURRENT_TEAM_MEMBERS.map((teamMember: TeamMemberType, index: number) => (
          <TeamCard
            key={index}
            name={teamMember.name}
            image={teamMember.image}
            role={teamMember.role}
            href={teamMember.href ?? "#"}
          />
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
