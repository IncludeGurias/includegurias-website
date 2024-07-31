import { Metadata } from "next"
import { ChakraProvider } from "components"
import "styles/global.css"
import "styles/tailwind.css"
import baseMetadata from "utils/metadata"
import { fonts } from "./fonts"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Bem-vinda(o) ao Include Gurias",
  description: "Garotas que codam mudam o mundo!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { breeSerif, raleway, encodeSans } = fonts

  return (
    <html lang="en" className={`${breeSerif.variable} ${raleway.variable} ${encodeSans.variable}`}>
      <body className="bg-[#F3F4F6]">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
