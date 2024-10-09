"use client"
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNewsStore } from "app/states"
import { HeadingText, NewsCard, Reveal, SeeMoreArrow } from "components"

const NewsSection = () => {
  const { getNews, news } = useNewsStore((state) => ({
    getNews: state.getNews,
    news: state.news,
  }))

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center" minH="600px" className="section">
      <Flex direction="column" alignItems="center" w="full" gap={4} my={8}>
        <HeadingText text="Últimas Notícias" align="center" />
        <Reveal animationdirection="left" delay={0.3}>
          <div className="mb-6 text-center text-xl font-light text-gray-700">
            Fique por dentro de tudo que acontece no <strong>#Include</strong>!
          </div>
        </Reveal>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          column={{ base: 1, md: 3 }}
          rowGap={4}
          row={{ base: 1, md: 1 }}
          gap={4}
          w="full"
        >
          {news.slice(0, 3).map((item, index) => (
            <GridItem key={index} w="full" className={index !== 0 ? "GridItem" : ""}>
              <Reveal animationdirection="bottom" delay={0.1} className="flex h-full w-full justify-between">
                <NewsCard {...item} />
              </Reveal>
            </GridItem>
          ))}
        </Grid>
        <div className="mt-6 text-center text-xl font-light text-gray-700">
          <SeeMoreArrow
            text="Ver todas as notícias"
            href="/news"
            classNames={{
              text: "text-blue-500 hover:underline",
              animatedArrow: "text-blue-500",
            }}
          />
        </div>
      </Flex>
    </Box>
  )
}

export default NewsSection
