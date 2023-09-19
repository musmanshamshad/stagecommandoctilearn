import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButton = styled(Button)(
  ({ theme, backgroundcolor, color }) => ({
    color: color,
    width: "100%",
    backgroundColor: backgroundcolor,
    marginTop: "2.3rem",
    borderRadius: "0.625rem",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: backgroundcolor,
    },
  })
);
