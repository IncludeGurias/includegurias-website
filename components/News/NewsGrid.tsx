"use client"
import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNewsStore } from "app/states"
import { HeadingText, NewsCard } from "components"

const NewsGrid = () => {
  const { getNews, news } = useNewsStore((state) => ({
    getNews: state.getNews,
    news: state.news,
  }))

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <Box
      p={4}
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap={4}
      minH="600px"
      className="section"
    >
      <HeadingText text="Notícias" align="start" />
      {news.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          text={item.text}
          imageUrl={item.imageUrl}
          href={item.href}
          date={item.date}
          showInTimeline={item.showInTimeline}
        />
      ))}
    </Box>
  )
}

export default NewsGrid
