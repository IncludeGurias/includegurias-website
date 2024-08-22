"use client"
import { Box, Button, IconButton, Input, Stack } from "@chakra-ui/react"
import { INCLUDE_MATERIALS } from "data"
import { useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus, TbTrash } from "react-icons/tb"
import { SocialMediaData, SocialMediaType } from "utils/socialMedia"

const Materiais = () => {
  const [IncludeMaterials, setIncludeMaterials] = useState<SocialMediaType[]>(INCLUDE_MATERIALS)

  const handleInputChange = (e, index, field) => {
    const updatedIncludeMaterials = [...IncludeMaterials]
    updatedIncludeMaterials[index][field] = e.target.value
    setIncludeMaterials(updatedIncludeMaterials)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <h1>Materiais</h1>

      {INCLUDE_MATERIALS.map((item, index) => (
        <Box key={index} display="flex" gap={2}>
          <Input
            value={item.title}
            onChange={(e) => handleInputChange(e, index, "title")}
            placeholder="Título"
            mb={2}
            variant="filled"
          />
          <Input
            value={item.link}
            onChange={(e) => handleInputChange(e, index, "link")}
            placeholder="Link"
            mb={2}
            variant="filled"
          />
          <IconButton colorScheme="red" aria-label="Delete" icon={<TbTrash />} />
        </Box>
      ))}
      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />}>
          Adicionar Material
        </Button>
        <Button colorScheme="blue" rightIcon={<BiSave />}>
          Salvar Materiais
        </Button>
      </Stack>
    </Box>
  )
}

export default Materiais
