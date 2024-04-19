import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const getIcon = (socialMedia: string) => {
  switch (socialMedia.toLocaleLowerCase()) {
    case "instagram":
      return FaInstagram
    case "facebook":
      return FaFacebook
    case "youtube":
      return FaYoutube
    case "twitter":
      return FaTwitter
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
