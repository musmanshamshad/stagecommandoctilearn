import { styled } from "@mui/material";
import GridComp from "./../../../../../../UI/Grid/Grid";

export const Container = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
}));
export const LeftGrid = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "space-even",
 alignItems:"center",
 
}));
export const RightGrid = styled(GridComp)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
