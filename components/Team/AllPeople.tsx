import { AspectRatio, Box, Flex, Grid, Popover, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react"
import Avatar from "boring-avatars"
import Image from "next/image"
import { Reveal } from "components"
import { ALL_TEAM_MEMBERS } from "data"
import { allMembersMemberType } from "types/teamMembers"

// This Component is used in the Team Section of the About Us Page to display all the team members from the past.

const AllPeople = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(6, 1fr)",
        lg: "repeat(8, 1fr)",
      }}
      gap={{ base: "2em", md: "4em" }}
      px={{ base: "1rem", md: "2rem" }}
      my={12}
    >
      {ALL_TEAM_MEMBERS.map((person: allMembersMemberType, index: number) => (
        <Reveal key={index} animationdirection="bottom" delay={0.05 * index}>
          <Popover trigger="hover" placement="top" closeDelay={150}>
            <PopoverTrigger>
              <Text
                fontSize="1rem"
                fontWeight="semibold"
                className="uppercase"
                textAlign="center"
                mb={2}
                color={"gray.800"}
                transition={"all 0.3s ease-in-out"}
                _hover={{ color: "gray.500" }}
              >
                {person.name.split(" ")[0] + " " + person.name.split(" ")[1]?.charAt(0) + "."}
              </Text>
            </PopoverTrigger>
            <PopoverContent
              bg="gray.800"
              color="white"
              borderColor="gray.800"
              borderWidth="1px"
              borderRadius="lg"
              width={{ base: "100%", md: "200px" }}
            >
              <Box p={5}>
                <Flex justify="center" align="center">
                  {person.image ? (
                    <AspectRatio ratio={1} w="100px" mb={4} borderRadius="full" className="border-2 border-rose-500">
                      <Image src={person.image} alt={person.name} fill className="h-full rounded-full object-cover" />
                    </AspectRatio>
                  ) : (
                    <Avatar
                      name={person.name}
                      variant="beam"
                      size={100}
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />
                  )}
                </Flex>
                <Text fontSize="sm" fontWeight="bold" textAlign="center" mt={2}>
                  {person.name}
                </Text>
                {person.role && (
                  <Text fontSize="sm" fontWeight="bold" textAlign="center">
                    {person.role}
                  </Text>
                )}
              </Box>
            </PopoverContent>
          </Popover>
        </Reveal>
      ))}
    </Grid>
  )
}

export default AllPeople
