import "styles/tailwind.css"
import "styles/global.css"
import { FloatButton, Footer, Header } from "components"
import { fonts } from "./fonts"
import ChakraProvider from "../components/Providers/ChakraProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { breeSerif, raleway, encodeSans } = fonts

  return (
    <html lang="en" className={`${breeSerif.variable} ${raleway.variable} ${encodeSans.variable}`}>
      <body className="bg-white">
        {/* <ProtectedRoute> */}
        <ChakraProvider>
          <Header />
          <FloatButton />
          <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </ChakraProvider>
        {/* </ProtectedRoute> */}
      </body>
    </html>
  )
}
