import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useState } from "react"
import { includeInfo } from "data"

interface Info {
  email: string
  phone: string
  coordinatorEmail: string
  address: string
  chatbotNumber: string
}

const Contato = () => {
  const [info, setInfo] = useState<Info>(includeInfo)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setInfo({ ...info, [field]: e.target.value })
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <h1>Contato</h1>
      <span className="block h-[0.5px] w-full bg-gray-400" />
      <FormControl pb={4} w="100%" borderBottom="1px solid" borderColor="blue.200">
        <FormLabel>Email do include</FormLabel>
        <Input
          value={info.email}
          onChange={(e) => handleInputChange(e, "email")}
          placeholder="Email"
          mb={2}
          type="email"
          variant="filled"
        />
        <Button colorScheme="blue">Salvar Contato</Button>
      </FormControl>

      <FormControl pb={4} w="100%" borderBottom="1px solid" borderColor="blue.200">
        <FormLabel>Telefone da Secretaria</FormLabel>
        <Input
          value={info.phone}
          onChange={(e) => handleInputChange(e, "telefone")}
          placeholder="Telefone"
          mb={2}
          variant="filled"
        />
        <Button colorScheme="blue">Salvar Telefone</Button>
      </FormControl>

      <FormControl pb={4} w="100%" borderBottom="1px solid" borderColor="blue.200">
        <FormLabel>Email da Coordenadora</FormLabel>
        <Input
          value={info.coordinatorEmail}
          onChange={(e) => handleInputChange(e, "coordinatorEmail")}
          placeholder="Email"
          mb={2}
          variant="filled"
        />
        <Button colorScheme="blue">Salvar Email</Button>
      </FormControl>

      <FormControl pb={4} w="100%" borderBottom="1px solid" borderColor="blue.200">
        <FormLabel>Endereço da Uergs</FormLabel>
        <Input
          value={info.address}
          onChange={(e) => handleInputChange(e, "address")}
          placeholder="Endereço"
          mb={2}
          variant="filled"
        />
        <Button colorScheme="blue">Salvar Endereço</Button>
      </FormControl>

      <FormControl pb={4} w="100%" borderBottom="1px solid" borderColor="blue.200">
        <FormLabel>Número do Chatbot</FormLabel>
        <Input
          value={info.chatbotNumber}
          onChange={(e) => handleInputChange(e, "chatbotNumber")}
          placeholder="Chatbot"
          mb={2}
          variant="filled"
        />
        <Button colorScheme="blue">Salvar Chatbot</Button>
      </FormControl>
    </Box>
  )
}

export default Contato
