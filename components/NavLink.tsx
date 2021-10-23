import React from 'react';
import NextLink from "next/link";
import { useRouter } from "next/router";

import {
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";

interface NavLinkProps {
    href: string;
    name: string;
}

function NavLink({ name, href, ...rest }: NavLinkProps) {
    var isActive = false;
    const { pathname } = useRouter();
  
    if (href !== "/") {
      const [, group] = href.split("/");
  
      isActive = pathname.includes(group);
    } else {
      if (href === pathname) {
        isActive = true;
      }
    }
  
    return (
      <NextLink href={href} passHref>
        <Button
          aria-current={isActive ? "page" : undefined}
          variant="ghost"
          size="md"
          {...rest}
          _activeLink={{
            color: useColorModeValue("blue.500", "blue.200"),
          }}
          px={4}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  export default NavLink;