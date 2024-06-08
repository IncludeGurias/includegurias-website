"use client"
import { Box, Flex, Grid } from "@chakra-ui/react"
import { useState } from "react"
import { BolsistaCard } from "components"
import { CURRENT_BOLSISTAS } from "data"
import { BolsistaType } from "types/teamMembers"

const Bolsistas = () => {
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: "2em", md: "3em" }} my={12}>
      <>
        {CURRENT_BOLSISTAS.map((teamMember: BolsistaType, index: number) => (
          <BolsistaCard key={index} {...teamMember} />
        ))}
      </>
    </Grid>
  )
}

const BolsistasSection = () => {
  const [noBolsistas, _] = useState(false)
  return (
    <Box p={4} className="section">
      {noBolsistas ? (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Não há bolsistas cadastrados no momento.
          </Box>
        </Flex>
      ) : (
        <Bolsistas />
      )}
    </Box>
  )
}

export default BolsistasSection
