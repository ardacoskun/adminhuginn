import React, { useRef } from "react";
import {
  Box,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Logo from "./ui/Logo";
import DrawerExample from "./ui/DrawerExample";
import NavMenu from "./NavMenu";

const Navbar = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const btnRef = useRef();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow="sm"
        p={{
          base: "6",
        }}
      >
        <Container maxW="8xl">
          <HStack spacing="10" justify="space-between">
            <Link to="/">
              <Logo width="50px" height="50px" />
            </Link>
            {isDesktop ? (
              <NavMenu isOpen={isOpen} user={user} />
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                ref={btnRef}
                onClick={onOpen}
              />
            )}
          </HStack>
        </Container>
      </Box>

      {isOpen ? (
        <DrawerExample btnRef={btnRef} isOpen={isOpen} onClose={onClose}>
          <NavMenu isOpen={isOpen} user={user} />
        </DrawerExample>
      ) : null}
    </Box>
  );
};

export default Navbar;
