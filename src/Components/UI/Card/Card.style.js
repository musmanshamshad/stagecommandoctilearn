import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../config/palette";

export const StyledCard = styled(Paper)(({ theme, nopadding }) => ({
  background: palette.colors.whiteColor,
  boxShadow: "20px 20px 62px rgba(228, 216, 216, 0.23)",
  borderRadius: "15px",
  padding: +nopadding ? "0" : "17px 20px",
}));
