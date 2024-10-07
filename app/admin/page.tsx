"use client"
import { Box, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import useAuthStore from "./authStore"
import Dashboard from "./Dashboard"
import LoginForm from "./LoginForm"

const App = () => {
  const { user } = useAuthStore()
  useEffect(() => {
    console.log("User:", user?.name || "Guest")
  }, [user])

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      minHeight="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      {user ? (
        <Dashboard />
      ) : (
        <Box minW={{ base: "90%", md: "468px" }}>
          <LoginForm />
        </Box>
      )}
    </Flex>
  )
}

export default App
