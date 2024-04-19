"use client"
import { AspectRatio, Avatar, Box, Card, CardFooter, Flex, Heading, Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { createElement } from "react"
import { Reveal, SocialButton } from "components"
import getIcon from "utils/getSocialMediaIcon"
import { contactLinks } from "utils/includeLinks"

type SocialMediaCardProps = {
  text: string
  avatarImage: StaticImageData
  name: string
  subname: string
  socialMedia: string
  postImage: StaticImageData
  className?: string
  delay?: number
}

const SocialMediaCard = ({
  text,
  avatarImage,
  name,
  subname,
  socialMedia,
  postImage,
  className,
  delay,
}: SocialMediaCardProps) => {
  const icon = getIcon(socialMedia)

  return (
    <Reveal animationdirection="bottom" delay={delay || 0.01}>
      <Card
        maxW="sm"
        maxH="xl"
        borderRadius="xl"
        boxShadow="md"
        justifyContent={"space-between"}
        className={`group ${className}`}
        transition={"all 0.2s ease-in-out"}
        _hover={{
          transform: "scale(1.05)",
          shadow: "xl",
        }}
      >
        <AspectRatio ratio={20 / 20} className="w-full overflow-hidden rounded-t-xl">
          <Image
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={postImage}
            alt={name}
            height={400}
            quality={75}
            priority
          />
        </AspectRatio>

        <CardFooter justify="space-between" flexWrap="wrap">
          <Text id="text" fontSize="sm" color="gray.500" noOfLines={4}>
            {text}
          </Text>
          <div
            // href={contactLinks[socialMedia as keyof typeof contactLinks]}
            onClick={() => {
              window.open(contactLinks[socialMedia as keyof typeof contactLinks], "_blank")
            }}
            className="h-full w-full"
          >
            <Flex
              flex="1"
              gap="4"
              justifyContent="space-between"
              mt={3}
              w="full"
              transition={"all 0.2s ease-in-out"}
              px={4}
              _groupHover={{
                paddingLeft: "1",
                paddingRight: "1",
              }}
            >
              <Avatar name={name} src={avatarImage.src} />
              <Box w={"full"} display="flex" flexDirection="column" alignItems="start" justifyContent="center">
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
                tooltipCustomLabel={`Follow us on ${socialMedia}`}
              >
                {icon && createElement(icon, { color: "white", size: 25 })}
              </SocialButton>
            </Flex>
          </div>
        </CardFooter>
      </Card>
    </Reveal>
  )
}

export default SocialMediaCard
