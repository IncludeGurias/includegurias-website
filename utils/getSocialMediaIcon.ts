import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const getIcon = (socialMedia: string) => {
  switch (socialMedia.toLocaleLowerCase()) {
    case "instagram":
      return FaInstagram
    case "facebook":
      return FaFacebook
    case "youtube":
      return FaYoutube
    case "twitter":
      return FaX
    case "linkedin":
      return FaLinkedin
    case "email":
      return FaEnvelope
    case "github":
      return FaGithub
    default:
      return FaInstagram
  }
}

export default getIcon
