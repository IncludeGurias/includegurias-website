"use client"
import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { tagColors } from "utils/getTagColors"

interface TagSelectProps {
  tags: string[] | null
  selectedTags: string[]
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagSelect = ({ tags, selectedTags, setSelectedTags }: TagSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  if (!tags) {
    return <Text>Nenhuma tag encontrada</Text>
  }

  const handleSelectChange = (value: any) => {
    console.log(value)
    setSelectedTags([...selectedTags, value])
    setIsOpen(false) // Close popover after selection
  }

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter((item) => item !== tag))
  }

  return (
    <>
      <Popover isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <Button variant="outline">Selecionar Tags</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <Stack spacing={2}>
              <Select placeholder="Selecione uma tag" onChange={(e) => handleSelectChange(e.target.value)}>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Select>
              {selectedTags.length > 0 && (
                <Flex wrap="wrap" dir={"col"}>
                  <Text mb={2} fontWeight="bold">
                    Tags selecionadas:
                  </Text>
                  {selectedTags.map((tag) => (
                    <Tag
                      key={tag}
                      colorScheme={tagColors[tag as keyof typeof tagColors] || "teal"}
                      size="sm"
                      mr={2}
                      mb={2}
                    >
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleTagRemove(tag)} />
                    </Tag>
                  ))}
                </Flex>
              )}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {selectedTags.length > 0 && (
        <Flex wrap="wrap" dir="col" border="2px" borderColor="gray.200" p={4} mt={4}>
          <Text mb={4} fontWeight="bold" w="full">
            Tags selecionadas:
          </Text>
          <Stack direction="row" wrap="wrap">
            {selectedTags.map((tag) => (
              <Tag key={tag} colorScheme={tagColors[tag as keyof typeof tagColors] || "teal"} size="sm" mr={2} mb={2}>
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton onClick={() => handleTagRemove(tag)} />
              </Tag>
            ))}
          </Stack>
        </Flex>
      )}
    </>
  )
}

export default TagSelect
