import { Button, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

interface iconCircleButtonProps {
  icon: any;
  href?: string;
  tooltip: string;
  bgColor?: string;
  onClick?: () => void;
}

const IconCircleButton = ({
  icon,
  href,
  tooltip,
  bgColor,
  onClick,
}: iconCircleButtonProps) => {
  return (
    <Link href={href ?? "#"} passHref>
      <Tooltip label={tooltip} aria-label={tooltip}>
        <Button
          borderRadius="full"
          height="50px"
          width="50px"
          boxShadow="lg"
          transition={"all 0.2s ease-in-out"}
          fontSize={"4xl"}
          {...(onClick && { onClick })}
          backgroundColor={bgColor ?? "white"}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            zIndex: 1,
            filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2))",
          }}
        >
          {icon}
        </Button>
      </Tooltip>
    </Link>
  );
};

export default IconCircleButton;
