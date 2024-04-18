"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface RevealProps {
  children: React.ReactNode;
  animationdirection?: "left" | "right" | "top" | "bottom" | "none";
  delay?: number;
  className?: string;
  dontanimateonview?: string;
  layout?: boolean;
  layoutID?: string;
  key?: any;
}

const Reveal = ({ children, ...props }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animationDirection = props.animationdirection || "none";

  function getStart() {
    if (animationDirection === "none") {
      return { x: 0, y: 0 };
    } else if (animationDirection === "left") {
      return { x: -100 };
    } else if (animationDirection === "right") {
      return { x: 100 };
    } else if (animationDirection === "top") {
      return { y: -100 };
    } else if (animationDirection === "bottom") {
      return { y: 100 };
    } else {
      return { x: 0, y: 0 };
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={
        props.dontanimateonview === "true"
          ? "visible"
          : isInView
            ? "visible"
            : "hidden"
      }
      initial="hidden"
      {...(props.key && { key: props.key })}
      {...(props.className && { className: props.className })}
      transition={{ duration: 0.5, delay: props.delay || 0 }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, ...getStart() },
      }}
      {...(props.layoutID && { layoutId: props.layoutID })}
      {...(props.layout && { layout: true })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

export const RevealClientOnly = ({ children, ...props }: RevealProps) => {
  if (typeof window === "undefined") {
    return null;
  }

  return <Reveal {...props}>{children}</Reveal>;
};
