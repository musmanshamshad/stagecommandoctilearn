import React from "react";
import Grid from "@mui/material/Grid";

const GridComp = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridComp;
