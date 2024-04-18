"use client"
import Link from "next/link"
import { ReactNode } from "react"
import { Flex, IconButton, Tooltip } from "@chakra-ui/react"
import { Reveal } from "components"

export type VariantType = "shadow" | "solid" | "bordered" | "flat" | "faded" | "light" | "ghost" | undefined
export type BorderType = "none" | "sm" | "md" | "lg" | "full" | undefined

const Gradients: Record<string, string> = {
  instagram: "linear(#405DE6 0%, #833AB4 25%, #FD1D1D 50%, #F56040 75%, #FCAF45 100%)",
  facebook: "linear(#1877F2 0%, #1877F2 50%)",
  youtube: "linear(#FF0000 0%, #FF0000 50%)",
  twitter: "linear(#1DA1F2 0%, #1DA1F2 50%)",
  linkedin: "linear(#0077B5 0%, #0077B5 50%)",
  email: "linear(#EA4335 0%, #EA4335 50%)",
  github: "linear(#333333 0%, #333333 50%)",
  whatsapp: "linear(#25D366 0%, #25D366 50%)",
  tiktok: "linear(#000000 0%, #000000 50%)",
  "meninas digitais": "linear(#F56040 0%, #FCAF45 50%)",
}

const Colors: Record<string, string> = {
  instagram: "#833AB4",
  facebook: "#1877F2",
  youtube: "#FF0000",
  twitter: "#1DA1F2",
  linkedin: "#0077B5",
  email: "#EA4335",
  github: "#333333",
  whatsapp: "#25D366",
  tiktok: "#000000",
  "meninas digitais": "#F56040",
}

interface SocialButtonProps {
  children: ReactNode | ReactNode[]
  size: number
  animation?: string
  label: string
  href: string
  variant: VariantType
  circle?: boolean
  border?: BorderType
  className?: string
  showTooltip?: boolean
  blank?: boolean
  tooltipCustomLabel?: string
  delay?: number
  bg?: string
}

export default function SocialButton({
  children,
  size,
  animation,
  label,
  href,
  variant,
  circle = false,
  border,
  className,
  showTooltip = true,
  blank = false,
  tooltipCustomLabel,
  delay,
  bg,
}: SocialButtonProps) {
  if (label === "email") {
    href = `mailto:${href}`
  }

  label = label.charAt(0).toUpperCase() + label.slice(1)

  const buttonProps = {
    "aria-label": "social-media-button",
    className: `${className} w-[${size}px] h-[${size}px]`,
    bgGradient: Gradients[label.toLowerCase()],
    variant,
    rounded: circle ? "full" : border ? border : "md",
  }

  const buttonContent = (
    <Link href={href} target={blank ? "_target" : ""}>
      <Reveal delay={delay}>
        <Flex
          bgGradient={Gradients[label.toLowerCase()]}
          w={size}
          h={size}
          justifyContent={"center"}
          alignItems={"center"}
          {...(bg ? { bg } : {})}
          {...(circle ? { borderRadius: "50%" } : { rounded: border ? border : "md" })}
        >
          <IconButton
            w={size}
            h={size}
            {...buttonProps}
            transition={"all 0.3s ease-in-out"}
            color={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{
              bg: "transparent",
              transform: animation == "rotateHover" ? "rotate(360deg) scale(1.5)" : animation,
            }}
          >
            {children}
          </IconButton>
        </Flex>
      </Reveal>
    </Link>
  )

  return showTooltip ? (
    <Tooltip
      hasArrow
      key={label}
      label={tooltipCustomLabel || label}
      placement="top"
      bg={bg ? bg : Colors[label.toLowerCase()]}
      color={"white"}
      fontSize={"md"}
    >
      {buttonContent}
    </Tooltip>
  ) : (
    <>{buttonContent}</>
  )
}
