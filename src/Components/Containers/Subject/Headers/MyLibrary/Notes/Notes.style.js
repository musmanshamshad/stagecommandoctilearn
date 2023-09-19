import { styled } from "@mui/system";
import Button from "../../../../../UI/Button/ButtonComp";
import Stack from "../../../../../UI/Stack/Stack";
import palette from "../../../../../../config/palette";

export const StackWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  // height: theme.spacing(19),
   [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

  },
}));

export const HeaderButton = styled(Button)(({ theme, isActive }) => ({
  textTransform: "capitalize",
  color: isActive ? "white" : palette.colors.unselected,
  cursor: "pointer",
  background: isActive ? palette.colors.primaryModified : "white",
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem",
  // overflow: "visible",
  "&:hover": {
    color: isActive ? "white" : "black",
    background: isActive
      ? palette.colors.primaryModified
      : palette.colors.selectedColor,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:"12px",
}
}));

export const HeaderDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SearchDiv = styled("div")(({ theme }) => ({
  display: "flex",
  width:"100%",
  justifyContent: "space-between",
  alignItems: "center",
  // marginTop: "-20px !important",
  position: "relative",
}));

export const PhysicsImgae = styled("img")(({ theme }) => ({
  width: "30rem",
  height: "auto",
  // marginTop: "-70px",
   [theme.breakpoints.down("md")]: {
    width:"15rem"
  },
}));
