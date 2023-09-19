import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import palette from "./../../../config/palette.js";

const Loader = ({ ...props }) => {
  const Wrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <Wrapper>
      <CircularProgress
        {...props}
        sx={{ color: palette.colors.secondaryModified }}
      />
    </Wrapper>
  );
};

export default Loader;
