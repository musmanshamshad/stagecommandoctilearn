import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import palette from "./../../../../../../../../config/palette";

export const LinkWrapper = styled(Link)(({ theme }) => ({
  color: palette.colors.unselected,
}));
