import PropTypes from "prop-types";
import React from "react";
import Box from "@mui/material/Box";

const BoxComp = ({ children, ...otherProps }) => {
  return <Box {...otherProps}>{children}</Box>;
};

BoxComp.propTypes = {
  children: PropTypes.any,
};

export default BoxComp;
