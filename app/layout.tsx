import { Metadata } from "next";
import { getRootLayout } from "components";
import baseMetadata from "utils/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Bem-vinda(o) ao Include Gurias",
  description: "Garotas que codam mudam o mundo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return getRootLayout(children);
}
