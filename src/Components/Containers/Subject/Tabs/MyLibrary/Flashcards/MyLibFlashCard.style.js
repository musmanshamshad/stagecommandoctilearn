import { styled } from "@mui/material";
import pallete from "./../../../../../../config/palette.js";

export const TextWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(7),
}));

export const MainWrapper = styled("div")(({ theme }) => ({
  background: "pink",
  padding: theme.spacing(3.75),
}));
export const DivText = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: pallete.colors.unselected,
  paddingTop: theme.spacing(3),
}));
