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
} from "@chakra-ui/react"
import { useNewsStore } from "app/states"
import { HeadingText } from "components"
import { ChangeEvent, useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus } from "react-icons/tb"
import News from "types/data/news"
import DeleteButton from "./DeleteButton"

const Noticias = () => {
  const [noticias, setNoticias] = useState<News[]>([])
  const [hasChanged, setHasChanged] = useState(false)
  const { getNews, updateNews, newsLoading } = useNewsStore((state) => ({
    getNews: state.getNews,
    updateNews: state.updateNews,
    newsLoading: state.newsLoading,
  }))

  useEffect(() => {
    getNews().then((news) => {
      setNoticias(news)
    })
  }, [getNews])

  const handleAddNews = () => {
    setHasChanged(true)
    const newNews: News = {
      title: "Sem título",
      text: "Sem descrição",
      imageUrl: "",
      href: "",
      date: new Date().toLocaleDateString("pt-BR"),
      showInTimeline: false,
    }
    setNoticias((prev) => [...prev, newNews])
  }

  const handleDeleteNews = (index: number) => {
    setHasChanged(true)
    setNoticias((prev) => {
      const updatedNoticias = [...prev]
      updatedNoticias.splice(index, 1)
      return updatedNoticias
    })
  }

  const handleSave = () => {
    updateNews(noticias).then(() => {
      alert("Materiais salvos com sucesso!")
    })
    setHasChanged(false)
  }

  const handleNewsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    type: keyof News
  ) => {
    try {
      if (index < 0 || index >= noticias.length || !noticias[index]) return
      ;(noticias[index][type] as string) = e.target.value
      setHasChanged(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSwitchChange = (index: number) => {
    try {
      if (index < 0 || index >= noticias.length || !noticias[index]) return
      noticias[index].showInTimeline = !noticias[index].showInTimeline || false
      setNoticias([...noticias])
      setHasChanged(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Notícias" />
      {newsLoading ? (
        <Spinner />
      ) : (
        <Accordion border={"1px solid"} borderColor={"red.400"} borderRadius={"md"} allowToggle>
          {noticias.map((noticia, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {noticia.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Título</FormLabel>
                    <Input
                      defaultValue={noticia.title}
                      onChange={(e) => handleNewsChange(e, index, "title")}
                      placeholder="Título"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Descrição</FormLabel>
                    <Input
                      defaultValue={noticia.text}
                      onChange={(e) => handleNewsChange(e, index, "text")}
                      placeholder="Descrição"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Imagem</FormLabel>
                    <Input
                      defaultValue={noticia.imageUrl || ""}
                      onChange={(e) => handleNewsChange(e, index, "imageUrl")}
                      placeholder="URL da imagem"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>URL</FormLabel>
                    <Input
                      defaultValue={noticia.href || "#"}
                      onChange={(e) => handleNewsChange(e, index, "href")}
                      placeholder="URL da notícia"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Data</FormLabel>
                    <Input
                      defaultValue={noticia.date}
                      onChange={(e) => handleNewsChange(e, index, "date")}
                      placeholder="Data"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Exibir na timeline</FormLabel>
                    <Switch defaultChecked={noticia.showInTimeline} onChange={(e) => handleSwitchChange(index)} />
                  </FormControl>
                  <DeleteButton
                    onDelete={() => {
                      handleDeleteNews(index)
                    }}
                  />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <Stack direction="row" spacing={4} justifyContent="between">
        <Button variant={"outline"} leftIcon={<TbPlus />} onClick={() => handleAddNews()} isDisabled={newsLoading}>
          Adicionar Notícia
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          isDisabled={!hasChanged || newsLoading}
          onClick={() => handleSave()}
          isLoading={newsLoading}
        >
          Salvar Notícias
        </Button>
      </Stack>
    </Box>
  )
}

export default Noticias
