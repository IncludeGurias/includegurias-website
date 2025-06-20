import { Card, CardBody, CardFooter, Heading } from "@chakra-ui/react";
import { VideoFrame } from "components";
import VideoType from "types/data/video";

const VideoFrameCarousel = ({ video }: { video: VideoType }) => {
  return (
    <Card
      key={video.title}
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
      <CardBody
        p={0}
        height="275px"
        overflow="hidden"
        borderTopRadius="md"
        w={"100%"}
      >
        <VideoFrame
          width="100%"
          height="250px"
          loading="lazy"
          embedId={video.videoUrl.replace("https://www.youtube.com/embed/", "")}
          title={video.title}
          allowFullScreen
        />
      </CardBody>
      <CardFooter
        bg={"var(--primary-400)"}
        borderBottomRadius="md"
        textAlign="center"
        h={100}
        p={2}
      >
        <Heading size="md" color={"white"} margin={"auto"}>
          {video.title}
        </Heading>
      </CardFooter>
    </Card>
  );
};

export default VideoFrameCarousel;
