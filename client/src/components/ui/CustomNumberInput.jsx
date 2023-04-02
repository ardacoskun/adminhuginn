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
  const { name, value, onChange } = props;
  return (
    <NumberInput
      defaultValue={value}
      precision={1}
      step={0.5}
      min={0}
      onChange={(val) => onChange(name, Number(val))}
    >
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
