import { StaticImageData } from "next/image";

export interface WhatWeDoCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  arrowTxt: string;
  arrowHref: string;
}
