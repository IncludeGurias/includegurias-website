import { fonts } from "app/fonts"
import { ChakraProvider, FloatButton, Footer, Header } from "components"
import "styles/global.css"
import "styles/tailwind.css"

export function HeaderAndFooter({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-[#F3F4F6]">
      <ChakraProvider>
        <Header />
        <FloatButton />
        <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
        <Footer />
      </ChakraProvider>
    </body>
  )
}

export function OnlyHeader({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-[#F3F4F6]">
      <ChakraProvider>
        <Header />
        <FloatButton />
        <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
      </ChakraProvider>
    </body>
  )
}

export function CleanLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
    </ChakraProvider>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  const { breeSerif, raleway, encodeSans } = fonts

  return (
    <html lang="en" className={`${breeSerif.variable} ${raleway.variable} ${encodeSans.variable}`}>
      {children}
    </html>
  )
}

export function getLayout(page: React.ReactNode) {
  return <HeaderAndFooter>{page}</HeaderAndFooter>
}

export function getOnlyHeaderLayout(page: React.ReactNode) {
  return <OnlyHeader>{page}</OnlyHeader>
}

export function getCleanLayout(page: React.ReactNode) {
  return <CleanLayout>{page}</CleanLayout>
}

export function getRootLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>
}
