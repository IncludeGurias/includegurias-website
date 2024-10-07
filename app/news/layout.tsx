import { Metadata } from "next"
import { getLayout } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Include News",
  description: "Fique por dentro de todas as novidades do Include!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
