import React from "react";
import {
  Box,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MobileMenuToggle";
import ThemeToggle from "./ToggleTheme";

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "closed"}
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      display={{ base: "block", md: "none" }}
    >
      <HStack
        justify="space-around"
        align="center"
        py={2}
        mt="auto"
        height={16}
        bg={useColorModeValue("white", "gray.800")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("gray.100", "gray.700")}
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
      >
        <MenuToggle />
        <ThemeToggle mobile />
      </HStack>
    </MotionBox>
  );
};

export default MobileNavigation;