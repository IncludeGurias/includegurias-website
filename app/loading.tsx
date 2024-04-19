import { Box, Spinner } from "@chakra-ui/react"
import Image from "next/image"
import { Logo } from "public"

const LoadingPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection={{ base: "column" }}>
      <Image src={Logo} alt="Logo" width={200} height={200} />

      <Spinner size="lg" color="primary.400" />
    </Box>
  )
}

export default LoadingPage
