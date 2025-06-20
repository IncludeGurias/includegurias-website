import { Metadata } from "next";
import { getLayout } from "components";
import baseMetadata from "utils/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Eventos e Atividades",
  description: "Conheça os eventos e atividades do projeto #include <gurias>!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return getLayout(children);
}
