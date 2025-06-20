"use client";
import { motion, useAnimation } from "framer-motion";

interface Classnames {
  button?: string;
  icon?: string;
  divContainer?: string;
  span?: string;
}

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  classNames?: Classnames;
  recuo?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  icon,
  classNames,
  recuo,
  type,
  disabled,
}: PrimaryButtonProps) => {
  const controls = useAnimation();
  const iconControls = useAnimation();

  if (!recuo || recuo === undefined) {
    recuo = -180;
  }

  const onHoverStart = () => {
    controls.start({ y: "-100%" }); // Move o span para cima
    iconControls.start({ rotate: 360, x: recuo, scale: 1.5 });
  };

  const onHoverEnd = () => {
    controls.start({ y: "0%" }); // Move o span para baixo
    iconControls.start({ rotate: 0, x: 0, scale: 1 });
  };

  const whileTap = {
    scale: 0.9, // Efeito de escala para o clique
  };

  return (
    <div
      className={`relative inline-block min-w-[250px] ${classNames?.divContainer}`}
    >
      <motion.button
        disabled={disabled || false}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        type={type || "button"}
        whileTap={whileTap} // Adiciona animação de clique
        whileHover={{ scale: 1.1 }} // Efeito de escala no hover
        className={`relative w-full cursor-pointer overflow-hidden rounded-md bg-[var(--primary-400)] px-6 py-3 text-lg font-medium text-white shadow-md ${classNames?.button}
        disabled:cursor-not-allowed disabled:bg-[var(--primary-300)] disabled:text-[var(--primary-400)] disabled:opacity-50 disabled:hover:bg-[var(--primary-300)] disabled:hover:text-[var(--primary-400)]
        `}
        style={{ minWidth: "200px" }}
      >
        {/* Texto visível normalmente */}
        <span className="relative block">
          {icon && (
            <motion.div
              className={`icon absolute right-0 z-[9999] ${classNames?.icon}`}
              animate={iconControls}
            >
              {icon}
            </motion.div>
          )}
          {children}
        </span>
        {/* Texto que aparece no hover */}
        <motion.span
          className={`absolute left-0 top-0 flex size-full items-center justify-center bg-[var(--primary-300)] text-xl text-white ${classNames?.span}`}
          initial={{ y: "0%" }} // Define a posição inicial corretamente
          animate={controls}
        >
          {children}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default PrimaryButton;
