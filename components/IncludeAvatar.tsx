import { Avatar } from "@chakra-ui/react";
import { IncludeAvatar } from "public";

const AvatarInclude = ({ name }: { name?: string }) => {
  return <Avatar src={IncludeAvatar.src} name={name ?? "Include Gurias"} />;
};

export default AvatarInclude;
