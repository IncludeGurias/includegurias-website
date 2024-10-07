"use client"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus, TbTrash } from "react-icons/tb"
import { HeadingText } from "components"
import { INCLUDE_MATERIALS } from "data"
import { Material } from "types/data/material"

const Materiais = () => {
  const [IncludeMaterials, setIncludeMaterials] = useState<Material[]>(INCLUDE_MATERIALS)
  const [hasChanged, setHasChanged] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: string) => {
    setHasChanged(true)
    const updatedIncludeMaterials = [...IncludeMaterials]
    if (index < 0 || index >= updatedIncludeMaterials.length || !updatedIncludeMaterials[index]) return
    updatedIncludeMaterials[index][field] = e.target.value
    setIncludeMaterials(updatedIncludeMaterials)
  }

  const handleCheckboxChange = (index: number, field: string) => {
    setHasChanged(true)
    const updatedIncludeMaterials = [...IncludeMaterials]
    if (index < 0 || index >= updatedIncludeMaterials.length || !updatedIncludeMaterials[index]) return
    updatedIncludeMaterials[index][field] = !updatedIncludeMaterials[index][field]
    setIncludeMaterials(updatedIncludeMaterials)
  }

  const handleAddMaterial = () => {
    const newMaterial: Material = {
      title: "",
      href: "",
      description: "",
      imageURL: undefined,
      isNew: false,
    }
    setIncludeMaterials([...IncludeMaterials, newMaterial])
  }

  const handleDeleteMaterial = (index: number) => {
    const updatedIncludeMaterials = [...IncludeMaterials]
    updatedIncludeMaterials.splice(index, 1)
    setIncludeMaterials(updatedIncludeMaterials)
  }

  const handleSave = () => {
    alert("Materiais salvos com sucesso!")
    setHasChanged(false)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Materiais" />

      <Accordion border={"1px solid"} borderColor={"red.400"} borderRadius={"md"} allowToggle>
        {IncludeMaterials.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.title || "Novo Material"}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex" flexDirection="column" gap={2}>
              <p>Título do Material</p>
              <Input
                title="Título do Material"
                value={item.title}
                onChange={(e) => handleInputChange(e, index, "title")}
                placeholder="Título"
                mb={2}
                variant="filled"
              />
              <h2>Link que o Material redireciona</h2>
              <Input
                value={item.href}
                onChange={(e) => handleInputChange(e, index, "href")}
                placeholder="Link"
                mb={2}
                variant="filled"
              />
              <p>Descrição do Material</p>
              <Textarea
                value={item.description}
                onChange={(e) => handleInputChange(e, index, "description")}
                placeholder="Descrição"
                mb={2}
                variant="filled"
              />
              <p>Imagem do Material</p>
              <Input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                      const updatedIncludeMaterials = [...IncludeMaterials]
                      if (index < 0 || index >= updatedIncludeMaterials.length || !updatedIncludeMaterials[index])
                        return
                      updatedIncludeMaterials[index].imageURL = e.target?.result as string
                      setIncludeMaterials(updatedIncludeMaterials)
                    }
                    reader.readAsDataURL(e.target.files[0])
                  }
                }}
                placeholder="Imagem"
                mb={2}
                display={"flex"}
                alignItems={"center"}
                variant="filled"
              />
              <div>
                <Switch
                  colorScheme="blue"
                  size="lg"
                  isChecked={item.isNew}
                  onChange={() => handleCheckboxChange(index, "isNew")}
                >
                  Marcar como Novo?
                </Switch>
              </div>
              <Popover placement="right">
                <PopoverTrigger>
                  <IconButton colorScheme="red" aria-label="Delete" icon={<TbTrash />} />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Tem certeza que deseja deletar?</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Stack direction="row" spacing={4} justifyContent="between">
                        <Button colorScheme="blue">Cancelar</Button>
                        <Button onClick={() => handleDeleteMaterial(index)} colorScheme="red">
                          Deletar Material
                        </Button>
                      </Stack>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />} onClick={handleAddMaterial}>
          Adicionar Material
        </Button>
        <Button colorScheme="blue" rightIcon={<BiSave />} disabled={!hasChanged} onClick={() => handleSave()}>
          Salvar Materiais
        </Button>
      </Stack>
    </Box>
  )
}

export default Materiais
