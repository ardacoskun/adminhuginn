import React from "react";
import PropTypes from "prop-types";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const CustomNumberInput = (props) => {
  return (
    <NumberInput defaultValue={0} precision={1} step={0.5} min={0}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

CustomNumberInput.propTypes = {};

export default CustomNumberInput;
