import { HeadingText } from "components"
import NewsCard from "components/Cards/NewsCard"
import NewsArray from "data/News"
import { Box } from "@chakra-ui/react"
const NewsGrid = () => {
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
      {NewsArray.map((item, index) => (
        <NewsCard key={index} title={item.title} description={item.description} image={item.image} href={item.href} />
      ))}
    </Box>
  )
}

export default NewsGrid
