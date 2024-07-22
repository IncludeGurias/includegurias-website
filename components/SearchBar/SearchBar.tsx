"use client"
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { useState } from "react"
import { BiFilterAlt, BiSearch } from "react-icons/bi"
import { IoAdd, IoClose } from "react-icons/io5"
import { tagColors } from "utils/getTagColors"

interface SearchBarProps {
  tags: string[]
  selectedTags: string[]
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ tags, selectedTags, setSelectedTags, searchValue, setSearchValue }: SearchBarProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <InputGroup borderRadius={5} size="sm" maxW={600} zIndex={25} bg={"white"} boxShadow={"md"}>
      <InputLeftElement pointerEvents="none">
        <BiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Pesquisar mulheres da STEM..."
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
      />
      <InputRightAddon p={0} border="none">
        <Popover
          isOpen={isEditing}
          onOpen={() => setIsEditing(true)}
          onClose={() => setIsEditing(false)}
          closeOnEsc={true}
          closeOnBlur={true}
          isLazy
          lazyBehavior="keepMounted"
        >
          <HStack>
            <PopoverTrigger>
              <Button h="40px" colorScheme="pink">
                {isEditing ? <IoClose /> : <BiFilterAlt />}
              </Button>
            </PopoverTrigger>
          </HStack>

          <PopoverContent zIndex={10}>
            <PopoverBody>
              Tags
              <Wrap my={4}>
                {tags.length > 0 ? (
                  <>
                    {tags.map((tag, index) => (
                      <WrapItem
                        key={index}
                        transition={"all ease 0.5s"}
                        _hover={{
                          cursor: "pointer",
                          bg: "gray.200",
                          color: "gray.800",
                          transform: "scale(1.05)",
                        }}
                        _active={{
                          bg: "gray.200",
                          color: "gray.800",
                          transform: "scale(0.95) !important",
                        }}
                      >
                        <Tag
                          colorScheme={tagColors[tag as keyof typeof tagColors] || "teal"}
                          border={selectedTags.indexOf(tag) !== -1 ? "2px" : "0px"}
                          borderColor={"red"}
                          onClick={() => {
                            if (selectedTags.indexOf(tag) === -1) {
                              setSelectedTags([...selectedTags, tag])
                            } else {
                              setSelectedTags(selectedTags.filter((item) => item !== tag))
                            }
                          }}
                        >
                          <TagLabel>{tag}</TagLabel>
                          {selectedTags.indexOf(tag) !== -1 ? <TagCloseButton /> : <IoAdd className="ml-2" />}
                        </Tag>
                      </WrapItem>
                    ))}
                  </>
                ) : (
                  <>
                    <Spinner size="lg" alignSelf={"center"} />
                  </>
                )}
              </Wrap>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </InputRightAddon>
    </InputGroup>
  )
}

export default SearchBar
