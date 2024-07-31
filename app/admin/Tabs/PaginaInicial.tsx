"use client"
import { Box, Button, FormControl, FormLabel, IconButton, Input, Stack, Textarea } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus, TbTrash } from "react-icons/tb"
import { MAIN_PAGE_VIDEO_LIST, TESTIMONIALS } from "data"
import { TestimonialType } from "types/TestimonialType"

const Divider = (text: string) => (
  <div className="flex w-full flex-col">
    <h2 className="w-fit rounded-t-md  bg-gray-100 p-2 text-lg font-semibold">{text}</h2>
    <span className="block h-1 w-full rounded-b-md bg-gray-100" />
  </div>
)

const PaginaInicial = () => {
  const [videos, setVideos] = useState(MAIN_PAGE_VIDEO_LIST)
  const [testimonials, setTestimonials] = useState<TestimonialType[]>(TESTIMONIALS)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, type: string) => {
    const newVideos = [...videos]
    newVideos[index][type] = e.target.value
    setVideos(newVideos)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <h1>Página Inicial</h1>
      <span className="block h-[0.5px] w-full bg-gray-400" />

      {Divider("Vídeos")}
      {MAIN_PAGE_VIDEO_LIST.map((item, index) => (
        <FormControl key={index} display="flex" gap={2} alignItems="center" justifyContent="center">
          <div style={{ width: "100%" }}>
            <FormLabel>Título</FormLabel>
            <Input
              value={item.title}
              onChange={(e) => handleInputChange(e, index, "title")}
              placeholder="Título"
              mb={2}
              variant="filled"
            />
          </div>
          <div style={{ width: "100%" }}>
            <FormLabel>Embed do Vídeo</FormLabel>
            <Input
              value={item.video}
              onChange={(e) => handleInputChange(e, index, "video")}
              placeholder="Vídeo"
              mb={2}
              variant="filled"
            />
          </div>
          <IconButton colorScheme="red" aria-label="Delete" icon={<TbTrash />} />
        </FormControl>
      ))}
      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />}>
          Adicionar Vídeo
        </Button>
        <Button colorScheme="blue" rightIcon={<BiSave />}>
          Salvar Página Inicial
        </Button>
      </Stack>
      {Divider("Testemunhos")}
      {TESTIMONIALS.map((item: TestimonialType, index: number) => (
        <FormControl
          key={index}
          gap={2}
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
          p={2}
        >
          <FormLabel>Nome</FormLabel>
          <Input
            value={item.name}
            onChange={(e) => handleInputChange(e, index, "name")}
            placeholder="Nome"
            variant="filled"
          />
          <FormLabel>sublegend</FormLabel>
          <Input
            value={item.sublegend}
            onChange={(e) => handleInputChange(e, index, "sublegend")}
            placeholder="sublegend"
            mb={2}
            variant="filled"
          />
          <FormLabel>sublegendHref</FormLabel>
          <Input
            value={item.sublegendHref}
            onChange={(e) => handleInputChange(e, index, "sublegendHref")}
            placeholder="sublegendHref"
            mb={2}
            variant="filled"
          />

          <FormLabel>Testemunho</FormLabel>
          <Textarea
            value={item.testimonial}
            onChange={(e) => handleInputChange(e, index, "testimonial")}
            placeholder="Testemunho"
            rows={4}
            h="auto"
            variant="filled"
          />

          <IconButton colorScheme="red" aria-label="Delete" icon={<TbTrash />} width="100%" />
        </FormControl>
      ))}
      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />}>
          Adicionar Testemunho
        </Button>
        <Button colorScheme="blue" rightIcon={<BiSave />}>
          Salvar Página Inicial
        </Button>
      </Stack>
    </Box>
  )
}

export default PaginaInicial
