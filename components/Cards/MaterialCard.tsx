"use client"
import { AspectRatio, Badge, Box, Button, Flex } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export type MaterialCardProps = {
  title: string
  description: string
  isNew?: boolean
  imageURL: StaticImageData
  href: string
  delay: number
}

const MaterialCard = ({ title, description, isNew, imageURL, href }: MaterialCardProps) => {
  return (
    <Link href={href} className="flex h-full w-full items-center justify-center">
      <Box
        bg={"red.400"}
        maxW="sm"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="lg"
        h="full"
        shadow="lg"
        position="relative"
        transition={"all 0.3s ease"}
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-5px) scale(1.01)",
        }}
      >
        <AspectRatio ratio={16 / 12} display={{ base: "none", md: "block" }} h="300px" w="400">
          <Image
            src={imageURL}
            fill
            sizes="400 300"
            alt={`Picture of ${title}`}
            style={{ borderRadius: "12px 12px 0 0" }}
          />
        </AspectRatio>
        <Box p="6" h="full">
          <Box display="flex" alignItems="baseline" justifyContent="space-between">
            <Flex h="20px">
              {isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Flex>
          </Box>
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Box>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="md" color={"gray.800"}>
              {description}
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent="center" alignContent="center" my="4">
          <Button
            colorScheme="primary"
            variant="outline"
            size="sm"
            rightIcon={<FiArrowRight />}
            color="white"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
          >
            Saiba mais
          </Button>
        </Flex>
      </Box>
    </Link>
  )
}

export default MaterialCard
