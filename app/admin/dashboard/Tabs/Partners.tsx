"use client"
import { Box, Button, Input, Spinner, Stack, Switch, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { TbPlus } from "react-icons/tb"
import { usePartnersStore } from "app/states"
import { HeadingText } from "components"
import Partner from "types/data/partner"
import DeleteButton from "./DeleteButton"

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([])
  const [hasChanged, setHasChanged] = useState(false)
  const { getPartners, updatePartners, partnersLoading } = usePartnersStore((state) => ({
    getPartners: state.getPartners,
    updatePartners: state.updatePartners,
    partnersLoading: state.partnersLoading,
  }))

  useEffect(() => {
    getPartners().then((data) => setPartners(data))
  }, [getPartners])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof Partner
  ) => {
    try {
      if (index < 0 || index >= partners.length || !partners[index]) return
      ;(partners[index][field] as string) = e.target.value
      setHasChanged(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddPartner = () => {
    const newPartner: Partner = {
      name: "Novo Parceiro",
      imageUrl: "#",
      href: "#",
      active: false,
    }
    setPartners([...partners, newPartner])
    setHasChanged(true)
  }

  const handleDeletePartner = (index: number) => {
    const updatedPartners = [...partners]
    updatedPartners.splice(index, 1)
    setPartners(updatedPartners)
    setHasChanged(true)
  }

  const handleSwitchChange = (index: number) => {
    try {
      if (index < 0 || index >= partners.length || !partners[index]) return
      partners[index].active = !partners[index].active
      setPartners([...partners])
      setHasChanged(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSavePartners = async () => {
    partners.forEach((item) => {
      if (!item.name) {
        alert("Nome do parceiro não pode ser vazio!")
        return
      }
      if (!item.href) {
        alert("URL do parceiro não pode ser vazio!")
        return
      }
    })
    await updatePartners(partners).then(() => {
      alert("Parceiros salvos com sucesso!")
    })
    setHasChanged(false)
  }

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Todos os Parceiros" />
      {partnersLoading ? (
        <Spinner />
      ) : (
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>URL</Th>
              <Th>Image</Th>
              <Th>Ativo</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {partners.map((partner, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    placeholder="Nome do parceiro"
                    mb={2}
                    defaultValue={partner.name}
                    onChange={(e) => handleInputChange(e, index, "name")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Link de redirecionamento"
                    mb={2}
                    defaultValue={partner.href}
                    onChange={(e) => handleInputChange(e, index, "href")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="URL da imagem"
                    mb={2}
                    defaultValue={partner.imageUrl}
                    onChange={(e) => handleInputChange(e, index, "imageUrl")}
                  />
                </Td>
                <Td>
                  <Switch isChecked={partner.active} onChange={() => handleSwitchChange(index)} />
                </Td>
                <Td>
                  <DeleteButton onDelete={() => handleDeletePartner(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4}>
        <Button variant={"outline"} leftIcon={<TbPlus />} onClick={handleAddPartner} isDisabled={partnersLoading}>
          Adicionar Parceiro
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleSavePartners}
          isDisabled={!hasChanged || partnersLoading}
          isLoading={partnersLoading}
        >
          Salvar Parceiros
        </Button>
      </Stack>
    </Box>
  )
}

export default Partners
