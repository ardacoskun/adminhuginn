import React from "react";
import PropTypes from "prop-types";
import { Select } from "@chakra-ui/react";

const CustomSelectInput = (props) => {
  const { options, placeholder } = props;
  return (
    <Select placeholder={placeholder}>
      {options?.map((item) => (
        <option key={item.id} value={item.value}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

CustomSelectInput.propTypes = {
  placeholder: PropTypes.string,
};

CustomSelectInput.defaultProps = {
  placeholder: "",
};

export default CustomSelectInput;
