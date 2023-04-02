import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField, Logo, CustomButton } from "../components";
import { Link } from "react-router-dom";

const AuthForm = ({ isLogin, handleChange, values, onSubmit, errors }) => {
  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={{
            base: "#fff",
            sm: "bg-surface",
          }}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack
              spacing="6"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo width="50%" height="50%" />
              <Stack
                spacing={{
                  base: "2",
                  md: "3",
                }}
                textAlign="center"
              >
                <Heading
                  size={{
                    base: "xs",
                    md: "md",
                  }}
                >
                  {isLogin ? "Login" : "Register"}
                </Heading>
                <HStack spacing="1" justify="center">
                  <Text color="muted">
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </Text>
                  <Link to={`/${isLogin ? "register" : "login"}`}>
                    <Button variant="link" colorScheme="blue">
                      {isLogin ? "Sign Up" : "Login"}
                    </Button>
                  </Link>
                </HStack>
              </Stack>
            </Stack>
            <Stack spacing="5">
              {!isLogin ? (
                <FormControl isInvalid={errors.username}>
                  <FormLabel htmlFor="email">Username</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values?.username}
                  />
                  {errors.username && (
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  )}
                </FormControl>
              ) : null}
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values?.email}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <PasswordField
                name="password"
                onChange={handleChange}
                value={values?.password}
                error={errors.password}
              />
            </Stack>
            <HStack justify="space-between">
              {/* <Checkbox defaultChecked>Remember me</Checkbox> */}
              {isLogin ? (
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              ) : null}
            </HStack>
            <CustomButton
              text={isLogin ? "Login" : "Register"}
              onClick={onSubmit}
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

AuthForm.prototypes = {
  isLogin: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  isLogin: true,
};

export default AuthForm;
