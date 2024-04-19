"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RotateRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  animateonview?: string
  layout?: boolean
  layoutID?: string
  duration?: number
}

const RotateReveal = ({ children, ...props }: RotateRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <motion.div
      ref={ref}
      animate={props.animateonview ? (isInView ? "visible" : "hidden") : "visible"}
      transition={{
        duration: props.duration || 0.5,
        delay: props.delay || 0,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      variants={{
        visible: { rotate: 360, scale: 1 },
        hidden: { rotate: 0, scale: 0 },
      }}
      {...(props.layoutID && { layoutId: props.layoutID })}
      {...(props.layout && { layout: true })}
      {...props}
      {...(props.className && { className: props.className })}
    >
      {children}
    </motion.div>
  )
}

export default RotateReveal
