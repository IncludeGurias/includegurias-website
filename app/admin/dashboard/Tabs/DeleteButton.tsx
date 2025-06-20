"use client";
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { TbTrash } from "react-icons/tb";

const DeleteButton = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <IconButton
          colorScheme="red"
          aria-label="Delete"
          icon={<TbTrash />}
          w="100%"
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Tem certeza que deseja deletar?</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Stack direction="row" spacing={4} justifyContent="between">
              <Button colorScheme="blue">Cancelar</Button>
              <Button onClick={() => onDelete()} colorScheme="red">
                Sim, deletar
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DeleteButton;
