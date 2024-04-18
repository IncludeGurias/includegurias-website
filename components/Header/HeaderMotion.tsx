"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "public"
import { useEffect, useState } from "react"
import { headerMotionProps } from "types/Header"

export const HeaderMotion = ({ children }: headerMotionProps) => {
  const controls = useAnimation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  useEffect(() => {
    if (!isScrolled) {
      controls.start("visible")
      controls.start("heightMax")
    } else {
      controls.start("hidden")
      controls.start("heightMin")
    }
  }, [isScrolled, controls])

  return (
    <motion.div
      className="fixed z-50 w-full text-white"
      initial="hidden2"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, height: "100px" },
        hidden2: { opacity: 0, y: -250 },
        heightMin: {
          height: "60px",
          backgroundColor: "#F28080",
          shadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
        },
        heightMax: {
          height: "100px",
          backgroundColor: "#efc3c3",
          shadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        },
      }}
      transition={{ delay: 0, type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  )
}

export const LogoMotion = () => {
  const controls = useAnimation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  useEffect(() => {
    if (!isScrolled) {
      controls.start("visible")
      controls.start("heightMax")
    } else {
      controls.start("hidden")
      controls.start("heightMin")
    }
  }, [isScrolled, controls])

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: -250, scale: 0.5 },
      }}
      transition={{ delay: 0, type: "spring", stiffness: 50 }}
      className="hidden md:flex"
    >
      <Link href={"/"} style={{ width: "150px" }}>
        <Image src={Logo} alt="Logo" width={150} />
      </Link>
    </motion.div>
  )
}
