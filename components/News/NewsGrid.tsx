import { Box } from "@chakra-ui/react"
import { HeadingText, NewsCard } from "components"
import { NEWS } from "data"

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
      {NEWS.map((item, index) => (
        <NewsCard key={index} title={item.title} description={item.description} image={item.image} href={item.href} />
      ))}
    </Box>
  )
}

export default NewsGrid
