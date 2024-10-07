import { getLayout } from "components"
import { Metadata } from "next"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Materiais - Include Gurias",
  description: "Conheça os materiais disponíveis para todos criados pela equipe do Include Gurias.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
