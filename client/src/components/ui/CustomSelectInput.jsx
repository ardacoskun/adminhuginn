import React from "react";
import PropTypes from "prop-types";
import { Select } from "@chakra-ui/react";

const CustomSelectInput = (props) => {
  const { options, name, onChange } = props;
  return (
    <Select {...props} onChange={(e) => onChange(name, Number(e.target.value))}>
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
