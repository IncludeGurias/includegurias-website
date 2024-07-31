import { Input, Button, Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { ALL_PARTNERS, CURRENT_PARTNERS } from "data"
import { useState } from "react"

const Partners = () => {
  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <h1>Todos os Parceiros</h1>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>URL</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ALL_PARTNERS.map((partner, index) => (
            <Tr key={index}>
              <Td>
                <Input placeholder="Nome" mb={2} value={partner.name} />
              </Td>
              <Td>
                <Input placeholder="URL" mb={2} value={partner.url} />
              </Td>
              <Td>
                <Button colorScheme="red">Remover</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button colorScheme="blue">Salvar Parceiros</Button>

      <h1>Parceiros Atuais</h1>

      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>URL</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {CURRENT_PARTNERS.map((partner, index) => (
            <Tr key={index}>
              <Td>
                <Input placeholder="Nome" mb={2} value={partner.name} />
              </Td>
              <Td>
                <Input placeholder="URL" mb={2} value={partner.url} />
              </Td>
              <Td>
                <Button colorScheme="red">Remover</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Button colorScheme="blue">Salvar Parceiros</Button>
    </Box>
  )
}

export default Partners
