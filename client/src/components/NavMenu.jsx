import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { socialMedia } from "../../data/data";

const navItems = [
  {
    id: 1,
    title: "All Networks",
    link: "/",
  },
  {
    id: 2,
    title: "Create Network",
    link: "/create",
  },
];

const profileItems = [
  {
    id: 1,
    icon: <FaUser />,
    title: "Profile",
    link: "/profile",
  },
  {
    id: 2,
    icon: <GoSignOut />,
    title: "Log Out",
    link: "/",
  },
];

const NavMenu = ({ isOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: isOpen ? "column" : "row",
        gap: isOpen ? "30px 0" : "",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: isOpen ? "flex-start" : "center",
          flexDirection: isOpen ? "column" : "row",
          gap: isOpen ? "30px 0" : "0 30px",
        }}
      >
        {navItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            style={{
              display: "inline-flex",
            }}
          >
            <Button variant="link">{item.title}</Button>
          </Link>
        ))}
      </div>
      <HStack spacing="3">
        <Menu>
          <MenuButton as={Button} colorScheme="blue">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaUser /> Profile
            </div>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Social Media">
              {socialMedia.map((item) => (
                <ChakraLink key={item.id} href={item.link}>
                  <MenuItem>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "6px",
                      }}
                    >
                      {item.icon} {item.title}{" "}
                    </div>
                  </MenuItem>
                </ChakraLink>
              ))}
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Profile">
              {profileItems.map((item) => (
                <Link key={item.id} to={item.link}>
                  <MenuItem>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "6px",
                      }}
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  </MenuItem>
                </Link>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    </div>
  );
};

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
};

NavMenu.defaultProps = {
  isOpen: false,
};

export default NavMenu;
