/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import TextStyle from "./TextStyle";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-bree-serif)",
    body: "var(--font-raleway)",
  },
  colors: {
    primary: {
      50: "#FFEBEE", // Vermelho claro
      100: "#FFD5D9", // Vermelho mais claro
      200: "#FFB3B7", // Vermelho claro
      300: "#FF9196", // Vermelho médio
      400: "#FF6B6B", // Vermelho principal
      500: "#FF4040", // Vermelho mais escuro
      600: "#FF2222", // Vermelho profundo
      700: "#FF0E0E", // Vermelho intenso
      800: "#FF0000", // Vermelho escuro
      900: "#DB0000", // Vermelho mais escuro
      BG: "#FFFFFF", // Branco de fundo
      dark: "#FF6B6B", // Vermelho principal
    },
    secondary: {
      50: "#E3F9E5",
      100: "#C1EAC5",
      200: "#A3D9A3",
      300: "#7BC47F",
      400: "#57AE5B",
      500: "#3F9142", // Verde principal
      600: "#2F8132",
      700: "#207227",
      800: "#0E5814",
      900: "#05400A",
    },
    text: {
      100: "#F0F3F8",
      200: "#D9E2EC",
      300: "#BCCCDC",
      400: "#9FB3C8",
      500: "#829AB1",
      600: "#627D98",
      700: "#486581",
      800: "#334E68",
      900: "#243B53",
    },
    // Outras cores
  },
  components: {
    TextStyle,
  },
});
