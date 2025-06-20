import { Metadata } from "next"
import { getRootLayout } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Include Gurias - Garotas que codam mudam o mundo",
  description:
    "Projeto Include Gurias: Despertando o interesse de meninas na área STEM através do desenvolvimento do pensamento computacional. Oficinas de programação, robótica e tecnologia para empoderar mulheres na ciência.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Include Gurias - Garotas que codam mudam o mundo",
    description:
      "Projeto Include Gurias: Despertando o interesse de meninas na área STEM através do desenvolvimento do pensamento computacional. Oficinas de programação, robótica e tecnologia para empoderar mulheres na ciência.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Include Gurias - Garotas que codam mudam o mundo",
    description:
      "Projeto Include Gurias: Despertando o interesse de meninas na área STEM através do desenvolvimento do pensamento computacional. Oficinas de programação, robótica e tecnologia para empoderar mulheres na ciência.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getRootLayout(children)
}
