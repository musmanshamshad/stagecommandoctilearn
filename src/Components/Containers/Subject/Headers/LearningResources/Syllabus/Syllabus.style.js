import { styled } from "@mui/system";
import Button from "../../../../../UI/Button/ButtonComp";
import Stack from "./../../../../../UI/Stack/Stack";
import palette from "./../../../../../../config/palette";
// import  Button  from '@mui/material/Button';


export const StackWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: "10px", 
  },
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: palette.colors.unselected,
  cursor: "pointer",
  background: "white",
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem",
  "&:hover": {
    color: "black",
    background: palette.colors.selectedColor,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px", 
  },
}));
export const ExpandButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  float: "left",
  background: "white",
  color: "black",
  "&:hover": {
    color: palette.colors.primaryModified,
    background: palette.colors.selectedColor,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px", 
  },
}));
export const HeaderDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow:"auto",
  width:"100%"
}));
