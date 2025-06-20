import { getCleanLayout } from "components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return getCleanLayout(children);
}
