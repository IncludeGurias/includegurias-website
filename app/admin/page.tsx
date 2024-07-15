"use client"
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaEye, FaEyeSlash, FaLock, FaUserAlt } from "react-icons/fa"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const App = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" borderRadius="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input type={showPassword ? "text" : "password"} placeholder="Senha" />
                  <InputRightElement>
                    <Button size="sm" onClick={handleShowClick} h="1.75rem" variant="unstyled">
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="teal.500">Esqueceu a senha?</Link>
                </FormHelperText>
              </FormControl>
              <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default App
