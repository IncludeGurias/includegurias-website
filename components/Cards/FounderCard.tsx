"use client";
import { AspectRatio, Box, Divider, Text } from "@chakra-ui/react";
import { Reveal } from "components";
import Image from "next/image";
import { CounterMap } from "public";
import { useState } from "react";
import { TeamMember } from "types/data/team";
import getPlaceholderImageIfNone from "utils/getPlaceholderImageIfNone";

interface FounderCardType extends TeamMember {
  text: string;
}

const FounderCard = ({ name, job, imageUrl, text }: FounderCardType) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      position="relative"
      borderRadius="lg"
      w={950}
      display="flex"
      mt={8}
      height={500}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Reveal
        animationdirection="none"
        className="z-0"
      >
        <Image
          src={CounterMap}
          alt="Contour Line"
          className={`fill-red absolute right-0 top-0 z-0 -translate-x-3 -translate-y-0 object-cover${
            isHovered ? "translate-x-0 translate-y-0" : "translate-x-3 translate-y-0"
          } transition-transform duration-300`}
          style={{
            filter: "brightness(0.5)",
          }}
        />
      </Reveal>
      <Reveal
        className="flex"
        delay={0.1}
      >
        <AspectRatio
          ratio={1}
          maxW="500px"
          className="z-10 size-full"
        >
          <Image
            src={getPlaceholderImageIfNone(imageUrl, 400, 300)}
            alt={name}
            fill
            className="z-10 rounded-l-lg object-cover"
          />
        </AspectRatio>
        <Box
          p={4}
          className="size-full bg-red-300"
          zIndex={10}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          shadow={isHovered ? "xl" : "md"}
          borderTopRightRadius={"lg"}
          borderBottomRightRadius={"lg"}
        >
          <Text
            fontSize="1.25rem"
            fontWeight="bold"
            mb={2}
            color={"gray.800"}
          >
            {text}
          </Text>
          <Divider />
          <Text
            fontSize="0.85rem"
            lineHeight="1.3"
            fontWeight="bold"
            letterSpacing="-0.1px"
            color="gray.200"
            className="text-bold text-center uppercase"
          >
            {name}, {job}
          </Text>
        </Box>
      </Reveal>
    </Box>
  );
};

export default FounderCard;
