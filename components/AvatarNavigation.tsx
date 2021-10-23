import React from "react";
import {
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";

const AvatarNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <Link href="/">
      <Avatar
        name="Rafael Mosias"
        size="sm"
        src="https://avatars.githubusercontent.com/u/86744969?s=400&u=a3c5e2bf2ff77d5717f37b5cdf1a251b7625da9d&v=4"
        cursor="pointer"
      />
    </Link>
  );
};

export default AvatarNavigation;