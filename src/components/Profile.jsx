import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Image,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomInput from "./ui/CustomInput";
import CustomSelectInput from "./ui/CustomSelectInput";
import { profileStatus } from "../../data/data";
import { PasswordField } from "./ui/PasswordInput";
const Profile = (props) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Container maxW="8xl" pb={isDesktop ? "" : "20px"}>
      <FormControl>
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            gap: "20px",
          }}
        >
          <Box>
            <Image
              boxSize={isDesktop ? "400px" : "250px"}
              src="../images/avatar.jpg"
              alt="user"
              borderRadius="10px"
              margin={!isDesktop ? "auto" : ""}
            />
          </Box>
          <Box flex="1" display="flex" flexDirection="column" gap="15px">
            <Box>
              <FormLabel>Username</FormLabel>
              <CustomInput placeholder="Username" />
            </Box>
            <Box>
              <FormLabel>Email</FormLabel>
              <CustomInput placeholder="email" isReadOnly />
            </Box>
            <Box>
              <FormLabel>Account Status</FormLabel>
              <CustomSelectInput options={profileStatus} />
            </Box>
            <Box>
              <PasswordField />
            </Box>
            <ButtonGroup spacing="10">
              <Button colorScheme="green" flex="1">
                Save
              </Button>
              <Button colorScheme="red" flex="1">
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </FormControl>
    </Container>
  );
};

Profile.propTypes = {};

export default Profile;
