"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export interface RevealProps {
  children: React.ReactNode;
  animationdirection?: "left" | "right" | "top" | "bottom" | "none";
  delay?: number;
  className?: string;
  dontanimateonview?: string;
  layout?: boolean;
  layoutID?: string;
  key?: any;
  animateOnce?: boolean;
}

const Reveal = ({
  children,
  delay = 0,
  animationdirection = "none",
  ...props
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleInView = () => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  };

  function getStart() {
    if (animationdirection === "none") {
      return { x: 0, y: 0 };
    } else if (animationdirection === "left") {
      return { x: -100 };
    } else if (animationdirection === "right") {
      return { x: 100 };
    } else if (animationdirection === "top") {
      return { y: -100 };
    } else if (animationdirection === "bottom") {
      return { y: 100 };
    } else {
      return { x: 0, y: 0 };
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={isInView && !hasAnimated ? "visible" : "hidden"}
      initial="hidden"
      {...(props.key && { key: props.key })}
      {...(props.className && { className: props.className })}
      transition={{ duration: 0.5, delay: delay }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, ...getStart() },
      }}
      {...(props.layoutID && { layoutId: props.layoutID })}
      {...(props.layout && { layout: true })}
      {...props}
      onViewportEnter={handleInView}
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
