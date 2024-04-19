import { Container } from "@chakra-ui/react"
import { Metadata } from "next"
import Link from "next/link"
import { Timeline } from "components"
import baseMetadata from "utils/metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Linha do Tempo",
  description: "Conheça a história do projeto #include <gurias>!",
}

export default function TimelinePage() {
  return (
    <div className="mt-[100px] flex min-h-screen w-screen flex-col items-center justify-center bg-gray-100">
      {/* banner de em contrução */}
      <h1 className="text-4xl text-gray-500">Página em construção</h1>
      <Link href="/">
        <div className="text-blue-500">Voltar para a página inicial</div>
      </Link>
      <Container maxW={{ base: "100%", md: "7xl" }}>
        <Timeline />
      </Container>
    </div>
  )
}
