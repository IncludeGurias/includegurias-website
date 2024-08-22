"use client"
import { Box, Flex, Stack } from "@chakra-ui/react"
import LoginForm from "./LoginForm"
import useAuthStore from "./authStore"
import { useEffect } from "react"
import Dashboard from "./Dashboard"
import "./login.css"

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
