"use client"
import {
  Button,
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import { FaEye, FaEyeSlash, FaLock, FaUserAlt } from "react-icons/fa"
import useAuthStore from "./authStore"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  const { user, email, password, setEmail, setPassword, login } = useAuthStore()
  const toast = useToast()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await login()
      console.log("User:", user?.name)
      if (user)
        toast({
          title: `Login successful: ${user.name}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
    } catch (error: any) {
      toast({
        title: `Login failed.`,
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" borderRadius="md">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CFaUserAlt color="gray.300" />
            </InputLeftElement>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color="gray.300" />
            </InputLeftElement>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button size="sm" onClick={handleShowClick} h="1.75rem" variant="unstyled">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* Theres no need for a password recovery mechanism 
          <FormHelperText textAlign="right">
            <Link color="teal.500">Esqueceu a senha?</Link>
          </FormHelperText>*/}
        </FormControl>
        <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
          Login
        </Button>
      </Stack>
    </form>
  )
}

export default FormLogin
