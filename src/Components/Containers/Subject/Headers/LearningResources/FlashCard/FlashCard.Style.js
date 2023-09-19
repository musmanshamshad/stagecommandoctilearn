import { styled } from "@mui/system";
import Button from "../../../../../UI/Button/ButtonComp";
import palette from "./../../../../../../config/palette";
import GridComp from "./../../../../../UI/Grid/Grid.jsx";
import { Stack } from "@mui/material";

export const FlashCardHeaderWrapper = styled(GridComp)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const FlashCardTagsButton = styled(Button)(({ theme, isActive }) => ({
  textTransform: "capitalize",
  color: isActive ? "white" : palette.colors.unselected,
  backgroundColor: isActive ? palette.colors.primaryModified : "#f1f2f7",
  borderRadius: "50px",
  marginRight: "5px",
  marginLeft: "5px",
  marginBottom: "0.5rem",
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem",
  "&:hover": {
    color: isActive ? "white" : "unselected",
    backgroundColor: isActive ? palette.colors.primaryModified : "#f1f2f7",
  },
  "&:focus": {
    color: "white",
    backgroundColor: palette.colors.primaryModified,
  },
  [theme.breakpoints.down("xl")]: {
    margin: theme.spacing(0.5),
  },
  minWidth:"max-content"
}));
export const FlashCardTagStack = styled(Stack)(({ theme, isActive }) => ({
  alignItems:"center",
  padding:theme.spacing(1),
  width:"100%",
  overflowX:"auto"
}));

