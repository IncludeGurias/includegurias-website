import { FloatButton, Footer, Header } from "components"
import "styles/global.css"
import "styles/tailwind.css"

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
