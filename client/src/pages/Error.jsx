import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading fontWeight={600} fontSize={{ base: "8xl" }}>
          <Text as={"span"} color={"red.400"}>
            404
          </Text>
        </Heading>
        <Heading fontWeight={600} fontSize={{ base: "3xl" }}>
          <Text as={"span"} color={"red.400"}>
            No such page was found
          </Text>
        </Heading>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Link to="/">
            {" "}
            <Text
              as={"span"}
              color={"blue.400"}
              border="1px solid"
              p="10px"
              borderRadius="10px"
            >
              Back to Home
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Error;
