import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex alignItems="center" justify="center">
      <Spinner width="100px" height="100px" />
    </Flex>
  );
};

export default Loading;
