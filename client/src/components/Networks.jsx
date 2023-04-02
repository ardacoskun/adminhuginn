import React from "react";
import PropTypes from "prop-types";
import { Wrap } from "@chakra-ui/react";
import NetworkCard from "./ui/NetworkCard";

const Networks = ({ networks }) => {
  return (
    <Wrap spacing="30px" justify="center" p="10px 0">
      {networks?.map((item) => (
        <NetworkCard key={item._id} {...item} />
      ))}
    </Wrap>
  );
};

Networks.propTypes = {
  networks: PropTypes.array,
};

export default Networks;
