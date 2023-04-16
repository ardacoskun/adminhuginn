import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { socialMedia } from "../../data/data";
import { useCookies } from "react-cookie";

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
  {
    id: 3,
    title: "Users",
    link: "/users",
  },
];

const NavMenu = ({ isOpen }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("token", cookies.token);
    removeCookie("user", cookies.user);
    navigate("/login");
  };

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
      <Box spacing="3">
        <Menu>
          <MenuButton as={Button} colorScheme="blue">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaUser /> {cookies?.user?.username}
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
              <Link to={"/profile"}>
                <MenuItem>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "6px",
                    }}
                  >
                    <FaUser /> Profile
                  </div>
                </MenuItem>
              </Link>
              <MenuItem onClick={logout}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "6px",
                  }}
                >
                  <GoSignOut />
                  Log Out
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
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
