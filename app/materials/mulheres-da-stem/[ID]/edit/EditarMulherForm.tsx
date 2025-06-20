"use client";
import {
  Button,
  ButtonGroup,
  Flex,
  FocusLock,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSave } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { PrimaryButton } from "components";
import { womanType } from "types/woman";
import { formatYYYYMMDD } from "utils/dateFunctions";
import Tags from "./Tags";

const EditarMulherForm = ({
  data,
  allTags,
}: {
  data: womanType;
  allTags: string[] | null;
}) => {
  // const [loading, setLoading] = useState<boolean>(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>(data.tags ?? []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
    getFieldState,
    setFocus,
    resetField,
  } = useForm<womanType>({
    defaultValues: {
      birthDate: formatYYYYMMDD(data.birthDate),
      name: data.name,
      birthPlace: data.birthPlace,
      job: data.job,
    },
  });

  function onSubmit(values: any) {
    const womanData = { ...values, tags: selectedTags };
    console.log(womanData);
  }

  function handleReset(id: keyof womanType) {
    // setValue(id, data[id])
    setFocus(id);
    resetField(id);
    console.log(getFieldState(id).isDirty);
  }

  const FormItem = ({
    id,
    label,
    error,
    children,
  }: {
    id: string;
    label: string;
    error: any;
    children: any;
  }) => {
    return (
      <FormControl isInvalid={error}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {children}

        <FormErrorMessage>{error && error.message}</FormErrorMessage>
        <Flex w="full" justifyContent="flex-end">
          <Button
            variant="link"
            colorScheme="red"
            size="sm"
            onClick={() => handleReset(id as keyof womanType)}
            _disabled={{ cursor: "not-allowed", color: "gray.400" }}
          >
            Limpar mudanças
          </Button>
        </Flex>
      </FormControl>
    );
  };

  const PopConfirm = ({
    onCancel,
    encodedName,
  }: {
    onCancel: () => void;
    encodedName: string;
  }) => {
    return (
      <Stack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Tem certeza que deseja sair sem salvar?
        </Text>
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Link passHref href={`/materials/mulheres-da-stem/${encodedName}`}>
            <Button variant="outline">Sim</Button>
          </Link>
          <Button
            variant="solid"
            className="cursor-pointer overflow-hidden font-medium shadow-md"
            onClick={onCancel}
          >
            Não
          </Button>
        </ButtonGroup>
      </Stack>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form fields with error handling and validation */}
        <FormItem id="name" label="Nome" error={errors.name}>
          <Input
            id="name"
            placeholder="Nome"
            {...register("name", {
              required: "This is required",
              minLength: { value: 2, message: "Minimum length should be 4" },
            })}
            defaultValue={data.name}
          />
        </FormItem>

        <FormItem
          id="birthPlace"
          label="Local de Nascimento"
          error={errors.birthPlace}
        >
          <Input
            id="birthPlace"
            placeholder="Local de Nascimento"
            {...register("birthPlace", {
              required: "This is required",
              minLength: { value: 2, message: "Minimum length should be 2" },
            })}
          />
        </FormItem>

        <FormItem id="job" label="Profissão" error={errors.job}>
          <Input
            id="job"
            placeholder="Profissão"
            defaultValue={data.job}
            {...register("job", {})}
          />
        </FormItem>

        <FormItem
          id="birthDate"
          label="Data de Nascimento"
          error={errors.birthDate}
        >
          <Input
            placeholder="2000-01-01"
            id="birthDate"
            type="date"
            defaultValue={data.birthDate}
            {...register("birthDate", {})}
          />
        </FormItem>

        <FormItem id="bio" label="Biografia" error={errors.bio}>
          <Textarea
            id="bio"
            defaultValue={data.bio}
            placeholder="Biografia"
            minHeight={200}
            {...register("bio", {
              required: "This is required",
              minLength: { value: 10, message: "Minimum length should be 10" },
            })}
          />
        </FormItem>
        <FormControl>
          <FormLabel htmlFor={"tags"}>Tags</FormLabel>
          <Tags
            tags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />

          <Flex w="full" justifyContent="flex-end">
            <Button
              variant="link"
              colorScheme="red"
              size="sm"
              onClick={() => setSelectedTags(data.tags as string[])}
              _disabled={{ cursor: "not-allowed", color: "gray.400" }}
            >
              Limpar mudanças
            </Button>
          </Flex>
        </FormControl>

        <Flex mt={4} justifyItems="center" gap={8} alignItems="center" w="full">
          <Popover
            trigger="click"
            placement="top"
            closeOnEsc={true}
            isOpen={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
          >
            <PopoverTrigger>
              <Button
                w={"275px"}
                h={"52px"}
                type="button"
                className="cursor-pointer overflow-hidden font-medium shadow-md"
                fontSize={"lg"}
                px={6}
                py={3}
                rounded={"md"}
                leftIcon={<MdOutlineCancel />}
                onClick={() => setIsPopoverOpen(true)}
                ml={4}
              >
                Cancel
              </Button>
            </PopoverTrigger>
            <PopoverContent p={5}>
              <FocusLock persistentFocus={false}>
                <PopConfirm
                  onCancel={() => setIsPopoverOpen(false)}
                  encodedName={encodeURIComponent(data.name)}
                />
                <PopoverCloseButton />
              </FocusLock>
            </PopoverContent>
          </Popover>
          <PrimaryButton
            type="submit"
            disabled={!isDirty || isSubmitting}
            icon={<BiSave size={25} />}
          >
            Salvar
          </PrimaryButton>
        </Flex>
      </form>
    </>
  );
};

export default EditarMulherForm;
