import { Box, Card, Grid, Text } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "types/News"

const NewsCard = ({ title, description, image, href, date }: NewsItem) => {
  const formattedDate = date ? new Date(date).toLocaleDateString() : date

  return (
    <Card
      rounded="lg"
      shadow="base"
      className="relative w-full transition-shadow duration-300 ease-in-out"
      _hover={{ shadow: "md" }}
    >
      {/* Grid agora com uma única coluna e a imagem acima do texto */}
      <Grid templateColumns="1fr" gap={0}>
        {/* Área da imagem agora com largura total */}
        <Box position="relative" overflow="hidden" w="full" h="200px">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-t-lg object-cover"
              sizes={"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
              h="full"
              bg="gray.200" // Cor de fundo placeholder
              className="rounded-t-lg"
            >
              <Text fontSize="xl" fontWeight="bold">
                Sem imagem
              </Text>
            </Box>
          )}
        </Box>
        {/* Área do texto agora ajustada para ocupar a largura total */}
        <Box p={4} w="full">
          <Text id="text" fontSize="lg" fontWeight="bold" mb={2}>
            {title}
          </Text>
          <Text id="text" fontSize="md" color="gray.500" mb={6}>
            {description}
          </Text>
          {href && (
            <div className="absolute bottom-0 left-0 p-2 text-gray-700">
              <Link href={href} className="text-blue-500 hover:underline">
                Leia mais
              </Link>
            </div>
          )}
          <div className="absolute bottom-0 right-0 p-2 text-gray-700">{formattedDate}</div>
        </Box>
      </Grid>
    </Card>
  )
}

export default NewsCard
