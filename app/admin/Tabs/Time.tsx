import { Box, Button, Divider, Input, Table, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import React, { ChangeEvent, useState } from "react"
import { HeadingText } from "components"
import { CURRENT_BOLSISTAS, CURRENT_TEAM_MEMBERS, FOUNDER } from "data"

const Time = () => {
  const [time, setTime] = useState(CURRENT_TEAM_MEMBERS)
  const [bolsistas, setBolsistas] = useState(CURRENT_BOLSISTAS)
  const [founder, setFounder] = useState(FOUNDER)

  const handleFounderChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFounder({ ...founder, [field]: e.target.value })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedTime = [...time]
    updatedTime[index][field] = e.target.value
    setTime(updatedTime)
  }

  const handleBolsistaChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedBolsistas = [...bolsistas]
    updatedBolsistas[index][field] = e.target.value
    setBolsistas(updatedBolsistas)
  }

  const handleSave = () => {
    console.log("Time:", time)
    console.log("Bolsistas:", bolsistas)
    console.log("Founder:", founder)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Fundador" />

      <Divider />
      <Input placeholder="Nome" mb={2} value={founder.name} onChange={(e) => handleFounderChange(e, "name")} />
      <Input placeholder="Cargo" mb={2} value={founder.role} onChange={(e) => handleFounderChange(e, "role")} />
      <Button colorScheme="blue" onClick={handleSave}>
        Salvar Fundador
      </Button>

      <h1>Time</h1>
      <Divider />
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Cargo</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {time.map((member, index) => (
            <Tr key={index}>
              <Td>
                <Input
                  placeholder="Nome"
                  mb={2}
                  value={member.name}
                  onChange={(e) => handleInputChange(e, index, "name")}
                />
              </Td>
              <Td>
                <Input
                  placeholder="Cargo"
                  mb={2}
                  value={member.role}
                  onChange={(e) => handleInputChange(e, index, "role")}
                />
              </Td>
              <Td>
                <Button colorScheme="red">Remover</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button colorScheme="blue">Salvar Time</Button>

      <h1>Bolsistas</h1>
      <Divider />
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Imagem</Th>
            <Th>AltText</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bolsistas.map((bolsista, index) => (
            <Tr key={index}>
              <Td>
                <Input
                  placeholder="Nome"
                  mb={2}
                  value={bolsista.name}
                  onChange={(e) => handleBolsistaChange(e, index, "name")}
                />
              </Td>

              <Td>
                <Image src={bolsista.image} alt={bolsista.name} boxSize="50px" />
              </Td>
              <Td>
                <Tooltip label="Texto alternativo da imagem">
                  <Input
                    placeholder="AltText"
                    mb={2}
                    value={bolsista.altText}
                    onChange={(e) => handleBolsistaChange(e, index, "altText")}
                  />
                </Tooltip>
              </Td>
              <Td>
                <Button colorScheme="red">Remover</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Button colorScheme="blue">Salvar Bolsistas</Button>
    </Box>
  )
}

export default Time
