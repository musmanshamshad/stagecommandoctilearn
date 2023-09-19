import { styled } from "@mui/material";
import TypographyCompo from './../../../../../../../UI/Typography/TypographyCompo';
import Appbar from './../../../../../../../UI/Navbars/Secondary/Secondary';
import pallete from './../../../../../../../../config/palette'

export const Main = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const Typography = styled(TypographyCompo)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
  color: pallete.colors.unselected
}));
export const TabAppbar = styled(Appbar)(({ theme }) => ({
  backgroundColor:"blue",
  background:"pink",
  color:"red"
}));
