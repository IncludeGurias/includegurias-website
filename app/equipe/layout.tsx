import { Metadata } from "next"
import { getLayout } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Nossa Equipe",
  description: "Conheça a equipe do projeto #include <gurias>!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
