"use client";
import {
  AspectRatio,
  Box,
  Card,
  CardFooter,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Reveal, SocialButton } from "components";
import AvatarInclude from "components/IncludeAvatar";
import Image from "next/image";
import SocialMediaPost from "types/data/socialMediaPost";
import getPlaceholderImageIfNone from "utils/getPlaceholderImageIfNone";
import getSocialmediaIcon from "utils/getSocialMediaIcon";
import { contactLinks } from "utils/includeLinks";

interface classNames {
  reveal?: string;
  card?: string;
}

interface SocialMediaCardProps extends SocialMediaPost {
  classNames?: classNames;
  delay?: number;
}

const SocialMediaCard = ({
  classNames,
  delay,
  text,
  name,
  subname,
  imageUrl,
  socialMedia,
}: SocialMediaCardProps) => {
  return (
    <Reveal
      animationdirection="bottom"
      delay={delay || 0.01}
      className={`flex justify-center ${classNames?.reveal}`}
    >
      <Card
        maxW="sm"
        maxH="xl"
        borderRadius="xl"
        boxShadow="md"
        justifyContent={"space-between"}
        className={`group ${classNames?.card}`}
        transition={"all 0.2s ease-in-out"}
        _hover={{
          transform: "scale(1.05)",
          shadow: "xl",
        }}
      >
        <AspectRatio
          ratio={20 / 20}
          className="w-full overflow-hidden rounded-t-xl"
        >
          <Image
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={getPlaceholderImageIfNone(imageUrl, 400, 300)}
            alt={name}
            height={400}
            width={300}
            quality={75}
            loading="lazy"
          />
        </AspectRatio>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          alignItems={"center"}
          p={4}
        >
          <Text id="text" fontSize="sm" color="gray.500" noOfLines={4}>
            {text}
          </Text>
          <div
            onClick={() => {
              window.open(
                contactLinks[socialMedia as keyof typeof contactLinks],
                "_blank"
              );
            }}
            className="size-full"
          >
            <Flex
              flex="1"
              gap="4"
              justifyContent="space-between"
              mt={3}
              w="full"
              transition={"all 0.2s ease-in-out"}
              alignItems={"center"}
              px={4}
              _groupHover={{
                paddingLeft: "1",
                paddingRight: "1",
              }}
            >
              <AvatarInclude name={name} />
              <Box
                w={"full"}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
              >
                <Heading size="sm">{name}</Heading>
                <Text color="gray.500" fontSize="xs">
                  {subname}
                </Text>
              </Box>
              <SocialButton
                size={50}
                label={socialMedia}
                href={contactLinks[socialMedia as keyof typeof contactLinks]}
                animation="scale(1.1)"
                circle={true}
                tooltipCustomLabel={`Siga a gente no ${socialMedia}`}
              >
                {getSocialmediaIcon({
                  socialMedia: socialMedia,
                  props: { size: 30 },
                })}
              </SocialButton>
            </Flex>
          </div>
        </CardFooter>
      </Card>
    </Reveal>
  );
};

export default SocialMediaCard;
