import * as React from "react";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const StackComp = ({ space, children, ...props }) => {
  return (
    <Stack spacing={space} {...props}>
      {children}
    </Stack>
  );
};
export default StackComp;

StackComp.propTypes = {
  space: PropTypes.number,
};

StackComp.defaultProps = {
  space: 2,
};
