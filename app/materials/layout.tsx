import { Metadata } from "next"
import { FloatButton, Footer, Header } from "components"
import "styles/global.css"
import "styles/tailwind.css"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Materiais - Include Gurias",
  description: "Conheça os materiais disponíveis para todos criados pela equipe do Include Gurias.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <FloatButton />
      <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}
