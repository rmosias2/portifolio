import React from "react";
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Container from "./Container";
import ThemeToggle from "./ToggleTheme";
import AvatarNavigation from "./AvatarNavigation";
import NavLink from "./NavLink";


const Header = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <AvatarNavigation />
            <HStack ml={-4} spacing={2}>
              <NavLink href="/about" name="About" />
              <NavLink href="/blog" name="Blog" />
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default Header;