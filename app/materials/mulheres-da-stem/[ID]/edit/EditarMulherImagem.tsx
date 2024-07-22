"use client"
import {
  AspectRatio,
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import Image from "next/image"
import { BiEdit } from "react-icons/bi"
import { Reveal } from "components"

const EditarMulherImagem = ({ womanImageItem }: { womanImageItem: string | null }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const handleEditClick = () => {
    onOpen() // Open modal on edit icon click
    // Implement logic for image editing here (e.g., redirect to image upload page)
    toast({
      title: "Ainda não disponível",
      status: "info",
      duration: 3000,
    })
  }

  return (
    <>
      <Flex
        className="group"
        w={"full"}
        h={"full"}
        direction={"column"}
        alignItems="center"
        maxW={500}
        pos={"relative"}
        rounded={"3xl"}
      >
        {/* Overlay */}
        <Box
          className="overlay absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-30"
          cursor="pointer"
          onClick={handleEditClick}
        />
        {/* Image */}
        <AspectRatio
          ratio={1 / 1}
          w={{ base: "full", md: 500 }}
          h={{ base: 450, md: 698 }}
          pointerEvents={"none"}
          className="z-0 rounded-3xl transition duration-300 ease-in-out"
        >
          {womanImageItem ? (
            <Reveal>
              <Image
                src={womanImageItem}
                alt={womanImageItem}
                sizes={"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
                priority
                fill
                className="z-auto h-full rounded-xl"
              />
            </Reveal>
          ) : (
            <Text>Sem Imagem</Text>
          )}
        </AspectRatio>
        {/* Edit icon */}
        <Box
          pointerEvents={"none"}
          position="absolute"
          top="50%"
          right="50%"
          opacity={0}
          transform="translate(50%, -50%)"
          transition="opacity 0.3s ease-in-out"
          _groupHover={{ opacity: 1 }}
          zIndex={9999}
          display="flex"
          gap={2}
          alignItems="center"
        >
          <Text className="text-lg font-bold text-white">Mudar Imagem</Text>
          <BiEdit size={50} color="white" />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mudar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>A funcionalidade de edição de imagem ainda não está disponível.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditarMulherImagem
