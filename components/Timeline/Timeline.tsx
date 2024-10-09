"use client"
import {
  Box,
  chakra,
  Container,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useNewsStore } from "app/states"
import { SeeMoreArrow } from "components"
import { ConfettiDark } from "public"
import News from "types/data/news"

const Timeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const isDesktop = useBreakpointValue({ base: false, md: true })

  const { getNews, news } = useNewsStore((state) => ({
    getNews: state.getNews,
    news: state.news,
  }))

  useEffect(() => {
    getNews()
  }, [getNews])

  const TIMELINE_DATA = news
    .filter((item) => item.showInTimeline === true)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return (
    <Container
      maxWidth="7xl"
      p={{ base: 2, sm: 10 }}
      css={{
        backgroundImage: ConfettiDark,
        backgroundAttachment: "fixed",
      }}
    >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Linha do Tempo do #Include
      </chakra.h3>
      {TIMELINE_DATA.map((milestone: News, index) => (
        <Flex key={index} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && (index + 1) % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card index={index} {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card index={index} {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && (index + 1) % 2 !== 0 && (
            <>
              <Card index={index} {...milestone} />
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  )
}

interface CardProps extends News {
  index: number
}

const Card = ({ index, date, title, text, href }: CardProps) => {
  const formattedDate = new Date(date).toLocaleDateString()

  const isEvenId = index % 2 === 0
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px"
  let leftValue = isEvenId ? "-15px" : "unset"
  let rightValue = isEvenId ? "unset" : "-15px"

  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    leftValue = "-15px"
    rightValue = "unset"
    borderWidthValue = "15px 15px 15px 0"
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("red.200", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue("#FEB2B2", "#1a202c")} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontWeight={"700"} fontSize="lg" color={"white"}>
          {formattedDate}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{text}</Text>
        </VStack>
        {href && <SeeMoreArrow text="Saiba mais" href={href} />}
      </Box>
    </HStack>
  )
}

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr={{ base: "40px", md: "40px" }} ml={{ base: "0", md: "40px" }}>
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("red.100", "red.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  )
}

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>
}

export default Timeline
