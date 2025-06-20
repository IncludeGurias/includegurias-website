import { Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { Reveal } from "components";
import { tagColors } from "utils/getTagColors";

interface MulherTagsProps {
  tags: string[];
}

const MulherTags = ({ tags }: MulherTagsProps) => {
  return (
    <Wrap py={4} display="flex" flexDirection="column" alignItems="center">
      {tags.map((tag, index) => (
        <WrapItem key={index}>
          <Reveal animationdirection="left" delay={0.1 * index}>
            <Badge
              size="lg"
              fontSize="md"
              colorScheme={tagColors[tag as keyof typeof tagColors] || "teal"}
            >
              {tag}
            </Badge>
          </Reveal>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default MulherTags;
