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
const Profile = ({ handleChange, values, onSubmit, setFieldValue }) => {
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
              m={!isDesktop ? "auto" : ""}
            />
          </Box>
          <Box flex="1" display="flex" flexDirection="column" gap="15px">
            <Box>
              <FormLabel>Username</FormLabel>
              <CustomInput
                placeholder="Username"
                onChange={handleChange}
                name="username"
                id="username"
                type="text"
                value={values?.username}
              />
            </Box>
            <Box>
              <FormLabel>Email</FormLabel>
              <CustomInput
                placeholder="email"
                isReadOnly
                onChange={handleChange}
                name="email"
                id="email"
                type="email"
                value={values?.email}
              />
            </Box>
            <Box>
              <FormLabel>Account Status</FormLabel>
              <CustomSelectInput
                options={profileStatus}
                onChange={setFieldValue}
                name="isAdmin"
                id="isAdmin"
                value={values?.isAdmin}
              />
            </Box>
            <Box>
              <PasswordField />
            </Box>
            <ButtonGroup spacing="10">
              <Button colorScheme="green" flex="1" onClick={onSubmit}>
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
