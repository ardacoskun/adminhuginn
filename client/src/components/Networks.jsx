import React from "react";
import PropTypes from "prop-types";
import { Wrap } from "@chakra-ui/react";
import NetworkCard from "./ui/NetworkCard";

const Networks = (props) => {
  return (
    <Wrap spacing="30px" justify="center" p="10px 0">
      <NetworkCard />
      <NetworkCard />
      <NetworkCard />
      <NetworkCard />
    </Wrap>
  );
};

Networks.propTypes = {};

export default Networks;
