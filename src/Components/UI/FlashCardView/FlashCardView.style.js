import { styled } from "@mui/material";
import TypographyCompo from "./../Typography/TypographyCompo";
import Palette from "../../../config/palette";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const Container = styled("div")(({ theme }) => ({
  marginLeft: "2rem",
  marginRight: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "1rem",
    marginRight:"1rem"
  },
}));

export const StackWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
export const ColDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const DividerWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const CardDivWrapper = styled("div")(({ theme }) => ({
  background: "white",
  height: "50vh",
  overflow:'auto',
  borderRadius: "15px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
export const SetperDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Typography = styled(TypographyCompo)(({ theme }) => ({
  textAlign: "center",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

export const ButtonTerm = styled(Button)(({ theme }) => ({
  background: Palette.colors.selectedColor,
  color: Palette.colors.unselected,
  borderRadius: "50px",
  "&:hover": {
    background: Palette.colors.selectedColor,
  },
}));

export const ButtonDefinition = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: Palette.colors.secondaryModified,
}));
export const RightLeftButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: theme.spacing(2),
  width:"100%",
 
}));
export const StyleButton = styled(Button)(({ background, theme }) => ({
  background: background,
  borderRadius: "15px",
  marginRight: "10px",
  marginLeft: "10px",
  // margin:"10px"
}));
export const ButtonTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
export const ButtonDefinitionWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "40%",
   [theme.breakpoints.down("sm")]: {
     marginLeft: "0%",
  },
}));
export const IconButtonWrapper = styled(IconButton)(({ theme, _fullview }) => ({
  background: _fullview
    ? Palette.colors.selectedColor
    : Palette.colors.primaryModified,
}));
