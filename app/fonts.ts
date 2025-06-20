import { Bree_Serif, Encode_Sans, Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const encodeSans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encoded-sans",
});
const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree-serif",
});

export const fonts = {
  raleway,
  encodeSans,
  breeSerif,
};
