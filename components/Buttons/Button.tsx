import { twMerge } from "tailwind-merge";
import React from "react";

const intentClasses = {
  primary: "bg-blue-400 text-white hover:enabled:bg-blue-700 border-blue-400",
  secondary:
    "bg-transparent text-blue-400 hover:enabled:bg-blue-400 hover:enabled:text-white border-blue-400",
};

const sizeClasses = {
  sm: "min-w-20 h-full min-h-10 text-sm py-1.5 px-4",
  lg: "min-w-32 h-full min-h-12 text-lg py-2.5 px-6",
};

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  intent?: "primary" | "secondary";
  size?: "sm" | "lg";
  underline?: boolean;
  href: string;
}

export function Button({
  className,
  intent = "primary",
  size = "lg",
  underline = false,
  ...props
}: ButtonProps) {
  const classes = twMerge(
    "justify-center inline-flex items-center rounded-xl text-center border transition-colors delay-50",
    intentClasses[intent],
    sizeClasses[size],
    underline ? "underline" : "",
    className
  );
  return (
    <a className={classes} {...props}>
      {props.children}
    </a>
  );
}
