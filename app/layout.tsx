import "styles/tailwind.css"
import "styles/global.css"
import { ChakraProvider, FloatButton, Footer, Header } from "components"
import { fonts } from "./fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { breeSerif, raleway, encodeSans } = fonts

  return (
    <html lang="en" className={`${breeSerif.variable} ${raleway.variable} ${encodeSans.variable}`}>
      <body className="bg-[#F3F4F6]">
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
