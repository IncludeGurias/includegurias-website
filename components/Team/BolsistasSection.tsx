"use client";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useScholarshipMembersStore } from "app/states";
import { BolsistaCard } from "components";
import { ScholarshipMember } from "types/data/team";

const Bolsistas = ({ bolsistas }: { bolsistas: ScholarshipMember[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(4, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      alignItems="center"
      gap={{ base: "2em", md: "4em" }}
      my={12}
    >
      <>
        {bolsistas.map((teamMember: ScholarshipMember, index: number) => (
          <BolsistaCard key={index} {...teamMember} />
        ))}
      </>
    </Grid>
  );
};

const BolsistasSection = () => {
  const [bolsistas] = useScholarshipMembersStore((state) => [
    state.scholarshipMembers,
  ]);
  const { getScholarshipMembers } = useScholarshipMembersStore((state) => ({
    getScholarshipMembers: state.getScholarshipMembers,
  }));

  useEffect(() => {
    getScholarshipMembers();
  }, [getScholarshipMembers]);

  return (
    <Box className="section">
      {bolsistas.length === 0 ? (
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            Não há bolsistas cadastrados no momento.
          </Box>
        </Flex>
      ) : (
        <Bolsistas bolsistas={bolsistas} />
      )}
    </Box>
  );
};

export default BolsistasSection;
