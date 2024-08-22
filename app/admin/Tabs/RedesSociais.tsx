"use client"
import { Box, Button, IconButton, Input, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus, TbTrash } from "react-icons/tb"
import { SocialMediaData, SocialMediaType } from "utils/socialMedia"

const RedesSociais = () => {
  const [SocialMedia, setSocialMedia] = useState<SocialMediaType[]>(SocialMediaData)

  const handleInputChange = (e, index, field) => {
    const updatedSocialMedia = [...SocialMedia]
    updatedSocialMedia[index][field] = e.target.value
    setSocialMedia(updatedSocialMedia)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <h1>Redes Sociais</h1>

      {SocialMedia.map((item: SocialMediaType, index) => (
        <Box key={index} display="flex" gap={2}>
          <Input
            value={item.name}
            onChange={(e) => handleInputChange(e, index, "name")}
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
          Adicionar Rede Social
        </Button>
        <Button colorScheme="blue" rightIcon={<BiSave />}>
          Salvar Redes Sociais
        </Button>
      </Stack>
    </Box>
  )
}

export default RedesSociais
