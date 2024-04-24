import { Card, CardBody, CardFooter, Heading } from "@chakra-ui/react"
import { VideoFrame } from "components"
import { VideoType } from "types/videoType"

const VideoFrameCarousel = ({ videoList }: { videoList: VideoType }) => {
  return (
    <Card
      key={videoList.title}
      size="lg"
      width="full"
      transition="all 0.3s ease-in-out"
      border="2px solid"
      borderColor="var(--primary-400)"
      borderRadius="md"
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <CardBody p={0} height="275px" overflow="hidden" borderTopRadius="md" w={"100%"}>
        <VideoFrame
          width="100%"
          height="250px"
          loading="lazy"
          embedId={videoList.video}
          title={videoList.title}
          allowFullScreen
        />
      </CardBody>
      <CardFooter bg={"var(--primary-400)"} borderBottomRadius="md" textAlign="center" h={100} p={2}>
        <Heading size="md" color={"white"} margin={"auto"}>
          {videoList.title}
        </Heading>
      </CardFooter>
    </Card>
  )
}

export default VideoFrameCarousel
