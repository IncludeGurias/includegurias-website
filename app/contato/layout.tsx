import { Metadata } from "next"
import { getOnlyHeaderLayout } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Contato - Include Gurias",
  description: "Entre em contato com a equipe do Include Gurias!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getOnlyHeaderLayout(children)
}
