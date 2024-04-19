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
} from "@chakra-ui/react"
import { Metadata } from "next"
import { createElement } from "react"
import { BsPerson } from "react-icons/bs"
import { FaRegMessage } from "react-icons/fa6"
import { FiSend } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { HeadingText, PrimaryButton, SocialButton } from "components"
import { ConfettiDark } from "public"
import baseMetadata from "utils/metadata"
import { SocialMediaData } from "utils/socialMedia"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Contato - Include Gurias",
  description: "Entre em contato com a equipe do Include Gurias!",
}

export default function ContactForm() {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundImage: ConfettiDark,
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <HeadingText text="Entre em contato conosco!" color="primary.300" />

            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
              <Stack align="center" justify="space-around" direction={{ base: "row", md: "column" }}>
                {SocialMediaData.map((socialMedia) => (
                  <SocialButton
                    key={socialMedia.name}
                    size={50}
                    label={socialMedia.name}
                    href={socialMedia.link}
                    animation="rotateHover"
                    circle={true}
                  >
                    {createElement(socialMedia.icon, {
                      size: 20,
                      color: "white",
                    })}
                  </SocialButton>
                ))}
              </Stack>
              <Box bg={"white"} borderRadius="lg" p={10} w={450} color={"text.700"} shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>

                    <InputGroup>
                      <Input type="text" name="name" placeholder="Digite seu nome" />
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
                      <Input type="email" name="email" placeholder="Digite seu email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <InputGroup>
                      <InputRightElement>
                        <FaRegMessage />
                      </InputRightElement>
                      <Textarea name="message" placeholder="Digite sua mensagem" rows={6} resize="none" />
                    </InputGroup>
                  </FormControl>
                  <PrimaryButton classNames={{ icon: "top-[30%]" }} icon={<FiSend />}>
                    Enviar
                  </PrimaryButton>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
