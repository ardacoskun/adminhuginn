import React from "react";
import PropTypes from "prop-types";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

const CustomInput = (props) => {
  const { type } = props;
  return (
    <>
      {type === "address" ? (
        <InputGroup>
          <InputLeftAddon children="https://" />
          <Input {...props} />
        </InputGroup>
      ) : (
        <Input {...props} size="md" />
      )}
    </>
  );
};

CustomInput.propTypes = {};

export default CustomInput;
