"use client"
import { Box, IconButton, Tooltip } from "@chakra-ui/react"
import { Fade } from "@chakra-ui/transition"
import { useState } from "react"

import { IoAccessibilitySharp } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { TbTextColor, TbTextDecrease, TbTextIncrease } from "react-icons/tb"
import increaseFontSize from "utils/increaseFontSize"

const FloatButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const { colorMode, toggleColorMode } = useColorMode();
  // const { theme, setTheme } = useTheme();

  // const changeColorMode = () => {
  //   localStorage.removeItem("chakra-ui-color-mode");

  //   setTheme(theme === "light" ? "dark" : "light");
  //   toggleColorMode();
  // };

  const menuOptions = [
    {
      name: "Diminuir tamanho da fonte",
      icon: <TbTextDecrease size={25} />,
      action: () => increaseFontSize(-2),
    },
    {
      name: "Aumentar tamanho da fonte",
      icon: <TbTextIncrease size={25} />,
      action: () => increaseFontSize(2),
    },
    {
      name: "Resetar tamanho da fonte",
      icon: <TbTextColor size={27} />,
      action: () => window.location.reload(),
    },
  ]

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Box position="fixed" bottom="15px" right="15px" zIndex={99999}>
      <Tooltip label="Abrir menu de acessibilidade" aria-label="Abrir" placement="top">
        <IconButton
          visibility={!isMenuOpen ? "visible" : "hidden"}
          icon={<IoAccessibilitySharp size={25} />}
          onClick={openMenu}
          aria-label="Fechar"
          zIndex={9999}
          w={"50px"}
          h={"50px"}
          boxShadow={"xl"}
          border="1px solid rgba(0, 0, 0, 0.1)"
          _hover={{
            bg: "blue.100",
            color: "blue.500",
            transform: "scale(1.1)",
            border: "1px solid",
          }}
        />
      </Tooltip>

      <Fade in={isMenuOpen} style={{ zIndex: "auto" }}>
        <Box
          gap="4"
          position="fixed"
          display="flex"
          flexDirection="column-reverse"
          bottom="15"
          visibility={isMenuOpen ? "visible" : "hidden"}
          transition={"all 1s ease"}
          zIndex={"auto"}
        >
          <Tooltip label="Fechar" aria-label="Fechar" placement="left">
            <IconButton
              icon={<IoClose size={30} />}
              onClick={closeMenu}
              boxShadow={"xl"}
              w={"50px"}
              h={"50px"}
              border="1px solid rgba(0, 0, 0, 0.1)"
              aria-label="Fechar"
              _hover={{
                bg: "blue.100",
                color: "blue.500",
                transform: "scale(1.1)",
                border: "1px solid",
              }}
            />
          </Tooltip>
          {menuOptions.map((option, index) => (
            <Tooltip key={index} label={option.name} aria-label={option.name} placement="left">
              <IconButton
                w={"40px"}
                h={"40px"}
                ml={"5px"}
                icon={option.icon}
                aria-label={option.name}
                onClick={option.action}
                boxShadow={"xl"}
                border="1px solid rgba(0, 0, 0, 0.1)"
              />
            </Tooltip>
          ))}
        </Box>
      </Fade>
    </Box>
  )
}

export default FloatButton
