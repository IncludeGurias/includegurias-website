"use client";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import { useIncludeInfoStore, useSocialMediaStore } from "app/states";
import { HeadingText, PrimaryButton, SocialButton } from "components";
import { ConfettiLight } from "public";
import getSocialmediaIcon from "utils/getSocialMediaIcon";

export default function ContactForm() {
  const { getSocialMedia, socialMedia } = useSocialMediaStore((state) => ({
    getSocialMedia: state.getSocialMedia,
    socialMedia: state.socialMedia,
  }));

  useEffect(() => {
    getSocialMedia();
  }, [getSocialMedia]);

  const { getIncludeInfo, includeInfo } = useIncludeInfoStore((state) => ({
    getIncludeInfo: state.getIncludeInfo,
    includeInfo: state.includeInfo,
  }));

  useEffect(() => {
    getIncludeInfo();
  }, [getIncludeInfo]);

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundImage: ConfettiLight,
        backgroundAttachment: "fixed",
      }}
      id="contact"
      pt={100}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <HeadingText text="Entre em contato conosco!" color="primary.300" />

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
              w={"100%"}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                {socialMedia.map((socialMedia) => (
                  <div
                    className="flex w-full items-center justify-start gap-2"
                    key={socialMedia.name}
                  >
                    <SocialButton
                      size={50}
                      label={socialMedia.name}
                      href={socialMedia.href}
                      animation="rotateHover"
                      circle={true}
                    >
                      {getSocialmediaIcon({
                        socialMedia: socialMedia.name,
                        props: { size: 30, color: "white" },
                      })}
                    </SocialButton>
                    <span className="hidden text-lg font-semibold md:block">
                      {socialMedia.name === "Chatbot"
                        ? "Whatsapp"
                        : socialMedia.name}
                    </span>
                  </div>
                ))}
              </Stack>
              <Box
                bg={"white"}
                borderRadius="lg"
                p={10}
                color={"text.700"}
                shadow="base"
                w={{ base: "100%", md: 450 }}
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>

                    <InputGroup>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                      />
                      <InputRightElement>
                        <BsPerson />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputRightElement>
                        <MdOutlineEmail />
                      </InputRightElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <FaRegMessage />
                      </InputRightElement>
                      <Textarea
                        name="message"
                        placeholder="Digite sua mensagem"
                        rows={6}
                        resize="none"
                      />
                    </InputGroup>
                  </FormControl>
                  <PrimaryButton
                    classNames={{ icon: "top-[30%]" }}
                    icon={<FiSend />}
                  >
                    Enviar
                  </PrimaryButton>
                </VStack>
              </Box>
            </Stack>
            {/* Adicionar informações de contato */}
            <Box
              bg={"white"}
              borderRadius="lg"
              p={5}
              w="100%"
              color={"text.700"}
              shadow="base"
            >
              <VStack spacing={3}>
                {includeInfo.map((info) => (
                  <Flex align="center" key={info.name}>
                    {info.name === "Localização" ? (
                      <MdLocationOn />
                    ) : info.name === "Telefone" ? (
                      <MdPhone />
                    ) : null}
                    <span className="ml-2">
                      <strong>{info.name}: </strong>
                      {info.value}
                    </span>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
