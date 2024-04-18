"use client"
import { Heading, Text } from "@chakra-ui/react"
import { Reveal } from "components"

interface classNames {
  text?: string
  span?: string
}

interface HeadingProps {
  align?: "left" | "center" | "right" | "justify" | "initial" | "inherit" | "unset" | "start"
  text: string
  classNames?: classNames
  color?: string
}

export const HeadinText = ({ align, classNames, text, color }: HeadingProps) => {
  return (
    <Reveal animationdirection="left">
      <Heading
        fontSize={{ base: "3xl", lg: "5xl" }}
        as={"h1"}
        textAlign={align || "center"}
        my={4}
        id="text"
        textShadow={"3px 3px 5px rgba(0,0,0,0.2)"}
        display={"flex"}
        fontWeight={"bold"}
        className={`bree-serif ${classNames && classNames.text}`}
        justifyContent={align || "center"}
        color={color ? color : "primary.400"}
      >
        {text}
      </Heading>
      <div
        className={`my-4 h-2 w-24 border-4 border-rose-400 ${
          align == "center" || align == undefined ? "mx-auto" : "mr-4"
        } ${classNames && classNames.span}`}
      />
    </Reveal>
  )
}

export const SubHeadingText = ({ text, align, classNames }: HeadingProps) => {
  return (
    <Reveal animationdirection="left">
      <Heading
        fontSize={{ base: "xl" }}
        textAlign={align || "center"}
        my={2}
        id="text"
        as={"h2"}
        display={"flex"}
        fontWeight={"bold"}
        className={`uppercase ${classNames && classNames.text}`}
        justifyContent={align || "center"}
        color={"gray.800"}
      >
        {text}
      </Heading>
      <div
        className={`mb-4 mt-2 h-1 w-24 border-2 border-rose-500 ${
          align == "center" || align == undefined ? "mx-auto" : "mr-4"
        }`}
      />
    </Reveal>
  )
}

export const SubText = ({ align, classNames, text }: HeadingProps) => {
  return (
    <Reveal animationdirection="left">
      <Text
        id="text"
        mt={2}
        mb={6}
        as={"h3"}
        fontSize={{ base: "1.25rem", md: "1.35rem" }}
        fontWeight={200}
        color={"gray.800"}
        className={`${classNames && classNames.text}`}
        textAlign={align || "center"}
      >
        {text}
      </Text>
    </Reveal>
  )
}

export const MegaTitle = ({ align, classNames, text }: HeadingProps) => {
  return (
    <Reveal animationdirection="left" className="flex justify-center">
      <Heading
        fontSize={{ base: "4xl", md: "8xl" }}
        fontWeight="bold"
        textAlign={align || "center"}
        alignSelf="flex-start"
        as={"h1"}
        m={8}
        color={"white"}
        zIndex={2}
        className={`bree-serif ${classNames && classNames.text}`}
      >
        {text}
      </Heading>
    </Reveal>
  )
}
