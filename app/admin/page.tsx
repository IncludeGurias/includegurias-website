import { Box, Flex } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

export default function Admin() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      minHeight="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW={{ base: "90%", md: "468px" }}>
        <LoginForm />
      </Box>
    </Flex>
  );
}
