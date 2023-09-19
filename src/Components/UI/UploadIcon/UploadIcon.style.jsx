import { styled } from "@mui/material/styles";

export const Input = styled("input")({
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1900,
  });
  export const Label = styled("label")({
    position: "relative",
    height: "100%",
    display: "inline",
  });