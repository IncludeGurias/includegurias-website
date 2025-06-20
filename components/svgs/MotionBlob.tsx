"use client";
import { IconProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Blob from "./blob";

const MotionBlob = (props: IconProps) => {
  const ref = useRef(null);

  const draw = {
    hidden: { pathLength: 0, scale: 0.5, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        scale: 1.25,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      className="absolute inset-0 size-full"
      initial={"hidden"}
      animate={"visible"}
      ref={ref}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      variants={draw}
    >
      <Blob {...props} />
    </motion.svg>
  );
};

export default MotionBlob;
