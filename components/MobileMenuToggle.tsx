import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { Menu } from "heroicons-react";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenuToggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Tooltip label="Newsletter" >
        <>
            <MobileMenuButton label="Menu" icon={<Menu />} onClick={onOpen} />
        </>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent borderTopRadius="6px">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                <MobileMenuItem href="/" title="Home" />
                <MobileMenuItem href="/about" title="About" />
                <MobileMenuItem href="/blog" title="Blog" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenuToggle;