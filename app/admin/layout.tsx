import "styles/global.css"
import "styles/tailwind.css"

export const metadata = {
  title: "Admin - Include Gurias",
  description: "Administração do Include Gurias",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen min-h-screen overflow-hidden">{children}</main>
}
