"use client"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus } from "react-icons/tb"
import { useMaterialsStore } from "app/states"
import { HeadingText } from "components"
import Material from "types/data/material"
import DeleteButton from "./DeleteButton"

const Materiais = () => {
  const [hasChanged, setHasChanged] = useState(false)
  const [IncludeMaterials, setIncludeMaterials] = useState<Material[]>([])

  const { loading, getMaterials, updateMaterials } = useMaterialsStore((state) => ({
    loading: state.materials_loading,
    getMaterials: state.getMaterials,
    updateMaterials: state.updateMaterials,
  }))

  useEffect(() => {
    getMaterials().then((data) => {
      if (data) {
        setIncludeMaterials(data)
      }
    })
  }, [getMaterials])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    type: keyof Material
  ) => {
    if (index < 0 || index >= IncludeMaterials.length || !IncludeMaterials[index]) {
      return
    }

    setIncludeMaterials((prevMaterials) =>
      prevMaterials.map((material, i) => (i === index ? { ...material, [type]: e.target.value } : material))
    )
    setHasChanged(true)
  }

  const handleSwitchChange = (index: number) => {
    try {
      if (index < 0 || index >= IncludeMaterials.length || !IncludeMaterials[index]) return
      setIncludeMaterials((prevMaterials) => {
        return prevMaterials.map((material, i) =>
          i === index ? { ...material, isNew: material.isNew ? false : true } : material
        )
      })
      setHasChanged(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddMaterial = () => {
    const newMaterial: Material = {
      title: "Sem título",
      href: "",
      description: "",
      imageUrl: "#",
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
    updateMaterials(IncludeMaterials).then(() => {
      setHasChanged(false)
      alert("Materiais salvos com sucesso!")
    })
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Materiais" />
      {loading && <Spinner />}
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
              <FormControl alignItems="center">
                <FormLabel htmlFor="title" mb="0">
                  Título do Material
                </FormLabel>
                <Input
                  title="Título do Material"
                  defaultValue={item.title}
                  onChange={(e) => handleInputChange(e, index, "title")}
                  placeholder="Título"
                  mb={2}
                  variant="filled"
                />
              </FormControl>
              <FormControl alignItems="center">
                <FormLabel htmlFor="href" mb="0">
                  Link que o Material redireciona
                </FormLabel>
                <Input
                  defaultValue={item.href}
                  onChange={(e) => handleInputChange(e, index, "href")}
                  placeholder="Link"
                  mb={2}
                  variant="filled"
                />
              </FormControl>
              <FormControl alignItems="center">
                <FormLabel htmlFor="description" mb="0">
                  Descrição do Material
                </FormLabel>
                <Textarea
                  defaultValue={item.description}
                  onChange={(e) => handleInputChange(e, index, "description")}
                  placeholder="Descrição"
                  mb={2}
                  variant="filled"
                />
              </FormControl>
              <FormControl alignItems="center">
                <FormLabel htmlFor="imageUrl" mb="0">
                  URL da Imagem
                </FormLabel>
                <Input
                  defaultValue={item.imageUrl}
                  onChange={(e) => handleInputChange(e, index, "imageUrl")}
                  placeholder="URL da Imagem"
                  mb={2}
                  display={"flex"}
                  alignItems={"center"}
                  variant="filled"
                />
              </FormControl>
              <FormControl alignItems="center">
                <FormLabel htmlFor="isNew" mb="0">
                  Marcar como Novo?
                </FormLabel>
                <Switch
                  colorScheme="blue"
                  size="lg"
                  isChecked={item.isNew}
                  onChange={() => handleSwitchChange(index)}
                  alignItems="center"
                  display="flex"
                >
                  {item.isNew ? "Sim" : "Não"}
                </Switch>
              </FormControl>
              <DeleteButton onDelete={() => handleDeleteMaterial(index)} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />} onClick={handleAddMaterial} isDisabled={loading}>
          Adicionar Material
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          isDisabled={!hasChanged}
          onClick={() => handleSave()}
          isLoading={loading}
        >
          Salvar Materiais
        </Button>
      </Stack>
    </Box>
  )
}

export default Materiais
