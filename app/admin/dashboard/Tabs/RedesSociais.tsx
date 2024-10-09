"use client"
import { Box, Button, Input, Spinner, Stack, Table } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus } from "react-icons/tb"
import { useIncludeInfoStore, useSocialMediaStore } from "app/states"
import { HeadingText } from "components"
import IncludeInfo from "types/data/includeInfo"
import SocialMediaType from "types/data/socialMedia"
import DeleteButton from "./DeleteButton"

const RedesSociais = () => {
  const [SocialMedia, setSocialMedia] = useState<SocialMediaType[]>([])
  const [hasSocialMediaChanged, setHasSocialMediaChanged] = useState(false)

  const { getSocialMedia, updateSocialMedia, socialMediaLoading } = useSocialMediaStore((state) => ({
    getSocialMedia: state.getSocialMedia,
    updateSocialMedia: state.updateSocialMedia,
    socialMediaLoading: state.socialMediaLoading,
  }))

  useEffect(() => {
    getSocialMedia().then((data) => setSocialMedia(data))
  }, [getSocialMedia])

  const handleSocialMediaChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof SocialMediaType
  ) => {
    try {
      if (index < 0 || index >= SocialMedia.length || !SocialMedia[index]) return
      setSocialMedia((prev) =>
        prev.map((socialMedia, i) => (i === index ? { ...socialMedia, [field]: e.target.value } : socialMedia))
      )
      setHasSocialMediaChanged(true)
    } catch (error) {
      alert("Erro ao alterar rede social")
      console.error(error)
    }
  }

  const handleAddSocialMedia = () => {
    setHasSocialMediaChanged(true)
    const newSocialMedia: SocialMediaType = {
      name: "Nova Rede Social",
      href: "#",
    }
    setSocialMedia([...SocialMedia, newSocialMedia])
  }

  const handleDeleteSocialMedia = (index: number) => {
    setHasSocialMediaChanged(true)
    const updatedSocialMedia = [...SocialMedia]
    updatedSocialMedia.splice(index, 1)
    setSocialMedia(updatedSocialMedia)
  }

  const handleSaveSocialMedia = () => {
    SocialMedia.forEach((item) => {
      if (!item.name) {
        alert("Nome da rede social não pode ser vazio!")
        return
      }
      if (!item.href) {
        alert("Link da rede social não pode ser vazio!")
        return
      }
    })
    updateSocialMedia(SocialMedia).then(() => {
      alert("Redes sociais salvas com sucesso!")
    })
    setHasSocialMediaChanged(false)
  }

  const [Info, setInfo] = useState<IncludeInfo[]>([])
  const [hasInfoChanged, setHasInfoChanged] = useState(false)

  const { getIncludeInfo, updateIncludeInfo, includeInfoLoading } = useIncludeInfoStore((state) => ({
    getIncludeInfo: state.getIncludeInfo,
    updateIncludeInfo: state.updateIncludeInfo,
    includeInfoLoading: state.includeInfoLoading,
  }))

  useEffect(() => {
    getIncludeInfo().then((data) => setInfo(data))
  }, [getIncludeInfo])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof IncludeInfo
  ) => {
    try {
      if (index < 0 || index >= Info.length || !Info[index]) return
      setInfo((prev) => prev.map((info, i) => (i === index ? { ...info, [field]: e.target.value } : info)))
      setHasInfoChanged(true)
    } catch (error) {
      alert("Erro ao alterar informação")
      console.error(error)
    }
  }

  const handleAddInfo = () => {
    const newInfo: IncludeInfo = {
      name: "Nova Informação",
      value: "",
    }
    setInfo([...Info, newInfo])
  }

  const handleDeleteInfo = (index: number) => {
    const updatedInfo = [...Info]
    updatedInfo.splice(index, 1)
    setInfo(updatedInfo)
    setHasInfoChanged(true)
  }

  const handleSaveInfo = () => {
    updateIncludeInfo(Info).then(() => {
      alert("Informações salvas com sucesso!")
    })
    setHasInfoChanged(false)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Redes Sociais" />
      {socialMediaLoading ? (
        <Spinner />
      ) : (
        <Table variant="simple">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Href</th>
              <th className="w-16">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {SocialMedia.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    defaultValue={item.name}
                    onChange={(e) => handleSocialMediaChange(e, index, "name")}
                    placeholder="Título"
                    variant="filled"
                  />
                </td>
                <td>
                  <Input
                    defaultValue={item.href}
                    onChange={(e) => handleSocialMediaChange(e, index, "href")}
                    placeholder="Embed do Vídeo"
                    variant="filled"
                  />
                </td>
                <td className="flex w-full justify-center">
                  <DeleteButton onDelete={() => handleDeleteSocialMedia(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4} justifyContent="between" mt={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleAddSocialMedia}
          isDisabled={socialMediaLoading}
        >
          Adicionar Rede Social
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleSaveSocialMedia}
          isDisabled={!hasSocialMediaChanged || socialMediaLoading}
          isLoading={socialMediaLoading}
        >
          Salvar Redes Sociais
        </Button>
      </Stack>

      <HeadingText align="left" text="Informações do Include" />
      {includeInfoLoading ? (
        <Spinner />
      ) : (
        <Table variant="simple">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th className="w-16">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {Info.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    defaultValue={item.name}
                    onChange={(e) => handleInputChange(e, index, "name")}
                    placeholder="Nome"
                    variant="filled"
                  />
                </td>
                <td>
                  <Input
                    defaultValue={item.value}
                    onChange={(e) => handleInputChange(e, index, "value")}
                    placeholder="Valor"
                    variant="filled"
                  />
                </td>
                <td className="flex w-full justify-center">
                  <DeleteButton onDelete={() => handleDeleteInfo(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4} justifyContent="between" mt={4}>
        <Button variant={"outline"} leftIcon={<TbPlus />} onClick={handleAddInfo} isDisabled={includeInfoLoading}>
          Adicionar Informação
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleSaveInfo}
          isDisabled={!hasInfoChanged || includeInfoLoading}
          isLoading={includeInfoLoading}
        >
          Salvar Informações
        </Button>
      </Stack>
    </Box>
  )
}

export default RedesSociais
