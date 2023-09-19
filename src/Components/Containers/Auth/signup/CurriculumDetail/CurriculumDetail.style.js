import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SelectCompo from "../../../../UI/Select/SelectComp.jsx";

export const ColorButton = styled(Button)(
  ({ theme, backgroundcolor, color }) => ({
    color: color,
    width: "100%",
    backgroundColor: backgroundcolor,
    marginTop: "1.7rem",
    borderRadius: "0.625rem",
    textTransform: "capitalize",
    marginBottom: "1.025rem",
    "&:hover": {
      backgroundColor: backgroundcolor,
    },
  })
);
export const PreviousButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const SelectCompoWrapper = styled(SelectCompo)(({ theme }) => ({
  paddingBottom: "10px",
  background: "red",
}));
