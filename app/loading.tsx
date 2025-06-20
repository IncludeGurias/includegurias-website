import { Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { Logo } from "public";

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Image src={Logo} alt="Logo" width={200} height={200} />
      <Spinner
        size="xl"
        color="primary.400"
        scale={5}
        speed="0.65s"
        emptyColor="gray.200"
      />
    </div>
  );
};

export default LoadingPage;
