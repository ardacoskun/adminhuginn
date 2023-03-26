import React from "react";
import PropTypes from "prop-types";

const Logo = ({ width, height }) => {
  return (
    <img
      src="./images/logo.jpeg"
      style={{
        borderRadius: "50%",
        width,
        height,
        objectFit: "cover",
      }}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
