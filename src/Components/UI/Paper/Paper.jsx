import React from "react";
import { Paper } from "@mui/material";
import  PropTypes  from "prop-types";

const PaperComp = ({
  backgroundColor,
  borderRadius,
  borderColor,
  elevation,
  children,
  variant,
  ...props
}) => {
  return (
    <Paper
      variant={variant}
      elevation={elevation}
      sx={{ backgroundColor, borderRadius, borderColor }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default PaperComp;

PaperComp.propTypes = {
  elevation: PropTypes.number,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
};

PaperComp.defaultProps = {
  elevation: 0,
  variant: "outlined",
  backgroundColor: "#FFF",
  borderRadius: "15px",
  borderColor: "#F0F0FB",
};
