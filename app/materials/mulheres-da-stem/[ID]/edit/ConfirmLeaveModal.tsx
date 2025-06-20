"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import IconCircleButton from "../IconCircleButton";

function ConfirmModal({ url }: { url: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconCircleButton
        icon={<BiArrowBack />}
        bgColor="red.100"
        tooltip="Voltar"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Você tem certeza que deseja sair?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Todas as alterações serão perdidas!</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Não
            </Button>
            <Link href={url} passHref>
              <Button colorScheme="green" variant="solid" onClick={onClose}>
                Sim
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;
