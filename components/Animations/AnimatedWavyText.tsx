"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ClassNames {
  firstLine?: string;
  secondLine?: string;
  div?: string;
}

interface Styles {
  firstLine?: any;
  secondLine?: any;
}

interface AnimatedWavyTextProps {
  line1: string;
  line2?: string;
  ClassNames?: ClassNames;
  Styles?: Styles;
}

const AnimatedWavyText = ({
  line1,
  line2,
  ClassNames,
  Styles,
}: AnimatedWavyTextProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const line1Class = ClassNames?.firstLine || "";
  const line2Class = ClassNames?.secondLine || "";
  const line1Style = Styles?.firstLine || {};
  const line2Style = Styles?.secondLine || {};

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`min-h-[135px] ${ClassNames?.div}`}>
      {isMounted && (
        <motion.h3
          className="load-screen--message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span
                className={"load-screen--message__letter " + line1Class}
                {...(line1Style && { style: line1Style })}
                key={char + "-" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            );
          })}

          {line2 ? (
            <>
              <br />
              {line2.split("").map((char, index) => {
                return (
                  <motion.span
                    className={"load-screen--message__letter " + line2Class}
                    {...(line2Style && { style: line2Style })}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </>
          ) : null}
        </motion.h3>
      )}
    </div>
  );
};

export default AnimatedWavyText;
